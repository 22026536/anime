import React from 'react'
import Box from '@mui/system/Box'
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
export default function FilmAdd() {
  const navigate = useNavigate()
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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://animetangobackend.onrender.com/admin/anime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          console.log('Add Film successful:', data.message);
          setOkMessage(`Add Film successful: ${data.message}`);
          setTimeout(() => {
            navigate('/admin');
          }, 2500);
        } else {
          const error__alert = `Add Film failed: ${data.message}`;
          console.log(error__alert);
          setErrorMessage(`Add Film failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Add Film failed: ${response.statusText}`);
        console.error('Error during add film:', response.statusText);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error}`);
    }
  };


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
  <div style={{display: 'flex', justifyContent: 'center'}}><button type="submit" style={{ marginTop: '50px' }}>Add</button></div>
</form>


    </>
  )
}
