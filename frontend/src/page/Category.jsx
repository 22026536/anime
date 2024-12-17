import React from 'react'
import Header from '../component/Header/Header'
import { Box } from '@mui/material'
import Footer from '../component/Footer/Footer'
import { useState, useEffect } from 'react'
import FilmCard from '../Film/FilmCard'
import { useTheme } from '@emotion/react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FilmPage from '../Film/FilmPage'
export default function Category() {
  const theme = useTheme()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const type = localStorage.getItem('type')
    const fetchFilm = async () => {
      try {
        const response = await fetch('https://animetangobackend.onrender.com/anime/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Type : type, n: '150'}),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setData(data)
          setLoading(false)
  
        } else {
          console.error('Error during fetch:', response.statusText);
        } 
        } catch (error) {
          console.error('Network error:', error);
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
        <Header></Header>
        <div style={{ marginTop: '120px', fontSize: '30px', marginLeft: '2.4%', fontFamily: 'Montserrat', fontWeight: '600', color: theme.palette.mode === 'dark' ? '#c0c2c4' : '#EF4444'}}>{`Category: ${type}`}</div>
    <div style = {{ display: 'flex', fontSize: '25px', alignItems: 'center', marginLeft: '2.4%', marginTop: '1%', fontFamily: 'mONTSERRAT' }}>
    <div>{`LIST OF FILMS`}</div>
    <ArrowForwardIosIcon style={{ marginTop: '2px', fontSize: '15px', marginTop: '4px'}}/>
    <ArrowForwardIosIcon style={{marginLeft: '-7px', marginTop: '4px', fontSize: '15px'}}/>
     
    </div>

     {!loading && <Box sx={{width: '80%'}}>
      <FilmPage data ={data}></FilmPage>
      </Box>}
        {/* <Footer></Footer> */}
    </Box>
  )
}
