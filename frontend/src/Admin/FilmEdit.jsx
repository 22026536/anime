import React from 'react'
import Box from '@mui/system/Box'
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
export default function FilmEdit() {
  const [formData, setFormData] = useState({
    Name: '',
    'English name': '',
    Score: '',
    Genres: '',
    Synopsis: '',
    Type: '',
    Episodes: '',
    Aired: '',
    Premiered: '',
    Status: '',
    Producers: '',
    Licensors: '',
    Studios: '',
    Source: '',
    Duration: '',
    Rank: '',
    Popularity: '',
    Favorites: '',
    'Scored By' : '',
    Members: '',
    'Image URL' : '',
    Old: '',
    JapaneseLevel: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
const [okMessage, setOkMessage]= useState('')
const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://animetangobackend.onrender.com/admin/anime/${localStorage.getItem('film_id')}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          console.log('Edit Film successful');
          setOkMessage(`Edit Film successful`);
          setTimeout(() => {
            window.location.reload()
          }, 2500);
        } else {
          const error__alert = `Edit Film failed: ${data.message}`;
          console.log(error__alert);
          setErrorMessage(`Edit Film failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Edit Film failed: ${response.statusText}`);
        console.error('Error during Edit film:', response.statusText);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error}`);
    }
  };
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
        console.log(data)

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

  useEffect(() => {
    if (data) {
      setFormData({
        Name: data.anime.Name || '',
        'English name': data.anime['English name'] || '',
        Score: data.anime.Score || '',
        Genres: data.anime.Genres || '',
        Synopsis: data.anime.Synopsis || '',
        Type: data.anime.Type || '',
        Episodes: data.anime.Episodes || '',
        Aired: data.anime.Aired || '',
        Premiered: data.anime.Premiered || '',
        Status: data.anime.Status || '',
        Producers: data.anime.Producers || '',
        Licensors: data.anime.Licensors || '',
        Studios: data.anime.Studios || '',
        Source: data.anime.Source || '',
        Duration: data.anime.Duration || '',
        Rank: data.anime.Rank || '',
        Popularity: data.anime.Popularity || '',
        Favorites: data.anime.Favorites || '',
        'Scored By': data.anime['Scored By'] || '',
        Members: data.anime.Members || '',
        'Image URL': data.anime['Image URL'] || '',
        Old: data.anime.Old || '',
        JapaneseLevel: data.anime.JapaneseLevel || '',
      });
    }
  }, [data]);
  
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000); // 2 giây

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (okMessage) {
      const timerr = setTimeout(() => {
        setOkMessage('');
      }, 2000); // 2 giây

      return () =>
       clearTimeout(timerr);
    }
  }, [okMessage]);
  return (
    <>
     {errorMessage && (
          <Alert variant='filled' severity="error" style={{transition: '-moz-initial', width: '78%', position: 'absolute', zIndex:'20', top: '60px', left:'22%'}}>
            {errorMessage}
          </Alert>
        )}

      {okMessage && (
          <Alert variant='filled' severity="success" style={{transition: '-moz-initial', width: '78%', position: 'absolute', zIndex:'20', top: '60px', left:'22%'}}>
            {okMessage}
          </Alert>
        )}
   <form onSubmit={handleSubmit}>
  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '50px',
      paddingLeft: '40px',
      paddingTop: '30px'
    }}
  >
    {Object.keys(formData).map((key) => (
      <Box
        key={key}
        sx={{
          width: '200px'
        }}
      >
        <input
          id={key}
          name={key}
          type="text"
          value={formData[key]}
          onChange={handleChange}
          placeholder={key}
          style={{
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            outline: 'none'
          }}
        />
      </Box>
    ))}
  </Box>
  <div style={{display: 'flex', justifyContent: 'center'}}><button type="submit" style={{ marginTop: '50px' }}>Edit</button></div>
</form>


    </>
  )
}

