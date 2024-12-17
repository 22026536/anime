import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
export default function FilmGetComment() {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
      const fetchComment = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/anime/getcomment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({anime_id : localStorage.getItem('film_id')}),
          });
    
          if (response.ok) {
            const data = await response.json();
            setData(data)
            setLoading(false)
            console.log('ok')
    
          } else {
            console.error('Lỗi khi đăng nhập:', response.statusText);
          }
        } catch (error) {
          console.error('Lỗi mạng:', error);
        }
      };
    
      useEffect(() => {
        const fetchData = async () => {
          await fetchComment();
        };
        fetchData();
      }, []);
  return (
    <Box sx={{marginLeft: '10%'}}>
        <div style={{fontSize: '32px'}}>Comment</div>
        {Array.isArray(data) && data.length > 0 && data.map((item, index) => {
            return (<Box sx={{width: '700px', height: 'auto', backgroundColor: '#fafafa', color: 'black', borderRadius: '10px', paddingLeft: '7px'}}>
                <Box sx ={{display: 'flex', alignItems: 'center', gap: '7px', marginTop: '20px'}}>
                    <img src ={item.user_img} style={{width: '30px', height: '30px', objectFit: 'cover', borderRadius: '100%'}}></img>
                    <div style={{fontSize: '14px', color: '#ef4444'}}>{`${item.full_name} `}</div>
                </Box>
                <div style={{marginLeft: '45px', marginTop: '-10px'}}>{item.comment}</div>
                </Box>

            )
        })}


        {!Array.isArray(data)  && <div>No comments yet !</div>}
    </Box>
  )
}
