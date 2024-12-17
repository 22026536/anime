import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Navbar.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AirplayIcon from '@mui/icons-material/Airplay';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Navbar() {
    const navigate = useNavigate()
    const theme = useTheme()
    const [FilmClick, setFilmClick] = useState(false)
    const [UserClick, setUserClick] = useState(false)
    const ClickFilm =() =>{
        setFilmClick(!FilmClick)
    }
    const ClickUser = () => {
        setUserClick(!UserClick)
    }
    const [dashboardClick, setDashboardClick] = useState(false)
    const ClickDashboard = () => {
        setDashboardClick(!dashboardClick)
        navigate('/admin/dashboard')
    }
    const [itemIndex, setItemIndex] = useState(null)
    const [userIndex, setUserIndex] = useState(null)
    const films = [
      { label: 'OverView', url: '/admin/filmOverview', icon: <LayersIcon></LayersIcon> },
        { label: 'Add film', url: '/admin/filmAdd', icon: <VideoCallIcon></VideoCallIcon>},
        { label: 'Film Episode', url: '/admin/filmEpisode', icon: <AirplayIcon></AirplayIcon> },
    ]
    const users = [
      { label: 'OverView', url: '/admin/userOverview', icon: <LayersIcon></LayersIcon> },
      { label: 'Add user', url: '/admin/userAdd', icon: <VideoCallIcon></VideoCallIcon>},
      { label: 'Remove user', url: '/admin/userRemove', icon: <DeleteIcon></DeleteIcon> },
    ]
    const clickitem = (a, index) => {
      navigate(`${a}`)
      setItemIndex(index)
      setUserIndex(-1)
    }
    const clickuserIndex = (a, index) => {
      navigate(`${a}`)
      setUserIndex(index)
      setItemIndex(-1)
    }
  return (
    <Box sx = {{position: 'fixed', top: '60px', borderRight: `1px solid ${theme.palette.mode === 'light' ? '#585d66' : '#84868a'}`, width: '22vw', height: '100vh'}}>
     <Box onClick={ClickDashboard} sx ={{display: 'flex', marginTop: '20px', height: '40px', gap: '20px', paddingLeft: '20px', fontSize: '18px', alignItems: 'center', cursor: 'pointer'}}>
        <DashboardIcon style={{fontSize: '30px'}}></DashboardIcon>
        <div>Dashboard</div>
     </Box>
     <Box onClick ={ClickFilm} className = 'tag' sx ={{display: 'flex', marginTop: '10px', height: '40px', gap: '20px', paddingLeft: '20px', fontSize: '18px', alignItems: 'center', position: 'relative' }}>
        <MissedVideoCallIcon style={{fontSize: '30px'}}></MissedVideoCallIcon>
     <div>Films</div>
     {!FilmClick && <ExpandMoreIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandMoreIcon>}
     {FilmClick && <ExpandLessIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandLessIcon>}
     </Box>
     {FilmClick && <Box>
      {films.map((item, index) => (
        <Box key = {index} onClick = {() => clickitem(item.url, index)} sx={{height: '30px', paddingLeft: '40px', display: 'flex', gap: '15px', cursor: 'pointer',  backgroundColor: index === itemIndex ? '#e6e5e3' : 'transparent', alignItems: 'center'}}>
          {item.icon}
          {item.label}</Box>
      )
      )}
      </Box>}

     <Box onClick ={ClickUser} className = 'tag' sx ={{display: 'flex', marginTop: '10px', height: '40px', gap: '20px', paddingLeft: '20px', fontSize: '18px', alignItems: 'center', position: 'relative'}}>
        <SupervisedUserCircleIcon style={{fontSize: '30px'}}></SupervisedUserCircleIcon>
     <div>Users</div>
     {UserClick && <ExpandLessIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandLessIcon>}
     {!UserClick &&<ExpandMoreIcon className='arrow' style={{position: 'absolute', right: '15px'}}></ExpandMoreIcon>}
    
     </Box>
     {UserClick && <Box>
      {users.map((item, index) => (
        <Box key = {index} onClick = {() => clickuserIndex(item.url, index)} sx={{height: '30px', paddingLeft: '40px', display: 'flex', gap: '15px', cursor: 'pointer',  backgroundColor: index === userIndex ? '#e6e5e3' : 'transparent', alignItems: 'center'}}>
          {item.icon}
          {item.label}</Box>
      )
      )}
      </Box>}
      <Box  className='logout' sx ={{ display: 'flex', gap: '20px', paddingLeft: '20px', height: '40px', marginTop: '20px', alignItems: 'center'}}>
        <LogoutIcon></LogoutIcon>
        <div >Log out</div>
        </Box>
    </Box>
  )
}
