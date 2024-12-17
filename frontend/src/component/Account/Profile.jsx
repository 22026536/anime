import { Button } from '@mui/material';
import Box from "@mui/material/Box";
import React, { useEffect, useState, useRef }  from 'react';
import styled from 'styled-components';
import axios from 'axios';
const SubmitButton = styled.button`
  width: 85%;
  height: 40px;
  margin-top: 20px;
  margin-left: 25px;
  border-radius: 7px;
  outline: none;
  border: none;
  background-color: #12263F;
  color: white !important;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: black;
  }
`;

export default function Profile() {

    const jwt = localStorage.getItem('jwt')
    const [login, setLogin] = useState('');
    const [userInfor, setUserInfor] = useState([]);
    const [changeClick, setChangeClick] = useState(false)
    const defaultImage = 'data:image/jpeg;base64,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';

    const [image, setImage] = useState(userInfor.user_img || defaultImage);
      const [file, setFile] = useState(null);
      const [preview, setPreview] = useState(null);
      const [uploadStatus, setUploadStatus] = useState('');
    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const previewURL = URL.createObjectURL(selectedFile);
      setPreview(previewURL);
    };
    const handleSubmitt = async (e) => {
      if (!file) {
        alert('Please select an image before uploading!');
        return;
      }
      
      const formData = new FormData();
      formData.append('image', file);
      formData.append('jwt', jwt);
      try {
        setUploadStatus('Đang tải lên...');
        const response = await axios.post('https://animetangobackend.onrender.com/user/uploadImage', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      
        if (response.data.success) {
          setUploadStatus('Upload successful!');
          console.log('URL ảnh:', response.data.message.url);

        } else {
          setUploadStatus('Upload failed!');
        }
      } catch (error) {
        console.error('Upload error:', error);
        setUploadStatus(`Upload failed! ${error}`);
      }
      console.log(uploadStatus)
    };
    useEffect(() => {
      fetch('https://animetangobackend.onrender.com/user/userInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({jwt : jwt})
      })
        .then(response => response.json())
        .then(responseData => {
          if(responseData.success){
            setLogin(true)
            setUserInfor(responseData.userInfo)
            setImage(responseData.userInfo.user_img|| defaultImage)
          }
          else{
            setLogin(false)
          }
          
        })
        .catch(error => console.error('Error:', error));
    }, []);
    const [formData, setFormData] = useState({
        name: '',
        phone__number: '',
        gmail: '',
        sex:'',
        level: '',
        jwt: jwt,
      });
    useEffect(() => {
        if (userInfor) {
          setFormData({
            name: userInfor.full_name || '',
            phone__number: userInfor.phone_number || '',
            gmail: userInfor.email || '',
            sex:userInfor.sex || '',
            level: userInfor.level || '',
            jwt: jwt,
          });
        }
      }, [userInfor]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      const handleSubmit = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/user/userInfo/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
          });
          
          if (response.ok) {
            const data = await response.json();
            if (data.success) {
              setTimeout(() => {
                window.location.reload();
              }, 1500);
              console.log('ok')
            } else {
              const error__alert = `Failed to update information: ${data.message}`;
              console.log(error__alert);
            }
          } else {
            console.error('Error while updating information:', response.statusText);
          }
        } catch (error) {
          console.error('Network error:', error);
        }
      };
        const changeClickButton = () => {
            setChangeClick(!changeClick)
        }
        const submit = async () => {
          // Submit form 1 (file upload)
          if (file) {
            await handleSubmitt(new Event('submit'));
          }
          
          // Submit form 2 (user info)
          await handleSubmit(new Event('submit'));
        };

    
        return (
          <div>
            {login && (
              <Box
                sx={{
                  position: "absolute",
                  zIndex: "10",
                  top: "0",
                  right: "0",
                  width: "25vw",
                  height: "100vh",
                  backgroundColor: "#fff",
                  transition: 'linear',
                  paddingTop: '30px',
                }}
                autoComplete="off"
              >
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <img src={preview || image} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '100%', border: '2px solid #9ea4ad' }} />
                </div>
        
                {changeClick && (
                  <form onSubmit={handleSubmitt} style={{ marginLeft: '38%', marginTop: '10px' }}>
                    <input type="file" name='user__img' accept="image/*" onChange={handleFileChange}></input>
                  </form>
                )}
        
                <form onSubmit={handleSubmit} style={{ marginLeft: '25px', width: '85%' }}>
                  <br />
                  <label className="name__label" style={{ color: '#000' }}>Full Name</label>
                  <br />
                  <input
                    className="name"
                    value={formData.name}
                    disabled={!changeClick}
                    name="name"
                    type="text"
                    onChange={handleChange}
                    required
                    style={{
                      outline: 'none',
                      borderRadius: '5px',
                      border: '1px solid #b8b2b2',
                      height: '35px',
                      width: '100%',
                      fontSize: '17px',
                      paddingLeft: '5px',
                      marginTop: '10px',
                      marginBottom: '10px'
                    }}
                  ></input>
                  <br />
                  <label className="gmail__label" style={{ color: '#000' }}>E-mail</label>
                  <br />
                  <input
                    className="gmail"
                    disabled={!changeClick}
                    value={formData.gmail}
                    name="gmail"
                    onChange={handleChange}
                    type="text"
                    required
                    style={{
                      outline: 'none',
                      borderRadius: '5px',
                      border: '1px solid #b8b2b2',
                      height: '35px',
                      width: '100%',
                      fontSize: '17px',
                      paddingLeft: '5px',
                      marginTop: '10px',
                      marginBottom: '10px'
                    }}
                  ></input>
                  <br />
                  <label className="phone__label" style={{ color: '#000' }}>Phone Number</label>
                  <br />
                  <input
                    className="phone__number"
                    disabled={!changeClick}
                    value={formData.phone__number}
                    onChange={handleChange}
                    name="phone__number"
                    type="text"
                    required
                    style={{
                      outline: 'none',
                      borderRadius: '5px',
                      border: '1px solid #b8b2b2',
                      height: '35px',
                      width: '100%',
                      fontSize: '17px',
                      paddingLeft: '5px',
                      marginTop: '10px',
                      marginBottom: '10px'
                    }}
                  ></input>
                  <br />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <p style={{ color: 'black' }}>Gender:</p>
                    <label style={{ color: 'black' }}>
                      <input
                        className='sex'
                        onChange={handleChange}
                        disabled={!changeClick}
                        type="radio"
                        name="sex"
                        value="1"
                        checked={formData.sex == '1'}
                      />
                      Male
                    </label>
                    <label style={{ color: 'black' }}>
                      <input
                        className='sex'
                        onChange={handleChange}
                        disabled={!changeClick}
                        type="radio"
                        name="sex"
                        value="2"
                        checked={formData.sex == '2'}
                      />
                      Female
                    </label>
                  </div>
                  <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
                    <label style={{ color: 'black' }}>Current Level: </label>
                    <select
                      className="level"
                      value={formData.level}
                      disabled={!changeClick}
                      name="level"
                      onChange={handleChange}
                      style={{
                        outline: 'none',
                        borderRadius: '7px',
                        border: '1px solid #e6e4e3',
                        height: '35px',
                        width: '10vw',
                        fontSize: '17px',
                        paddingLeft: '7px'
                      }}
                    >
                      <option value="N1">N1</option>
                      <option value="N2">N2</option>
                      <option value="N3">N3</option>
                      <option value="N4">N4</option>
                      <option value="N5">N5</option>
                    </select>
                  </Box>
                  {!changeClick && <Button onClick={changeClickButton} style={{ width: '100px' }}>Edit</Button>}
                </form>
                {changeClick && <SubmitButton onClick={submit}>Update</SubmitButton>}
              </Box>
            )}
          </div>
        )
        
    }
