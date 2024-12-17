import  Box from '@mui/material/Box'
import React, { useState } from 'react'
import Header from '../component/Header/Header'
import { useTheme } from '@emotion/react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect } from 'react';
import FilmCard from '../Film/FilmCard';
import FilmPage from '../Film/FilmPage';
import Footer from '../component/Footer/Footer';
export default function Bayes() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
    const theme = useTheme();
    const level = localStorage.getItem('level')
    const fetchFilm = async () => {
      try {
        const response = await fetch('https://animetangobackend.onrender.com/decisiontree', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({jwt : localStorage.getItem('jwt'), n: 30}),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setData(data)
          setLoading(false)
  
        } else {
          console.error('Lỗi khi tai:', response.statusText);
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
    <div style={{ marginTop: '120px', fontSize: '30px', marginLeft: '2.4%', fontFamily: 'Montserrat', fontWeight: '600', color: theme.palette.mode === 'dark' ? '#c0c2c4' : '#EF4444'}}>RECOMMEND FOR YOU (DECISION TREE)</div>
    <div style = {{ display: 'flex', fontSize: '25px', alignItems: 'center', marginLeft: '2.4%', marginTop: '1%', fontFamily: 'mONTSERRAT' }}>
    <div>{`LIST OF FILMS`}</div>
    <ArrowForwardIosIcon style={{ marginTop: '2px', fontSize: '15px', marginTop: '4px'}}/>
    <ArrowForwardIosIcon style={{marginLeft: '-7px', marginTop: '4px', fontSize: '15px'}}/>
     
    </div>
    {!loading && <Box>
      <FilmPage data ={data.data.recommended_anime}></FilmPage>
      </Box>}
      {/* <Footer></Footer> */}
    </Box>
  )
}
