import React from 'react'
import { useState, useEffect } from 'react';
export default function FilmDetail() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
      const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/anime/animeInfo', {
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
    <div>FilmDetail</div>
  )
}
