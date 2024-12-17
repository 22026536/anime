import React from 'react'
import { Box } from '@mui/material'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import '../component/Header/FirstScreen.css'
import { useNavigate } from 'react-router-dom';


export default function FirstScreen() {
  const navigate = useNavigate();
  const click = () => {
    navigate('/home');
  }
  return (
    <Box sx={{position: 'relative'}}>
        <img src='/background.jpg' style={{width: '100vw', height: '100vh', objectFit: 'cover'}}></img>
         <Box sx= {{position: 'absolute', top: '20vh', zIndex: '100', width: '100vw', textAlign: 'center'}}>
            <div style={{fontFamily: 'Sour Gummy', fontSize: '60px', color: 'white'}} className='aisatsu'>Welcome to Animetango</div>
            <div style={{fontSize: '30px',color: 'white'}} className='intro'>Mastering Japanese through Anime</div>
            <Box sx={{width :'100vw', display: 'flex', justifyContent: 'center', marginTop: '10vh'}}>
            <Box sx ={{width: '200px', height: '60px', backgroundColor: 'white', borderRadius: '30px', display: 'flex', justifyContent: 'center', gap:'12px', alignItems: 'center', cursor: 'pointer'}} className= 'button' onClick= {click}>
              <p style={{color: 'black', fontSize: '20px'}}>Explore</p>
              <FaArrowUpRightFromSquare style={{width: '20px', height: 'auto', color: 'black'}}/>
            </Box>
            </Box>
            
        </Box> 
    </Box>
  )
}
