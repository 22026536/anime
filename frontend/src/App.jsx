import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstScreen from "./page/FirstScreen";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Introduce from "./page/Introduce";
import Level from "./page/Level";
import AccountShow from "./page/AccountShow";
import FilmDetail from "./page/FilmDetail";
import FilmWatch from "./page/FilmWatch";
import Category from "./page/Category";
import Genre from "./page/Genre";
import FilmNew from "./page/FilmNew";
import FilmMostFavorite from "./page/FilmMostFavorite";
import Bayes from "./page/Bayes";
import Decision from "./page/Decision";
import Knn from "./page/Knn";
import Search from "./page/Search";
import Login from "./Admin/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<FirstScreen />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/introduce" element={<Introduce/>}/>
        <Route path="/level/:level" element= {<Level/>}/>
        <Route path="/account" element= {<AccountShow/>}/>
        <Route path="/film/:film_name" element= {<FilmDetail/>}/>
        <Route path="/film/:film_name/:episode" element= {<FilmWatch/>}/>
        <Route path="/Category/:category" element= {<Category/>}/>
        <Route path="/genre/:genre" element= {<Genre/>}/>
        <Route path="/new_film" element= {<FilmNew/>}/>
        <Route path="/most_favorite" element= {<FilmMostFavorite/>}/>
        <Route path="/recommend_naiveBayes" element= {<Bayes/>}/>
        <Route path="/recommend_decisionTree" element= {<Decision/>}/>
        <Route path="/recommend_knn" element= {<Knn/>}/>
        <Route path="/search/:query" element= {<Search/>}/>
        <Route path="/admin/*" element= {<Login/>}/>
        {/* <Route path="/admin/*" element={<Admin />} /> */}
      </Routes>
    </Router>);

}

export default App;
