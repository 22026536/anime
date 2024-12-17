import React from 'react';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Box from '@mui/material/Box';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import StarsIcon from '@mui/icons-material/Stars';
import { useTheme } from '@emotion/react';

export default function Introduce() {
  const theme = useTheme();
  return (
    <Box>
      <Header />
      <Box sx={{ position: 'relative', marginTop: '100px', width: '100vw', height: '85vh' }}>
        <img src='/animefull.png' style={{ width: '100vw', height: '85vh', zIndex: '2', position: 'absolute' }} alt="Background"></img>
        <div style={{ position: 'absolute', backgroundColor: 'rgb(212, 106, 19, 0.5)', zIndex: '5', width: '100%', height: '100%' }}></div>
        <div style={{ width: '100%', position: 'absolute', zIndex: '7', color: '#fff', top: '30%' }}>
          <p style={{ textAlign: 'center', fontWeight: '800', fontSize: '40px' }}>ANIMETANGO</p>
          <p style={{ textAlign: 'center', fontSize: '40px' }}>LEARN JAPANESE THROUGH ANIMES</p>
        </div>
      </Box>
      <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: '70vw', height: 'auto', minHeight: '300px', backgroundColor: '#f5f5f5', borderRadius: '10px', position: 'absolute', zIndex: '8', marginTop: '-7%', paddingY: '20px', paddingLeft: '10px', boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.5)' }}>
          <p style={{ textAlign: 'center', fontSize: '30px', color: 'black' }}><strong>NOTABLE ACHIEVEMENTS</strong></p>
          <Box sx={{ display: 'flex', width: '100%', gap: '10%', textWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '20vw' }}>
              <SupervisedUserCircleIcon style={{ fontSize: '80px', color: '#EF4444' }} />
              <div style={{ padding: '0' }}>
                <div style={{ fontSize: '30px', color: '#ef4444', marginBottom: '0px' }}><strong>50 million</strong></div>
                <div style={{ fontSize: '18px', fontFamily: 'revert', color: 'black' }}>Social media reach on TikTok, Facebook</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '20vw' }}>
              <PersonAddAlt1Icon style={{ fontSize: '80px', color: '#EF4444' }} />
              <div style={{ padding: '0' }}>
                <div style={{ fontSize: '30px', color: '#ef4444', marginBottom: '0px' }}><strong>80000+</strong></div>
                <div style={{ fontSize: '18px', fontFamily: 'revert', color: 'black' }}>Website registrations on Animetango</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '20vw' }}>
              <AccountCircleIcon style={{ fontSize: '80px', color: '#EF4444' }} />
              <div style={{ padding: '0' }}>
                <div style={{ fontSize: '30px', color: '#ef4444', marginBottom: '0px' }}><strong>3000+</strong></div>
                <div style={{ fontSize: '18px', fontFamily: 'revert', color: 'black' }}>Active members using the platform</div>
              </div>
            </div>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '20vw' }}>
              <PeopleIcon style={{ fontSize: '80px', color: '#EF4444' }} />
              <div style={{ padding: '0' }}>
                <div style={{ fontSize: '30px', color: '#ef4444', marginBottom: '0px' }}><strong>1800+</strong></div>
                <div style={{ fontSize: '18px', fontFamily: 'revert', color: 'black' }}>Participants practicing Japanese through movies</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: '20vw' }}>
              <StarsIcon style={{ fontSize: '80px', color: '#EF4444' }} />
              <div style={{ padding: '0' }}>
                <div style={{ fontSize: '30px', color: '#ef4444', marginBottom: '0px' }}><strong>4.8/5</strong></div>
                <div style={{ fontSize: '18px', fontFamily: 'revert', color: 'black' }}>Positive feedback ratings</div>
              </div>
            </div>
          </Box>
        </Box>
      </Box>

      <Box>
        <div style={{ display: 'flex', gap: '20px', marginTop: '400px', width: '100vw', justifyContent: 'center', gap: '50px' }}>
          <img src='/image.jpeg' style={{ width: '400px', height: 'auto', objectFit: 'cover' }} alt="Introduction"></img>
          <div style={{ width: '30vw' }}>
            <div style={{ fontSize: '30px' }}><strong>INTRODUCTION TO ANIMETANGO</strong></div>
            <div style={{ width: '140px', height: '7px', backgroundColor: 'red', borderRadius: '5px' }}></div>
            <div style={{ color: theme.palette.mode === 'dark' ? '#b0b2b5' : '#7d7e80', marginTop: '15px', fontSize: '17px' }}>Founded: 13/4/2021</div>
            <br></br>
            <div>Animetango is an innovative product created by Vietnamese developers, aiming to provide effective and enjoyable solutions for learning Japanese.</div>
            <br></br>
            <div>Through anime, songs, and news, learners can relax while enhancing their Japanese skills and gaining more confidence each day.</div>
          </div>
        </div>
      </Box>

      <Box sx={{ width: '100vw', height: 'auto', minHeight: '35vh', backgroundColor: '#F3F4F6', marginTop: '15vh', paddingBottom: '65px', color: 'black' }}>
        <br></br>
        <div style={{ textAlign: 'center', fontSize: '30px', fontWeight: '700', fontFamily: 'monospace' }}>VISION & MISSION</div>
        <div style={{ textAlign: 'center' }}>"To become a leading and trusted educational technology provider in Vietnam"</div>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10vw', marginTop: '20px' }}>
          <div style={{ width: '32vw', height: 'auto', minHeight: '30vh', borderRadius: '5px', overflow: 'hidden', backgroundColor: 'white' }}>
            <div style={{ height: '20%', backgroundColor: '#EF4444', textAlign: 'center', alignContent: 'center', color: 'white', fontSize: '20px' }}>VISION</div>
            <div style={{ marginTop: '10px', marginLeft: '10px', fontSize: '18px' }}>2025: Become the leading provider of innovative solutions for effective and enjoyable Japanese learning</div>
            <br></br>
            <div style={{ marginLeft: '10px', fontSize: '18px' }}>2030: Become the number one provider of sustainable and effective Japanese learning ecosystems</div>
          </div>

          <div style={{ width: '32vw', height: 'auto', minHeight: '30vh', borderRadius: '5px', overflow: 'hidden', backgroundColor: 'white' }}>
            <div style={{ height: '20%', backgroundColor: '#EF4444', textAlign: 'center', alignContent: 'center', color: 'white', fontSize: '20px' }}>MISSION</div>
            <br></br>
            <br></br>
            <div style={{ marginLeft: '10px', fontSize: '18px' }}>Helping Aboard learners gain confidence in listening, speaking, and communicating in Japanese every day</div>
          </div>
        </Box>
      </Box>
      {/* <Footer/> */}
    </Box>
  );
}
