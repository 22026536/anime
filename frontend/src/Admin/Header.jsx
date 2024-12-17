import { Box, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '@emotion/react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ChangeMode from '../component/ChangeMode'
export default function Header() {
    const theme = useTheme();
    const [menuIconClick, setMenuIconClick] = useState(false)
    const clickMenu = () => {
        setMenuIconClick(!menuIconClick)
    }
  return (
    <Box sx={{position: 'fixed', height: '60px', width: '100%', borderBottom: `1px solid ${theme.palette.mode === 'light' ? '#585d66' : '#84868a'}`, display: 'flex', alignItems: 'center', paddingLeft: '20px', gap: '20px', backgroundColor:theme.palette.mode === 'light' ? '#FFFFFF' : '#212120'}}>
     {!menuIconClick &&  <IconButton onClick ={clickMenu} style={{width: '45px', height: '45px'}}><MenuIcon  style ={{fontSize: '30px',cursor: 'pointer', transition: 'all 0.3s ease'}}></MenuIcon></IconButton>}
     {menuIconClick && <IconButton onClick ={clickMenu} style={{width: '45px', height: '45px'}}><MenuOpenIcon style ={{fontSize: '30px',cursor: 'pointer', transition: 'all 0.3s ease'}}></MenuOpenIcon></IconButton>}
     <Link
        className="web__name"
        style={{ cursor: "pointer", textDecoration: "none" }}
        href="/home"
      >
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "800",
            background: "linear-gradient(90deg, #02c2f7, #400af2)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            width: "280px",
            cursor: "pointer",
          }}
          className="logo__text"
        >
          Animetango Admin
        </Typography>
      </Link>
      <Box sx={{position: 'absolute', right: '30px'}}><ChangeMode></ChangeMode></Box>
    </Box>
  )
}
