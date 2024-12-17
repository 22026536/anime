import React, { useState } from 'react'
import Header from '../component/Header/Header'
import { useTheme } from '@emotion/react'
import { useEffect } from 'react';
import FilmCard from '../Film/FilmCard';
import FilmPage from '../Film/FilmPage';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';

export default function Search() {
    const theme = useTheme();
    const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
    const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/anime/searchbyname', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({q: localStorage.getItem('query')}),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setData(data)
            setLoading(false)
    
          } else {
            console.error('Lỗi khi đăng nhập:', response.statusText);
          }
        } catch (error) {
          console.error('Lỗi mạng:', error);
        }
      };
    
      useEffect(() => {
        const fetchData = async () => {
          await fetchFilm();
        };
        fetchData();
      }, []);
  return (
    <Box>
    <Header/>
    <div style={{ marginTop: '120px', fontSize: '30px', marginLeft: '2.4%', fontFamily: 'Montserrat', fontWeight: '600', color: theme.palette.mode === 'dark' ? '#c0c2c4' : '#EF4444'}}>{`Search: ${localStorage.getItem('query')}`}</div>
    <div style = {{ display: 'flex', fontSize: '25px', alignItems: 'center', marginLeft: '2.4%', marginTop: '1%', fontFamily: 'mONTSERRAT' }}>
    <div>{`LIST OF FILMS`}</div>
    <ArrowForwardIosIcon style={{ marginTop: '2px', fontSize: '15px', marginTop: '4px'}}/>
    <ArrowForwardIosIcon style={{marginLeft: '-7px', marginTop: '4px', fontSize: '15px'}}/>
     
    </div>
    {!loading && data.anime.length > 0 && <Box>
      <FilmPage data ={data.anime}></FilmPage>
      </Box>}
    {!loading && data.anime.length == 0 &&
    <Box sx ={{fontSize: '25px', textAlign: 'center', marginTop: '20px'}}>
No results
        </Box>}
    </Box>
  )
}
