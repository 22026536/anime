import React from "react";
import Box from "@mui/material/Box";
import "./Header.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useTheme } from "@emotion/react";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ChangeMode from "../ChangeMode";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Type from "./Type";
import Danhmuc from "./Danhmuc";
import Level from "./Level";
import Login from "../Account/Login";
import { useNavigate } from "react-router-dom";
import AccountHeader from "../Account/AccountHeader";
import { Skeleton } from "@mui/material";
import ForgetPassword from "../Account/ForgetPassword";
import ChatBot from "../chatBot/ChatBot"
import ChatBotToggle from "../chatBot/ChatBotToggle"

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate()
  const [searchClick, setSearchClick] = useState(false);
  const ClickSearch = () => {
    setSearchClick(!searchClick);
  };
  const [Typehover, setTypehover] = useState(false);
  const [Danhmuchover, setDanhmuchover] = useState(false);
  const [Levelhover, setLevelhover] = useState(false);
  const [isLogin, setIsLogin ] = useState(false)
  const [userInfor, setUserInfor] = useState([]);
  const [loading, setLoading] = useState(true)
  const jwt = localStorage.getItem('jwt')
  const [query, setQuery] =useState()
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
          setIsLogin(true)
          setUserInfor(responseData.userInfo)
        }
        else{
          setIsLogin(false)
        }
        setLoading(false)
        
      })
      .catch(error => console.error('Error:', error));
  }, []);
  const [isOpen, setIsOpen] = useState(false); 
  const toggleChatClick = () => {
    setIsOpen(!isOpen); 
  };

  const searchh = (query) => {
    localStorage.setItem('query', query)
    navigate(`/search/${query}`)
    window.location.reload()
  }
  const searchChange = (e) => {
    setQuery(e.target.value); // Cập nhật giá trị comment khi textarea thay đổi
};

  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: theme.palette.mode === "dark" ? "#3e3d40" : "#FAFAFA",
        height: "100px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px",
        zIndex: '10',
        position: "fixed",
        top: '0',
        left: '0',
        boxShadow:
          theme.palette.mode === "dark"
            ? "0px 4px 10px rgba(255, 255, 255, 0.6)"
            : "0px 4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Link
        className="web__name"
        style={{ cursor: "pointer", textDecoration: "none" }}
        href="/home"
      >
        <img className="logo" src="/logo.png"></img>
        <Typography
          style={{
            fontSize: "30px",
            fontWeight: "800",
            background: "linear-gradient(90deg, #02c2f7, #400af2)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            width: "180px",
            cursor: "pointer",
          }}
          className="logo__text"
        >
          Animetango
        </Typography>
      </Link>
      <div
        style={{
          display: "flex",
          width: "27%",
          height: "100%",
          gap: "5%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: '15px'
        }}
      >
        <Box
          onMouseEnter={() => setDanhmuchover(true)}
          onMouseLeave={() => setDanhmuchover(false)}
          sx={{ position: "relative", display: "inline-block" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="navbar__child"
          >
            Category
            <KeyboardArrowDownIcon className="rotate-icon" />
          </Link>
          {Danhmuchover && <Danhmuc />}
        </Box>

        <Box
          onMouseEnter={() => setTypehover(true)}
          onMouseLeave={() => setTypehover(false)}
          sx={{ position: "relative", display: "inline-block" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="navbar__child"
          >
             Genre
            <KeyboardArrowDownIcon className="rotate-icon" />
          </Link>
          {Typehover && <Type />}
        </Box>
        <Box
          onMouseEnter={() => setLevelhover(true)}
          onMouseLeave={() => setLevelhover(false)}
          sx={{ position: "relative", display: "inline-block" }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="navbar__child"
          >
            Level <KeyboardArrowDownIcon className="rotate-icon" />
          </Link>
          {Levelhover && <Level />}
        </Box>

        <Link
          style={{
            textDecoration: "none",
            color: theme.palette.mode === "light" ? "black" : "white",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          href='/introduce'
          className="navbar__child"
        >
          About us
        </Link>
      </div>

      <div
        className="search"
        style={{
          width: "22%",
          marginLeft: "5%",
          display: "flex",
          justifyContent: "end",
          transform: searchClick ? "scale(0.9)" : "scale(1)",
        }}
      >
        {!searchClick && (
          <Box
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "100%",
              border: `1px solid ${
                theme.palette.mode === "light" ? "black" : "white"
              }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "0.5s ease",
            }}
            onClick={ClickSearch}
          >
            <SearchIcon />
          </Box>
        )}
        {searchClick && (
          <Box
            sx={{
              width: "100%",
              height: "40px",
              position: "relative",
              transition: "0.5s ease",
              transform: searchClick ? "scale(1)" : "scale(0.9)",
            }}
          >
            <SearchIcon
            onClick= {() => searchh(query)}
              style={{
                position: "absolute",
                top: "7px",
                left: "5px",
                color: "black",
                cursor: 'pointer'
              }}
            />
            <input
              type="text"
              placeholder="Search....."
              onChange={searchChange}
              value={query}
              style={{
                width: "100%",
                outline: "none",
                height: "40px",
                borderRadius: "10px",
                border: "none",
                paddingLeft: "35px",
                fontSize: "17px",
              }}
            ></input>
            <CloseIcon
              style={{
                position: "absolute",
                top: "7px",
                right: "10px",
                cursor: "pointer",
                color: "black",
              }}
              onClick={ClickSearch}
            />
          </Box>
        )}
      </div>
      <Box sx={{ marginRight: "16px", marginLeft: "20px" , width: 'auto', maxWidth: '17%'}}>
        
        {!isLogin && !loading && <PositionedMenu />}
        {isLogin && !loading && userInfor && <Box><AccountHeader name= {userInfor.full_name} image ={userInfor.user_img}></AccountHeader></Box>}
        {loading && <Skeleton variant="rectangular" 
          width={100} 
          height={20} 
          sx={{ borderRadius: '8px', margin: '10px' }} ></Skeleton>}
      </Box>
      <ChangeMode />
      {!isOpen && <Box sx={{position:'fixed', right: '3vw', top: '90vh', zIndex: '10000'}}>
        <ChatBotToggle toggleChat={toggleChatClick} ></ChatBotToggle>
        </Box>}
        {isOpen && <Box sx={{position:'fixed', right: '3vw',top:'50vh', width: '23vw', height: '35vh', zIndex: '10000'}}>
          
          <ChatBot closeClick={toggleChatClick}></ChatBot>
          </Box>}

    </Box>
  );
}
function PositionedMenu() {
  const [forget, setForget] = useState(false)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [loginClick, setLoginClick] = useState(false)
  const ClickLogin = () => {
    setAnchorEl(null);
    setLoginClick(!loginClick)
  }
  const ClickSignup = () => {
    setAnchorEl(null);
    navigate('/signup')
  }
  const ClickForget = () => {
    setLoginClick(!loginClick)
    setForget(!forget)
  }
  const ClickForgett = () => {
    setForget(!forget)
  }
  return (
    <div>
      <Box
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ fontSize: "16px", cursor: "pointer" }}
      >
        Account?
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ marginTop: "30px" }}
      >
        <MenuItem onClick={ClickSignup}>Sign up</MenuItem>
        <MenuItem onClick={ClickLogin}>Login</MenuItem>
      </Menu>
      {loginClick && <>
              <Box
                sx={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 11,
                }}
                onClick={ClickLogin} />{" "}
              <Box sx={{position: 'absolute', zIndex: '20', top :'0', left:'0'}}><Login CloseIconn={ClickLogin} onSetForgotPassword={ClickForget}></Login></Box>  
              
            </>}
            {forget && <ForgetPassword CloseClick={ClickForgett}/>}
    </div>
  );
}
