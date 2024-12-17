import express from "express";
import { animeInfo, animeLastestEpisode, animeMostFavorites, animeSearch, animeUnfinished, getComment, searchAnimeByName } from "../controllers/anime.js";
import chatBot from "../controllers/chatbot.js";

const routerAnime = express.Router()
routerAnime.post("/animeInfo",animeInfo)
routerAnime.post("/search",animeSearch)
routerAnime.post("/lastestEpisode",animeLastestEpisode)
routerAnime.post("/mostFavorites",animeMostFavorites)
routerAnime.post("/unfinished",animeUnfinished)
routerAnime.post("/searchbyname",searchAnimeByName)
routerAnime.post("/getComment",getComment)
routerAnime.post("/chatbot",chatBot)
export default routerAnime;