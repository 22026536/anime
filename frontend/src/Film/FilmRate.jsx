import { Button, Rating } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTheme } from '@emotion/react'
import { useState, useEffect } from 'react'
import Alert from '@mui/material/Alert';
export default function FilmRate(props) {
    const theme = useTheme()
    const [errorMessage, setErrorMessage] = useState('');
    const [okMessage, setOkMessage]= useState('')
    const jwt = localStorage.getItem('jwt')
    const [star, setStar] = useState(props.rate || 0); 
      const handleSubmit = async (e) => {
        if (!jwt) {
            setErrorMessage("You must be logged in to rate!");
            return;
          }
        try {

          const response = await fetch('https://animetangobackend.onrender.com/userAnime/rate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({anime_id : props.id, jwt: jwt, rating: star})
          });
    
          if (response.ok) {
            const data = await response.json();
              // if(data.success) {
                setOkMessage(`Rate: ${data.message}`);
                setTimeout(() => {
                   window.location.reload();
                }, 2500);
              // }
              // else{
              //   setErrorMessage(`Rate failed: ${data.message}`)
              // }
             
           
            }
           else {
            setErrorMessage(`Rate failed: ${response.statusText}`);
            console.error('Error during Rate:', response.statusText);
          }
        } catch (error) {
            setErrorMessage(`${error}`);
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
          }, 2000); 
    
          return () => clearTimeout(timerr);
        }
      }, [okMessage]);
    

  return (
    <Box sx ={{width: '40vw', height: '30vh', backgroundColor: theme.palette.mode ==='light' ? '#fafafa' : '#222324', position: 'absolute', zIndex: '100', top :'40vh', left: '30vw', borderRadius: '10px', paddingTop: '20px'}}>
        {errorMessage && (
          <Alert variant='filled' severity="error" style={{transition: '-moz-initial', width: '100%', position: 'absolute', zIndex:'20', top: '0', left:'0'}}>
            {errorMessage}
          </Alert>
        )}

      {okMessage && (
          <Alert variant='filled' severity="success" style={{transition: '-moz-initial', width: '100%', position: 'absolute', zIndex:'20', top: '0', left:'0'}}>
            {okMessage}
          </Alert>
        )}
    <div style={{display: 'flex', marginLeft: '10%', gap: '20px'}}>
       
        <img style={{width: '120px', height: 'auto', maxHeight: '150px'}} src = {props.img}></img>
        <div>
        <div style={{fontSize: '17px'}}>{props.name}</div>
        <Box>
    <Box sx ={{display: 'flex', gap: '5px', marginTop: '10px', marginLeft: '-3px'}}>
    <Rating name="customized-10" defaultValue={star} max={10} precision={0.25} value={star}
        onChange={(event, newValue) => {
          setStar(newValue);
        }}/>
    <div style={{fontSize: '17px'}}>{star}</div>
    </Box>
    <Button style={{position: 'absolute'}} onClick={handleSubmit}>Rate!</Button>
    </Box>
    </div>
        </div>
   
    </Box>
  )
}
