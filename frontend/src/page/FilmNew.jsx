import React from 'react'
import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilmPage from '../Film/FilmPage';
import Header from '../component/Header/Header';
import { useTheme } from '@emotion/react';
import Footer from '../component/Footer/Footer';
export default function FilmNew() {
    const theme = useTheme();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true); 
    const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/anime/lastestepisode', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({n : 30})
          });
    
          if (response.ok) {
            const dataa = await response.json();
            console.log(dataa)
            setData(dataa);
            setLoading(false); 
          } else {
            console.error('Lỗi khi lấy dữ liệu:', response.statusText);
          }
        } catch (error) {
          console.error('Lỗi mạng:', error);
        }
      };
    
      useEffect(() => {
        fetchFilm();
      }, []);
    
  return (
    <Box>
    <Header/>
    <div style={{ marginTop: '120px', fontSize: '30px', marginLeft: '2.4%', fontFamily: 'Montserrat', fontWeight: '600', color: theme.palette.mode === 'dark' ? '#c0c2c4' : '#EF4444'}}>{`UPDATE LATEST MOVIE`}</div>
    <div style = {{ display: 'flex', fontSize: '25px', alignItems: 'center', marginLeft: '2.4%', marginTop: '1%', fontFamily: 'mONTSERRAT' }}>
    <div>{`LIST OF FILMS`}</div>
    <ArrowForwardIosIcon style={{ marginTop: '2px', fontSize: '15px', marginTop: '4px'}}/>
    <ArrowForwardIosIcon style={{marginLeft: '-7px', marginTop: '4px', fontSize: '15px'}}/>
     
    </div>
    {!loading && <Box>
      <FilmPage data ={data}></FilmPage>
      </Box>}
      {/* <Footer></Footer> */}
    </Box>
  )
}
