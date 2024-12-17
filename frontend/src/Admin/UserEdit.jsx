import React from 'react'
import Box from '@mui/system/Box'
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
export default function UserEdit() {
  const [formData, setFormData] = useState({
    user_id: '',
    full_name: '',
    date_of_birth: '',
    role: '',
    user_img: '',
    email: '',
    phone_number: '',
    sex: '',
    japanese_level: '',
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
      const response = await fetch(`https://animetangobackend.onrender.com/admin/user/${localStorage.getItem('user_id')}`, {
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
  const fetchUser = async () => {
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
          const storedUserId = localStorage.getItem('user_id'); 
  
          if (storedUserId) {
            
            const matchedUser = dataa.users.find(item => item.user_id == storedUserId);
  
            if (matchedUser) {
              setData(matchedUser); 
              console.log(matchedUser)
            } 
          } else {
            console.error('user_id không tồn tại trong localStorage.');
          }
  
          setLoading(false);
        }
      } else {
        console.error('Lỗi khi lấy dữ liệu:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi mạng:', error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);
  
  useEffect(() => {
    if (data) {
      setFormData({
        user_id: data.user_id || '', 
        full_name: data.full_name || '',
        date_of_birth: data.date_of_birth || '',
        role: data.role || '',
        user_img: data.user_img || '',
        email: data.email || '',
        phone_number: data.phone_number || '',
        sex: data.sex || '',
        japanese_level: data.japanese_level || '',
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

