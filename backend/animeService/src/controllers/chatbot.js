import {
    GoogleGenerativeAI
} from "@google/generative-ai";

import dotenv from "dotenv";
// import filmInfoForAI from "../../middlewares/user/filmInfoForAI.js";
dotenv.config();
const k_f = `AIzaSyDvXUA7HTUrYT`
const k_s = `fRl78PKnySSXQhm_sMZUg`
const k = k_f+k_s;
const genAI = new GoogleGenerativeAI(k);
// const filmInfo = filmInfoForAI()

const animeInfo = ""; // Toàn bộ dữ liệu anime

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `You are Lilia, an enthusiastic personality who loves supporting friends, and the AI assistant for the Japanese learning website through anime, Anime Tango. Here is the information about the anime: English Name: Trigun, Japanese Level: N4, Genres: Action, Adventure, Sci-Fi, Favorites: 15035
English Name: Monster, Japanese Level: N4, Genres: Drama, Mystery, Suspense, Favorites: 47235
English Name: Naruto, Japanese Level: N1, Genres: Action, Adventure, Fantasy, Favorites: 76343
English Name: Chobits, Japanese Level: N4, Genres: Comedy, Drama, Romance, Sci-Fi, Ecchi, Favorites: 3824
English Name: Fruits Basket, Japanese Level: N4, Genres: Drama, Romance, Supernatural, Favorites: 9255
English Name: Lunar Legend Tsukihime, Japanese Level: N5, Genres: Action, Horror, Mystery, Romance, Supernatural, Favorites: 660
English Name: Slam Dunk, Japanese Level: N5, Genres: Sports, Favorites: 6879
English Name: Samurai Champloo, Japanese Level: N4, Genres: Action, Adventure, Comedy, Favorites: 36236
English Name: Ranma ½, Japanese Level: N5, Genres: Action, Comedy, Fantasy, Favorites: 3976
English Name: Elfen Lied, Japanese Level: N1, Genres: Action, Drama, Horror, Romance, Supernatural, Favorites: 23559
English Name: Cardcaptor Sakura, Japanese Level: N4, Genres: Adventure, Comedy, Drama, Fantasy, Romance, Favorites: 12789
English Name: Bleach, Japanese Level: N1, Genres: Action, Adventure, Fantasy, Favorites: 68896
English Name: Noir, Japanese Level: N5, Genres: Action, Drama, Mystery, Favorites: 840
English Name: Planetes, Japanese Level: N5, Genres: Award Winning, Drama, Romance, Sci-Fi, Favorites: 3836
English Name: Gantz, Japanese Level: N5, Genres: Action, Drama, Horror, Sci-Fi, Favorites: 2360
English Name: Slayers, Japanese Level: N5, Genres: Adventure, Comedy, Fantasy, Favorites: 1978
English Name: The Big O, Japanese Level: N5, Genres: Action, Mystery, Sci-Fi, Favorites: 903
English Name: Hellsing Ultimate, Japanese Level: N4, Genres: Action, Horror, Supernatural, Favorites: 21056
English Name: Utawarerumono, Japanese Level: N5, Genres: Action, Drama, Fantasy, Sci-Fi, Favorites: 1189
English Name: Nana, Japanese Level: N4, Genres: Drama, Romance, Favorites: 27265
English Name: Black Lagoon, Japanese Level: N4, Genres: Action, Favorites: 17759
English Name: UNKNOWN, Japanese Level: N5, Genres: Action, Adventure, Comedy, Drama, Romance, Sci-Fi, Favorites: 280
English Name: UNKNOWN, Japanese Level: N5, Genres: Action, Comedy, Mystery, Favorites: 966
English Name: Death Note, Japanese Level: N1, Genres: Supernatural, Suspense, Favorites: 167586
English Name: Nodame Cantabile, Japanese Level: N4, Genres: Comedy, Romance, Favorites: 4907
English Name: Claymore, Japanese Level: N4, Genres: Action, Adventure, Fantasy, Favorites: 8252
English Name: Lucky☆Star, Japanese Level: N4, Genres: Comedy, Favorites: 11821
English Name: Gurren Lagann, Japanese Level: N1, Genres: Action, Adventure, Award Winning, Sci-Fi, Favorites: 75870
English Name: Den-noh Coil, Japanese Level: N5, Genres: Adventure, Award Winning, Drama, Mystery, Sci-Fi, Favorites: 1620
English Name: Baccano!, Japanese Level: N4, Genres: Action, Comedy, Mystery, Supernatural, Favorites: 22939
English Name: Sayonara, Zetsubou-Sensei, Japanese Level: N4, Genres: Comedy, Favorites: 4634
English Name: Tales of the Abyss, Japanese Level: N5, Genres: Adventure, Drama, Fantasy, Favorites: 542
English Name: One Outs, Japanese Level: N5, Genres: Sports, Favorites: 3937
English Name: Hetalia Axis Powers, Japanese Level: N5, Genres: Comedy, Favorites: 4287
English Name: Bakemonogatari, Japanese Level: N1, Genres: Mystery, Romance, Supernatural, Favorites: 48111
English Name: Fullmetal Alchemist: Brotherhood, Japanese Level: N1, Genres: Action, Adventure, Drama, Fantasy, Favorites: 217606
English Name: Kobato., Japanese Level: N5, Genres: Comedy, Drama, Fantasy, Romance, Favorites: 1472
English Name: Tokyo Magnitude 8.0, Japanese Level: N5, Genres: Award Winning, Drama, Favorites: 1753
English Name: Nyan Koi!, Japanese Level: N5, Genres: Comedy, Romance, Favorites: 584
English Name: Angel Beats!, Japanese Level: N1, Genres: Drama, Supernatural, Favorites: 47648
English Name: Katanagatari, Japanese Level: N4, Genres: Action, Adventure, Romance, Favorites: 10715
English Name: Arakawa Under the Bridge, Japanese Level: N4, Genres: Comedy, Romance, Favorites: 2342
English Name: Bakuman., Japanese Level: N4, Genres: Comedy, Drama, Romance, Favorites: 9371
English Name: Shiki, Japanese Level: N4, Genres: Horror, Mystery, Supernatural, Suspense, Favorites: 8148
English Name: High School of the Dead, Japanese Level: N1, Genres: Action, Horror, Supernatural, Ecchi, Favorites: 9928
English Name: UNKNOWN, Japanese Level: N4, Genres: Drama, Mystery, Romance, Favorites: 8106
English Name: The Mystic Archives of Dantalian, Japanese Level: N5, Genres: Action, Mystery, Supernatural, Favorites: 526
English Name: Infinite Stratos, Japanese Level: N3, Genres: Action, Comedy, Sci-Fi, Ecchi, Favorites: 2254
English Name: Beelzebub, Japanese Level: N4, Genres: Action, Comedy, Supernatural, Favorites: 5283
English Name: Puella Magi Madoka Magica, Japanese Level: N1, Genres: Award Winning, Drama, Suspense, Favorites: 52582
English Name: SKET Dance, Japanese Level: N5, Genres: Comedy, Favorites: 3180
English Name: Bunny Drop, Japanese Level: N4, Genres: Slice of Life, Favorites: 5975
English Name: [C] CONTROL - The Money and Soul of Possibility, Japanese Level: N5, Genres: Action, Mystery, Suspense, Favorites: 1266
English Name: Nichijou - My Ordinary Life, Japanese Level: N4, Genres: Comedy, Favorites: 22603
English Name: Blood-C, Japanese Level: N5, Genres: Action, Horror, Mystery, Supernatural, Favorites: 1108
English Name: Penguindrum, Japanese Level: N4, Genres: Avant Garde, Comedy, Drama, Mystery, Favorites: 7202
English Name: Guilty Crown, Japanese Level: N1, Genres: Action, Drama, Sci-Fi, Favorites: 16859
English Name: Chihayafuru, Japanese Level: N4, Genres: Drama, Sports, Favorites: 7691
English Name: Another, Japanese Level: N1, Genres: Horror, Mystery, Supernatural, Favorites: 17080
English Name: Waiting in the Summer, Japanese Level: N5, Genres: Drama, Romance, Sci-Fi, Favorites: 2040
English Name: Nisemonogatari, Japanese Level: N1, Genres: Comedy, Mystery, Supernatural, Ecchi, Favorites: 3851
English Name: Symphogear, Japanese Level: N5, Genres: Action, Sci-Fi, Favorites: 1079
English Name: Sword Art Online, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Romance, Favorites: 67014
English Name: Kokoro Connect, Japanese Level: N3, Genres: Drama, Romance, Supernatural, Favorites: 7801
English Name: Hyouka, Japanese Level: N3, Genres: Mystery, Slice of Life, Favorites: 26320
English Name: Jormungand, Japanese Level: N5, Genres: Action, Adventure, Favorites: 2958
English Name: Dusk Maiden of Amnesia, Japanese Level: N5, Genres: Horror, Mystery, Romance, Supernatural, Favorites: 4462
English Name: Robotics;Notes, Japanese Level: N5, Genres: Drama, Mystery, Sci-Fi, Favorites: 575
English Name: My Little Monster, Japanese Level: N3, Genres: Comedy, Romance, Favorites: 6117
English Name: Busou Shinki: Armored War Goddess, Japanese Level: N5, Genres: Action, Sci-Fi, Slice of Life, Favorites: 40
English Name: UNKNOWN, Japanese Level: N4, Genres: Drama, Sports, Favorites: 1599
English Name: Magi: The Labyrinth of Magic, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Favorites: 9052
English Name: My Teen Romantic Comedy SNAFU, Japanese Level: N3, Genres: Comedy, Romance, Favorites: 27833
English Name: Red Data Girl, Japanese Level: N5, Genres: Drama, Fantasy, Romance, Favorites: 230
English Name: Date A Live, Japanese Level: N3, Genres: Romance, Sci-Fi, Favorites: 9459
English Name: Nyaruko: Crawling With Love! Second Season, Japanese Level: N5, Genres: Comedy, Sci-Fi, Favorites: 300
English Name: UNKNOWN, Japanese Level: N5, Genres: Action, Comedy, Fantasy, Favorites: 608
English Name: Log Horizon, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Favorites: 10177
English Name: Mushibugyo, Japanese Level: N5, Genres: Action, Fantasy, Ecchi, Favorites: 182
English Name: Non Non Biyori, Japanese Level: N5, Genres: Slice of Life, Favorites: 6139
English Name: The Fruit of Grisaia, Japanese Level: N3, Genres: Drama, Romance, Favorites: 4341
English Name: Magi: The Kingdom of Magic, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Favorites: 7595
English Name: White Album 2, Japanese Level: N5, Genres: Drama, Romance, Favorites: 3264
English Name: I Couldn't Become a Hero, So I Reluctantly Decided to Get a Job, Japanese Level: N5, Genres: Comedy, Fantasy, Romance, Ecchi, Favorites: 519
English Name: Kill la Kill, Japanese Level: N1, Genres: Action, Comedy, Ecchi, Favorites: 36880
English Name: Pupa, Japanese Level: N5, Genres: Fantasy, Horror, Favorites: 225
English Name: No Game, No Life, Japanese Level: N2, Genres: Comedy, Fantasy, Ecchi, Favorites: 47444
English Name: D-Frag!, Japanese Level: N5, Genres: Comedy, Favorites: 2320
English Name: Noragami, Japanese Level: N2, Genres: Action, Fantasy, Favorites: 32675
English Name: Haikyu!!, Japanese Level: N2, Genres: Sports, Favorites: 70904
English Name: The Irregular at Magic High School, Japanese Level: N3, Genres: Action, Fantasy, Romance, Sci-Fi, Favorites: 10868
English Name: Sword Art Online II, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Romance, Favorites: 9227
English Name: Amagi Brilliant Park, Japanese Level: N3, Genres: Comedy, Fantasy, Favorites: 2587
English Name: Tokyo Ghoul, Japanese Level: N2, Genres: Action, Fantasy, Horror, Favorites: 49098
English Name: Barakamon, Japanese Level: N3, Genres: Slice of Life, Favorites: 12576
English Name: Saekano: How to Raise a Boring Girlfriend, Japanese Level: N3, Genres: Comedy, Romance, Ecchi, Favorites: 4248
English Name: Monthly Girls' Nozaki-kun, Japanese Level: N3, Genres: Comedy, Romance, Favorites: 10778
English Name: Non Non Biyori Repeat, Japanese Level: N5, Genres: Slice of Life, Favorites: 1285
English Name: The Seven Deadly Sins, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Favorites: 19160
English Name: My Teen Romantic Comedy SNAFU TOO!, Japanese Level: N3, Genres: Comedy, Romance, Favorites: 15731
English Name: UNKNOWN, Japanese Level: N5, Genres: Comedy, Romance, Favorites: 294
English Name: World Trigger, Japanese Level: N5, Genres: Action, Sci-Fi, Favorites: 2693
English Name: Shomin Sample, Japanese Level: N5, Genres: Comedy, Romance, Ecchi, Favorites: 438
English Name: Trinity Seven, Japanese Level: N3, Genres: Action, Comedy, Fantasy, Romance, Ecchi, Favorites: 3768
English Name: Shirobako, Japanese Level: N5, Genres: Award Winning, Comedy, Drama, Favorites: 6199
English Name: Seraph of the End: Vampire Reign, Japanese Level: N3, Genres: Action, Drama, Supernatural, Favorites: 13330
English Name: God Eater, Japanese Level: N3, Genres: Action, Fantasy, Sci-Fi, Favorites: 1926
English Name: Heavy Object, Japanese Level: N5, Genres: Action, Sci-Fi, Favorites: 443
English Name: K: Return of Kings, Japanese Level: N3, Genres: Action, Fantasy, Favorites: 1194
English Name: Rampo Kitan: Game of Laplace, Japanese Level: N5, Genres: Mystery, Suspense, Favorites: 330
English Name: Himouto! Umaru-chan, Japanese Level: N5, Genres: Comedy, Favorites: 4403
English Name: Haikyu!! 2nd Season, Japanese Level: N2, Genres: Sports, Favorites: 15522
English Name: GATE, Japanese Level: N3, Genres: Action, Adventure, Fantasy, Favorites: 6047
English Name: Overlord, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Favorites: 25126
English Name: momokuri, Japanese Level: N5, Genres: Comedy, Romance, Favorites: 309
English Name: ReLIFE, Japanese Level: N3, Genres: Drama, Romance, Favorites: 9675
English Name: Prison School, Japanese Level: N3, Genres: Comedy, Romance, Ecchi, Favorites: 7172
English Name: One Punch Man, Japanese Level: N2, Genres: Action, Comedy, Favorites: 62408
English Name: Noragami Aragoto, Japanese Level: N2, Genres: Action, Fantasy, Favorites: 11428
English Name: Drifters, Japanese Level: N3, Genres: Action, Adventure, Comedy, Fantasy, Favorites: 3878
English Name: Flying Witch, Japanese Level: N5, Genres: Slice of Life, Supernatural, Favorites: 1303
English Name: Granblue Fantasy: The Animation, Japanese Level: N5, Genres: Adventure, Fantasy, Favorites: 306
English Name: Kiznaiver, Japanese Level: N3, Genres: Drama, Romance, Sci-Fi, Favorites: 4860
English Name: Grimgar: Ashes and Illusions, Japanese Level: N3, Genres: Action, Adventure, Drama, Fantasy, Favorites: 5965
English Name: New Game!, Japanese Level: N5, Genres: Comedy, Favorites: 2838
English Name: Mob Psycho 100, Japanese Level: N2, Genres: Action, Comedy, Supernatural, Favorites: 45435
English Name: She and Her Cat: Everything Flows, Japanese Level: N5, Genres: Slice of Life, Favorites: 653
English Name: Brave Witches, Japanese Level: N5, Genres: Action, Sci-Fi, Ecchi, Favorites: 124
English Name: Eromanga Sensei, Japanese Level: N3, Genres: Comedy, Drama, Romance, Ecchi, Favorites: 2685
English Name: UNKNOWN, Japanese Level: N5, Genres: Adventure, Award Winning, Comedy, Fantasy, Favorites: 1077
English Name: Gabriel DropOut, Japanese Level: N5, Genres: Comedy, Supernatural, Favorites: 3067
English Name: Sagrada Reset, Japanese Level: N5, Genres: Mystery, Supernatural, Favorites: 580
English Name: Gamers!, Japanese Level: N3, Genres: Comedy, Romance, Favorites: 2135
English Name: Boruto: Naruto Next Generations, Japanese Level: N5, Genres: Action, Adventure, Fantasy, Favorites: 7080
English Name: Made in Abyss, Japanese Level: N2, Genres: Adventure, Drama, Fantasy, Mystery, Sci-Fi, Favorites: 41896
English Name: Mitsuboshi Colors, Japanese Level: N5, Genres: Slice of Life, Favorites: 328
English Name: Princess Principal, Japanese Level: N5, Genres: Action, Mystery, Favorites: 2412
English Name: Konohana Kitan, Japanese Level: N5, Genres: Fantasy, Girls Love, Slice of Life, Favorites: 655
English Name: Just Because!, Japanese Level: N5, Genres: Drama, Romance, Favorites: 1404
English Name: DARLING in the FRANXX, Japanese Level: N3, Genres: Action, Drama, Romance, Sci-Fi, Favorites: 31121
English Name: UNKNOWN, Japanese Level: N5, Genres: Action, Favorites: 1466
English Name: Tokyo Ghoul:re, Japanese Level: N3, Genres: Action, Fantasy, Horror, Favorites: 3776
English Name: Grand Blue Dreaming, Japanese Level: N3, Genres: Comedy, Favorites: 18468
English Name: Asobi Asobase - workshop of fun -, Japanese Level: N5, Genres: Comedy, Favorites: 6237
English Name: Last Period: The Journey to the End of the Despair, Japanese Level: N5, Genres: Action, Adventure, Comedy, Fantasy, Favorites: 28
English Name: Hanebado!, Japanese Level: N5, Genres: Sports, Favorites: 355
English Name: Goblin Slayer, Japanese Level: N3, Genres: Action, Adventure, Fantasy, Favorites: 6984
English Name: Carole & Tuesday, Japanese Level: N5, Genres: Drama, Sci-Fi, Favorites: 2879
English Name: Zombie Land Saga, Japanese Level: N5, Genres: Award Winning, Comedy, Supernatural, Favorites: 3063
English Name: UNKNOWN, Japanese Level: N5, Genres: Action, Comedy, Fantasy, Horror, Favorites: 8085
English Name: UNKNOWN, Japanese Level: N5, Genres: Comedy, Favorites: 833
English Name: ID: INVADED, Japanese Level: N5, Genres: Mystery, Sci-Fi, Suspense, Favorites: 2748
English Name: UNKNOWN, Japanese Level: N5, Genres: Action, Adventure, Sci-Fi, Favorites: 878
English Name: Super Cub, Japanese Level: N5, Genres: Slice of Life, Favorites: 866
English Name: UNKNOWN, Japanese Level: N5, Genres: Comedy, Horror, Supernatural, Favorites: 3192
English Name: Ours, Japanese Level: N5, Genres: UNKNOWN, Favorites: 5
English Name: Hunter x Hunter, Japanese Level: N2, Genres: Action, Adventure, Fantasy, Favorites: 200265
English Name: Black Rock Shooter, Japanese Level: N5, Genres: Action, Drama, Favorites: 2205`
});

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};
const chatBot = async (req, res) => {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [
            ],
        });

        const prompt = req.body.message;

        const result = await chatSession.sendMessage(prompt);
        return res.json(result.response.text())
    } catch (error) {
        console.log(error)
        res.json("Xin lỗi hệ thống có chút vấn đề mong bạn thông cảm")
    }

}

export default chatBot