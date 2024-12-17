import { isTokenExpired, verifyToken } from '../middlewares/JWT.js';
import Anime from "../models/Anime.js";
import AnimeEpisode from "../models/AnimeEpisode.js";
import User from '../models/User.js';
import UserAnime from "../models/UserAnime.js";
import UserComment from '../models/UserComment.js';
import UserRating from "../models/UserRating.js";
export const animeInfo = async (req, res) => {
    try {
        const token = req.body.jwt;
        const anime_id = req.body.anime_id; // Lấy anime_id từ request body

        if (!anime_id) {
            return res.status(400).json({ message: "anime_id is required" });
        }

        // Tìm anime theo Anime_id (số)
        const anime = await Anime.findOne({ Anime_id: anime_id });
        if (!anime) {
            return res.status(404).json({ message: "Anime not found" });
        }

        // Tìm danh sách các tập của anime
        const episodes = await AnimeEpisode.find({ Anime_id: anime_id }).sort({ Episode: 1 });

        let rated = null; // Mặc định khi chưa đăng nhập
        if (token) {
            if(!isTokenExpired(token)){
                const decoded = verifyToken(token);
                const user_id = decoded.id;

                // Tìm trạng thái `rated` trong UserRating
                const userRating = await UserRating.find({ User_id: user_id, Anime_id: anime_id });
                rated = userRating.length > 0 ? userRating[0].Rating : null; // Truy cập phần tử đầu tiên của mảng
            }
        }

        // Trả về thông tin anime, danh sách tập và trạng thái `rated`
        return res.status(200).json({
            anime,
            episodes,
            rated,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export const animeLastestEpisode = async (req, res) => {
    try {
        const { n = 10 } = req.body;

        const latestAnime = await Anime.find().sort({ LastestEpisodeAired: -1 }).limit(n);
        res.status(200).json(latestAnime);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const animeMostFavorites = async (req, res) => {
    try {
        const { n = 10 } = req.body;

        const popularAnime = await Anime.find().sort({ Favorites: -1 }).limit(n);
        res.status(200).json(popularAnime);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}


export const animeSearch = async (req, res) => {
    try {
        const { JapaneseLevel, Type, Genre, limit, page } = req.body;
        const { n = 10 } = req.body;
        // Tạo bộ lọc linh hoạt
        const filters = {};
        if (JapaneseLevel) filters.JapaneseLevel = JapaneseLevel;
        if (Type) filters.Type = Type;
        if (Genre) filters.Genres = { $elemMatch: { $regex: Genre, $options: "i" } }; // Tìm kiếm phần tử trong mảng không phân biệt chữ hoa thường

        // Pagination (Phân trang)
        const pageNumber = parseInt(page) || 1; // Mặc định page = 1
        const pageSize = parseInt(n) || 10; // Mặc định limit = 10
        const skip = (pageNumber - 1) * pageSize;

        // Thực hiện truy vấn với phân trang và sắp xếp
        const results = await Anime.find(filters)
            .sort({ LastestEpisodeAired: -1 }) // Sắp xếp giảm dần theo tập mới nhất
            .skip(skip)
            .limit(pageSize);

        res.status(200).json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
};



export const animeUnfinished = async (req, res) => {
    try {
        const token = req.body.jwt;

        if (!token) {
            return res.status(401).json({
                message: "Người dùng chưa đăng nhập",
                success: false
            });
        }

        if (isTokenExpired(token)) {
            return res.status(401).json({
                message: "Người dùng hết phiên đăng nhập",
                success: false
            });
        }

        const decoded = verifyToken(token);
        const user_id = decoded.id;
        const { n = 10 } = req.body; // Số lượng kết quả muốn lấy (mặc định là 10)

        // Lấy danh sách anime chưa hoàn thành của người dùng
        const unfinishedUserAnimes = await UserAnime.find({ User_id: user_id, Status: false })
            .sort({ LastestTimeWatched: -1 }) // Sắp xếp theo thời gian xem gần nhất
            .limit(n);

        // Lấy thông tin chi tiết các anime
        const unfinishedAnimeIds = unfinishedUserAnimes.map(item => item.Anime_id);
        const unfinishedAnimes = await Anime.find({
            Anime_id: { $in: unfinishedAnimeIds },
        });

        // Trả về kết quả
        res.status(200).json(
            unfinishedAnimes,
        );
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getComment = async (req, res) => {
    const { anime_id } = req.body;
  
    // Kiểm tra đầu vào
    if (!anime_id) {
      return res.status(400).json({ error: 'Missing required anime_id or episode_id' });
    }
  
    try {
      // Lấy danh sách UserHistory có comment
      const userHistories = await UserComment.find({ 
        Anime_id: anime_id, 
        Comment: { $ne: null } // Chỉ lấy những bản ghi có comment
      });
  
      if (userHistories.length === 0) {
        return res.json({});
      }
  
      // Lấy danh sách user_id từ UserHistory
      const userIds = userHistories.map(history => history.User_id);
  
      // Lấy thông tin user từ bảng User
      const users = await User.find({ user_id: { $in: userIds } });
  
      // Kết hợp dữ liệu User và UserHistory
      const result = userHistories.map(history => {
        const user = users.find(u => u.user_id === history.User_id);
        return {
          full_name: user ? user.full_name : null, // Lấy tên đầy đủ từ User
          user_img: user ? user.user_img : null,
          comment: history.Comment // Lấy comment từ UserHistory
        };
      });
  
      res.status(200).json(result);
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

// Tìm kiếm anime theo tên (trong trường English name)
export const searchAnimeByName = async (req, res) => {
    try {
        const searchQuery = req.body.q;  // Lấy tên anime từ query parameter

        if (!searchQuery) {
            return res.status(400).json({
                message: "Tên anime không được để trống.",
                success: false
            });
        }

        // Tìm anime có tên tiếng Anh chứa searchQuery (dùng phương thức tìm kiếm không phân biệt chữ hoa chữ thường)
        const animeResults = await Anime.find({
            'English name': { $regex: searchQuery, $options: 'i' }  // Tìm kiếm không phân biệt chữ hoa chữ thường
        });

        // Trả về kết quả tìm kiếm
        return res.status(200).json({
            message: "Tìm kiếm thành công",
            success: true,
            anime: animeResults
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Lỗi server",
            success: false,
            error: error.message
        });
    }
};