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

export default function UserverView() {
   const defaultImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQHAv/EADUQAAICAQIDBAgFBAMAAAAAAAABAgMEBREhMUEGUVJhEiIyQnGB0eETFCORoXKxwfAzU4L/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALMACqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjy4h8OfAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8uvcZSbaSTbfLYtuh6JDGjHIyoqV/SL5Q+4EVp3Z7IylGzIf4Fb6P2n8uhP4uhYGPx/BVkvFPiSRkiNUMeqC2jVWvhFCWPVJbSqhJecUbQBF5Wg4OQn+l+HLxVvYgNR7P5WInOn9etcfV4SS+HX5FzMNAea/yC165ocb4yyMNKNyW8oL3/uVX/X5FVgAAAAAAAAAAAAAAAAAAADMYucowjzk9v3AsHZfTlbZ+dtW8YPatPrLvLTtx3NOFjxxcWqmC2UIpG8iAAAAAAAAMFT7Uacqbll1R2hN7TS6PvLacuoY0cvEupkvajw+PQDz4GWtns+aMFUAAAAAAAAAAAAAAAAO3Rq1bqmNFrh+JucRIaA0tXx9+9r+AL2uQC5AiAAAAAAAAAAA8+1WCr1PKglsla9vnxOU7tcalq+W14/7JI4SqAAAAAAAAAAAAAAAAG7CuePl1Wr3Jp/I0jzA9Ki1KKkuTW6MkP2bzVlYCrk27adoy3fNdH/vcTBEAAAAAAAAD5nJQjKcntGK3bPohu02b+WwnVF7Tu9X5dQKllWu/JtufOybl+7NQBVAAAAAAAAAAAAAAAAAAB1adm2YGVG6viuU4+JdxesTJqyqY3UyTg0ednZpupX6dd6VTbrb9at8pfRkRfwR+nari5ySrn6NnWuXMkAAMbmQABHajq+Lgwe81OzpXF8fsB05uVVh0yuvltFfy+4ouo5lmdlSvt4b8Ix8K7j61HUL8+307n6q9mC5ROQqgAAAAAAAAAAAAAAAAAAAAAAAMp7Pdbprk0d+LrWfjL0Y3enFe7YvSI8AT0O1OUl6+PS35NoS7U5TXq49MfNtsgQBIZOs5+Smp3uMX7ta2ODfv5mAAAAAAAAAAAAAAAAAAAAAAAAZ2Puii2+1V01ynN9IoDX12Hx4LzLBg9mbJpTzLVBeCD3f7k3i6Tg4vGqiLl4pcWBS6cPJv/4Me2fnGPA7a9A1Kxb/AIEYf1zX+C67ACox7M5r9qdEf/Tf+DL7MZf/AHUfNv6FtAFNn2d1CPsqmf8ATP7HHfpmdQt7cW1LvS9L+xfglsB5u1s0nz7jD4HoWRh42UtsimE/NriQ2Z2YqknLEtdb8MuKAqwOrN0/JwWlfW1F8prjF/M5tntuBgAAAAAAAAAAAAAHU+6q522Rrri5Tk9kl1LZo2hV4m12SlZf0T5Q+4EXpnZ63JSsy96qnxUfef0LRjYtOLUq6K1CK7uvxNq22MgAAAAAUAAAAABsABiUIzi4yimnzT6lf1Ts7CalbgepJ862+D+HcWEbBHnNtVlNkq7YOE480z4L3qemUahVtatpr2bFzX1Kbn4V2De6r4teGXSSA5gAAAAAAAD6rhO2yNdcXKcnskj5+JbezulflavzF8f1rFwXhX1A6NF0mGn1elYlK+S9aXd5IlAgAAAUAAAAAAAAAAAAAAAAObPwqs7HlVcufKXWL70dICPPs7Dtwb3TauXKXSS7znL1q+nx1DGcFtG2PsSfR/Qo9kJVWShOLjKLaafQD5AAAA2Y9M8i+FVS9ecvRQEt2b0781kPJtX6VT2SfvS+xbkacLGhiY0Ka16sVtv3+ZvAAAKAAAAAAAAAAAAAAAAAAAAABW+1GnbpZtUeu1vw7yyHxdVC6uVdi3jJbNBHnPPj3g35uPLEy7ceXOD5967zQB//2Q==';
  const theme = useTheme();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(""); 
  const [errorMessage, setErrorMessage] = useState('');
  const [okMessage, setOkMessage]= useState('')

  const fetchFilm = async () => {
    try {
      const response = await fetch('https://animetangobackend.onrender.com/admin/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const dataa = await response.json();
        if (dataa.success) {
         setData(dataa.users)
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

  const ClickUser = (id) => {
    localStorage.setItem('user_id', id);
    navigate(`/admin/user/${id}`);
  };

  const filteredData = data.filter((item) =>
    item.full_name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const Delete = async (e, user_id) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://animetangobackend.onrender.com/admin/user/${user_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          console.log('Remove User successful:', data.message);
          setOkMessage(`Remove User successful: ${data.message}`);
          setTimeout(() => {
           window.location.reload()
          }, 2500);
        } else {
          const error__alert = `Remove User failed: ${data.message}`;
          console.log(error__alert);
          setErrorMessage(`Remove User failed: ${data.message}`);
        }
      } else {
        setErrorMessage(`Remove User failed: ${response.statusText}`);
        console.error('Error during Remove User:', response.statusText);
      }
    } catch (error) {
      setErrorMessage(`Network error: ${error}`);
    }
  };
  const ClickEdit = (user_id) => {
    localStorage.setItem('user_id', user_id)
    navigate(`/admin/userEdit/${user_id}}`)
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
        LIST OF USER
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
              onClick={() => ClickUser(item.user_id)}
            >
              <div style={{ width: '20px', textAlign: 'center' }}>{index + 1}</div>
              <img
                src={item.user_img || defaultImage}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '100%',
                  objectFit: 'cover',
                }}
                alt={item.full_name}
              />
              <div>{item.full_name}</div>
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
                    ClickEdit(item.user_id)
                  }}
                  style={{
                    color: theme.palette.mode === 'light' ? '#26c754' : '#26c754',
                  }}
                />
                <DeleteIcon
                  onClick={(event) => {
                    event.stopPropagation();
                    Delete(event, item.user_id);
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
