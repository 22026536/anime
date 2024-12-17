import { Box, Skeleton } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import FilmCard from './FilmCard';
// import Skeleton from '@mui/material/Skeleton';
export default function FilmRelate() {
  const [data , setData] = useState(null)
  const [loading, setLoading] = useState(true)
    const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/knn/anime', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({anime_id : localStorage.getItem('film_id'), n: 12}),
          });
    
          if (response.ok) {
            const data = await response.json();

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
    <>
    {!loading && <Box>
      <Box sx= {{marginLeft: '10%', fontSize: '25px', marginTop: '30px'}}>LIST FILM RELATE</Box>
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '20px', width: '80%', marginLeft: '10%', marginTop: '25px', }}>
       {!loading && data.map((item)=> {
       return (
       <FilmCard  key={item.Anime_id}
        image={item["Image URL"]}
        name={item.Name}
        level={item.JapaneseLevel}
        view={item.Members}
        score={item.Score}
        index={item.Anime_id}
        className="film-card"></FilmCard>)})}
     </Box>
      
      </Box>}
{loading &&  <Box sx= {{marginLeft: '10%', fontSize: '25px', marginTop: '30px'}}>LIST FILM RELATE</Box>}
    {loading  &&  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', width: '80%', marginLeft: '10%', marginTop: '25px' }}>
        {[...Array(10)].map((_, index) => (
          <Box key={index} sx={{ width: '200px', height: '300px' }}>
            <Skeleton variant="rectangular" width="100%" height="60%" />
            <Skeleton width="80%" />
            <Skeleton width="40%" />
          </Box>
        ))}
      </Box>}
    </>
  )
}
