import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Films from './Films';
import Dashboard from './Dashboard';
import Users from './Users';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import FilmOverView from './FilmOverView';
import FilmAdd from './FilmAdd'
import FilmEdit from './FilmEdit'
import FilmRemove from './FilmRemove'
import UserAdd from './UserAdd';
import UserRemove from './UserRemove';
import FilmEpisode from './FilmEpisode'
import UserOverView from './UserOverView'
import FilmDetail from './FilmDetail';
import UserEdit from './UserEdit';
// import Footer from '../component/Footer/Footer'

export default function Login() {
  return (
    <>
      <Box sx={{ position: 'fixed', top: 0, width: '100%', height: '60px', zIndex: 1000}}>
        <Header />
      </Box>
      <Box sx={{ position: 'fixed', top: '60px', left: 0, width: '22vw', height: 'calc(100vh - 60px)', borderRight: '1px solid #ccc'}}>
        <Navbar />
      </Box>
      <Box sx={{ marginLeft: '22vw', marginTop: '60px' }}>
        <Routes>
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="users" element={<Users />} />
          <Route path="films" element={<Films />} />
          <Route path="filmOverview" element={<FilmOverView />} />
          <Route path="filmAdd" element={<FilmAdd />} />
          <Route path="filmEpisode" element={<FilmEpisode />} />
          <Route path="userOverview" element={<UserOverView/>} />
          <Route path="userAdd" element={<UserAdd/>} />
          <Route path="userRemove" element={<UserRemove />} />
          <Route path="userEdit/:user_id" element={<UserEdit/>} />
          <Route path="filmoverview" element={<FilmOverView />} />
          <Route path="film/:filmName" element={<FilmDetail/>} />
          <Route path="filmEdit/:filmName" element={<FilmEdit/>} />
          
        </Routes>
      </Box>
    </>
  );
}
