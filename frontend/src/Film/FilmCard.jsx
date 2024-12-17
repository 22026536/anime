import Box from '@mui/material/Box'
import React from 'react'
import { useTheme } from '@emotion/react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './FilmCard.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
function createSlug(name) {
  return name
    .trim() 
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-'); }
export default function FilmCard(props) {
  const navigate = useNavigate()
    const theme = useTheme()
    const film_id = props.index
    const clickFilm = () => {
      localStorage.setItem('film_id', film_id)
      navigate(`/film/${encodeURIComponent(createSlug(props.name))}`)
      window.location.reload()
    }
  return (
   <Box sx = {{width: '160px', height: '300px', minHeight: '250px', borderRadius: '7px',cursor: 'pointer', overflow: 'hidden', transition: 'transform 0.5s linear'}} onClick ={clickFilm}>
    <div className='filmImagediv' style={{width: '100%', height: '75%', position: 'relative', zIndex: '1', alignItems: 'center', display: 'flex', justifyContent:'center',  overflow: 'hidden'}}> 
    <div style={{ width: '35%', height: '10%', backgroundColor: '#374051', position: 'absolute', top: '2%', left: '5%', borderRadius: '10px', display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'center', zIndex: '5'}}>
    <StarIcon style={{color: '#ebb609', fontSize: '16px'}}/>
    <div style={{color: '#fafafa'}}>{props.score}</div>
    </div>
    <img className='filmImage' src = {props.image} style={{width: '100%', height: '100%', objectFit:'cover',  transition: 'transform 0.3s ease',}}>
    </img>
    
    <PlayCircleIcon className='icon' style={{position: 'absolute', zIndex: '3', color: '#ef4444', fontSize: '55px',transition: 'opacity 0.3s ease'}}/>
    </div>
   
    <div style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '7px', fontFamily:"montserrat"}}>{props.name}</div>
    <div style={{display: 'flex', justifyContent: 'center', gap: '30%'}}>

    
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '15px'}}> 
      <Box sx={{display: 'flex', gap: '3px'}}>
      <VisibilityIcon/>
      <div>{props.view}</div>
      </Box>
      <div>{`Level: ${props.level}`}</div>
      </div>
      
   </Box>
  )
}

