import React from 'react'
import  Box from '@mui/material/Box'
import Header from '../component/Header/Header'
import { useState, useEffect } from 'react'
import Footer from '../component/Footer/Footer'
import FilmPage from '../Film/FilmPage'
export default function AccountShow() {
  // const [data, setData] = useState()
  // const [loading, setLoading] = useState(true)
  const [userInfor, setUserInfor] = useState([]);
  const [loading, setLoading] =useState(true)
  const [unfinishedClick, setUnfinishedClick] = useState(true)
  const [rateClick, setRateClick] = useState(false)
  const jwt = localStorage.getItem('jwt')
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()
  useEffect(() => {
    fetch('https://animetangobackend.onrender.com/anime/unfinished', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({jwt : jwt})
    })
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        setData1(responseData)
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    fetch('https://animetangobackend.onrender.com/user/userInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({jwt : localStorage.getItem('jwt')})
    })
      .then(response => response.json())
      .then(responseData => {
        if(responseData.success){
          setUserInfor(responseData.userInfo)
        }
        setLoading(false)
        
      })
      .catch(error => console.error('Error:', error));
  }, []);

const ClickUnfinished = () => {
  setUnfinishedClick(true)
  setRateClick(false)
}
const ClickRelate = () => {
  setUnfinishedClick(false)
  setRateClick(true)
}
  return (
    <Box>
<Header/>
<div style={{marginTop: '100px', height: '100px', width: '100vw', position: 'relative'}}>
<img src= '/block.jpg' style={{width: '100vw', height: '100px'}}></img>
{userInfor && <div style={{  position: 'absolute', top: '70px', zIndex: '7', left: '20vw', display: 'flex', flexWrap: 'nowrap', alignItems: 'end'}}>
  <img src ={userInfor.user_img} style={{width: '100px', height : "100px", borderRadius: '100%', objectFit: 'cover', border: '1px solid #fafafa'}}></img>
  <div style={{fontSize: '20px',width: '300px', position: 'absolute', left: '100px', bottom: '15px', marginLeft: '18px'}}>{userInfor.full_name}</div>
</div>}

</div>
<div style={{marginTop: '90px', display: 'flex', gap: '15px', marginLeft: '21vw'}}>
 {unfinishedClick && <div style={{cursor: 'pointer', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '10px'}} onClick={ClickUnfinished}>Unfinished films</div>}
 {!unfinishedClick && <div style={{cursor: 'pointer'}} onClick={ClickUnfinished}>Unfinished films</div>}
  {rateClick &&<div style={{cursor: 'pointer', textDecoration: 'underline', textDecorationThickness: '1px', textUnderlineOffset: '10px'}} onClick={ClickRelate}>Rated films</div>}
  {!rateClick &&<div style={{cursor: 'pointer'}} onClick={ClickRelate}>Rated films</div>}
  </div>
{unfinishedClick && data1 && <Box sx= {{marginTop: '50px'}}>
      <FilmPage data ={data1}></FilmPage>
  </Box>}
  {rateClick && data1 && <Box sx= {{marginTop: '50px'}}>
      <FilmPage data ={data2}></FilmPage>
  </Box>}

{/* <Footer></Footer> */}
    </Box>
  )
}
