import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
function createSlug(name) {
  return name
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function FilmOverView() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(""); 
  const [errorMessage, setErrorMessage] = useState('');
  const [okMessage, setOkMessage]= useState('')

  const fetchFilm = async () => {
    try {
      const response = await fetch('https://animetangobackend.onrender.com/admin/anime', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const dataa = await response.json();
        if (dataa.success) {
         setData(dataa.animes)
         setLoading(false)
        }
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

  const ClickAnime = (id, name) => {
    localStorage.setItem('film_id', id);
    navigate(`/admin/film/${name}`);
  };

  const filteredData = data.filter((item) =>
    item.Name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const Delete = async (e, anime_id) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://animetangobackend.onrender.com/admin/anime/${anime_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          console.log('Remove Film successful:', data.message);
          setOkMessage(`Remove Film successful: ${data.message}`);
          setTimeout(() => {
            navigate('/admin');
          }, 2500);
        } else {
          const error__alert = `Remove Film failed: ${data.message}`;
          console.log(error__alert);
          setErrorMessage(`Remove Film failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Remove Film failed: ${response.statusText}`);
        console.error('Error during Remove film:', response.statusText);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error}`);
    }
  };
  const ClickEdit = (anime_id, name) => {
    localStorage.setItem('film_id', anime_id)
    navigate(`/admin/filmEdit/${encodeURIComponent(createSlug(name))}`)
  }


  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (okMessage) {
      const timerr = setTimeout(() => {
        setOkMessage('');
      }, 2000); 

      return () =>
       clearTimeout(timerr);
    }
  }, [okMessage]);

  return (
    
    <Box sx={{ paddingTop: '20px' }}>
{errorMessage && (
  <Alert 
    variant='filled' 
    severity="error" 
    style={{
      transition: '-moz-initial', 
      width: '78%', 
      position: 'fixed', 
      zIndex: 10, 
      top: '60px', 
      left: '22%'
    }}>
    {errorMessage}
  </Alert>
)}

{okMessage && (
  <Alert 
    variant='filled' 
    severity="success" 
    style={{
      transition: '-moz-initial', 
      width: '78%', 
      position: 'fixed', 
      zIndex: 10, 
      top: '60px', 
      left: '22%'
    }}>
    {okMessage}
  </Alert>
)}

      <div
        style={{
          fontSize: '25px',
          marginLeft: '20px',
          fontFamily: 'monospace',
          marginTop: '15px',
          marginBottom: '15px',
          display: 'flex', 
          alignItems: 'center',
        }}
      >
        LIST OF FILM
        <input
          type="text"
          placeholder="Search by film name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            width: '30%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #8a8a87',
            borderRadius: '5px',
            outline: 'none',
            position: 'absolute',
            right: '30px'
          }}
        />
      </div>
       


      <Box sx={{ borderTop: '1px solid #8a8a87' , marginTop: '30px'}}>
        {loading && <Box sx={{marginTop: '100px', display: 'flex', justifyContent: 'center'}}><CircularProgress></CircularProgress></Box>}
        {!loading &&
          filteredData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                paddingBottom: '10px',
                gap: '20px',
                paddingTop: '10px',
                alignItems: 'center',
                height: '40px',
                borderBottom: '1px solid #8a8a87',
                paddingLeft: '20px',
                cursor: 'pointer',
                position: 'relative',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? '#3b3b38' : '#ededeb',
                },
              }}
              onClick={() => ClickAnime(item.Anime_id, encodeURIComponent(createSlug(item.Name)))}
            >
              <div style={{ width: '20px', textAlign: 'center' }}>{index + 1}</div>
              <img
                src={item['Image URL']}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '100%',
                  objectFit: 'cover',
                }}
                alt={item.Name}
              />
              <div>{item.Name}</div>
              <div
                style={{
                  position: 'absolute',
                  right: '30px',
                  display: 'flex',
                  gap: '20px',
                  zIndex: '3',
                }}
              >
                <EditIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    ClickEdit(item.Anime_id, item.Name)
                  }}
                  style={{
                    color: theme.palette.mode === 'light' ? '#26c754' : '#26c754',
                  }}
                />
                <DeleteIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    Delete(event, item.Anime_id);
                  }}
                  style={{
                    color: theme.palette.mode === 'light' ? 'red' : 'red',
                  }}
                />
              </div>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
