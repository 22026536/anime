import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import { useTheme } from '@emotion/react';
import './FilmCard.css'
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { Button, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FilmRate from './FilmRate';
import FilmComment from './FilmComment';
function createSlug(name) {
  return name
    .trim() 
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-'); }
export default function FilmInfo() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [infoClick, setInfoClick] = useState(true)
  const [watchClick, setWatchClick] = useState(false)
  const [evaluateClick, setEvaluate] = useState(false)
  const [comment, setComment] = useState(false)
  const ClickEvaluate = () => {
    setEvaluate(!evaluateClick)
  }
  const jwt = localStorage.getItem('jwt')
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
      const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/anime/animeInfo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({anime_id : localStorage.getItem('film_id'), jwt : jwt}),
          });
    
          if (response.ok) {
            const data = await response.json();
            setData(data)
            setLoading(false)
    
          } else {
            console.error('Lỗi khi đăng nhập:', response.statusText);
          }
        } catch (error) {
          console.error('Lỗi mạng:', error);
        }
      };
    
      useEffect(() => {
        const fetchData = async () => {
          await fetchFilm();
        };
        fetchData();
      }, []);
      useEffect(() => {
        if (evaluateClick) {
          document.body.style.overflow = "hidden";
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          document.body.style.overflow = "auto";
        }
        return () => {
          document.body.style.overflow = "auto";
        };
      }, [evaluateClick]);

      const ClickInfo = () => {
        setInfoClick(true)
        setWatchClick(false)
      }
      const ClickWatch = () => {
        setInfoClick(false)
        setWatchClick(true)
      }
      const episodeClick = (episode_id, name, episode) => {
        localStorage.setItem('episode_id', episode_id)
        localStorage.setItem('episode', episode)
        navigate(`/film/${name}/${episode}`)
      }
      const ClickComment = () => {
        setComment(!comment)
      }
      const clickType = (type) => {
          localStorage.setItem('genre', type)
          navigate(`/genre/${encodeURIComponent(createSlug(type))}`)
      }
  return (
    <>
    {!loading && 
    <Box sx={{ marginLeft: '10%',width: '80%', height: 'auto', minHeight: '40vh', marginTop: '200px', backgroundColor: theme.palette.mode == 'dark' ? '#333332' : '#fafafa', borderRadius: '12px', display: 'flex', alignItems: 'center', paddingLeft: '7%', gap: '5%', fontSize: '15px'}}>
    <img className='infoImg' src = {data.anime['Image URL']} style={{ cursor: 'pointer', width: '16%', height: 'auto', maxHeight: '35vh', minHeight: '30vh'}}></img>
    <div>
      <div style = {{fontSize: '27px', fontWeight: '800', fontFamily: 'Sour Gummy'}}>{data.anime.Name}</div>
      <div style={{display: 'flex', gap: '4px'}}>
  Genres: {data?.anime?.Genres?.map((item, index) => (
    <Box key={index} sx ={{display: 'flex'}}>
    <Link onClick = {() => clickType(item)} style={{textDecoration: 'none', cursor: 'pointer'}}>
      {item}
    </Link>
     <div>{index < data.anime.Genres.length - 1 ? ', ' : ''}</div>
     </Box>
  ))}
</div>
<div style={{display: 'flex', alignContent: 'center', gap: '5px', fontSize: '15px'}}>
  <div>Score: </div>
<Rating name="customized-10" defaultValue={data.anime.Score} precision={0.25} max={10} readOnly/>
<div>{`( ${data.anime.Score} )` }</div>
<div>{`by ${data.anime['Scored By']} viewers`}</div>
</div>
<div style={{display: 'flex', gap: '10%'}}>
<div>{`Type: ${data.anime.Type}`}</div>
{data.anime.Type === 'TV' && <div>{`Episodes : ${data.anime.Episodes}`}</div>}
{data.anime.Type === 'TV' && <div>{`Duration : ${data.anime.Duration}`}</div>}
</div>
<div style={{display: 'flex', gap: '4%', marginTop: '10px'}}>
     <Box sx ={{alignItems: 'center', display: 'flex', gap: '3px', borderRadius: '5px', backgroundColor: theme.palette.mode === 'light' ? 'black': 'white', color: theme.palette.mode === 'dark' ? 'black': 'white', paddingX:'7px', paddingY: '3px', cursor: 'pointer'}}><FavoriteIcon/>Like</Box>
     <Box sx ={{alignItems: 'center', display: 'flex', gap: '3px', borderRadius: '5px', backgroundColor: theme.palette.mode === 'light' ? 'black': 'white', color: theme.palette.mode === 'dark' ? 'black': 'white', paddingX:'7px', paddingY: '3px', cursor: 'pointer'}} onClick= {ClickEvaluate}>Evaluate</Box>
     <Box sx ={{alignItems: 'center', display: 'flex', gap: '3px', borderRadius: '5px', backgroundColor: theme.palette.mode === 'light' ? 'black': 'white', color: theme.palette.mode === 'dark' ? 'black': 'white', paddingX:'7px', paddingY: '3px', cursor: 'pointer'}} onClick= {ClickComment}>Comment</Box>
</div>
<div style={{display: 'flex', justifyContent: 'space-between', width: '50vw', marginTop: '20px'}}>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><RemoveRedEyeIcon/> Views</div>
    <div style={{textAlign: 'center'}}>{data.anime.Members}</div>
  </Box>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><FavoriteIcon/> Favorites</div>
    <div style={{textAlign: 'center'}}>{data.anime.Favorites}</div>
  </Box>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}><ArticleIcon/> Level</div>
    <div style={{textAlign: 'center'}}>{data.anime.JapaneseLevel}</div>
  </Box>
  <Box>
    <div style={{display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center'}}><NoAccountsIcon/>Age</div>
    <div style={{textAlign: 'center'}}>{data.anime.Old}</div>
  </Box>
</div>
    </div>
    </Box>}

    {loading && <Box sx ={{marginTop: '200px', marginLeft: '10%', width: '80vw', height: '40vh', borderRadius: '10px', overflow: 'hidden'}}><Skeleton variant='rectangular' width = '100%' height='100%'></Skeleton></Box>}
    {!loading && <Box sx={{display: 'flex', justifyContent: 'start', marginLeft: '10%', marginTop: '20px'}}>
      
     {!infoClick &&<div onClick={ClickInfo} style={{width: '120px', height: '40px', paddingX: '10px', paddingY: '3px', backgroundColor: theme.palette.mode === 'dark' ? '#292929' : '#becee6' , alignContent: 'center', textAlign: 'center', cursor: 'pointer', borderRight: `1px solid ${theme.palette.mode === 'dark' ? '#fafafa' : 'black'}`}}>Information</div>}
     
     {infoClick &&<div onClick={ClickInfo} style={{width: '120px', height: '40px', paddingX: '10px', paddingY: '3px', backgroundColor: '#d65424' , alignContent: 'center', textAlign: 'center', cursor: 'pointer', borderRight: `1px solid ${theme.palette.mode === 'dark' ? '#fafafa' : 'black'}`, color: 'white'}}>Information</div>}
     {!watchClick && <div onClick={ClickWatch} style={{width: '120px', height: '40px', paddingX: '10px', paddingY: '3px', backgroundColor: theme.palette.mode === 'dark' ? '#292929' : '#becee6' , alignContent: 'center', textAlign: 'center', cursor: 'pointer'}}>Watch</div>}
     {watchClick && <div onClick={ClickWatch} style={{width: '120px', height: '40px', paddingX: '10px', paddingY: '3px', backgroundColor:'#d65424' , alignContent: 'center', textAlign: 'center', cursor: 'pointer', color: 'white'}}>Watch</div>}
      </Box>}

      {!loading && infoClick && <Box sx ={{width: '80%', marginLeft: '10%', marginTop: '20px'}}>
        <p>{`Aired: ${data.anime.Aired}`}</p>
        <p>{`Status: ${data.anime.Status}`}</p>
        <p>{`Producers: ${data.anime.Producers}`}</p>
        <p>{`Synopsis: ${data.anime.Synopsis}`}</p>
        </Box>}

      {!loading && watchClick && <Box sx ={{width: '80%', marginLeft: '10%', marginTop: '20px'}}>
        <div style={{fontSize: '18px', fontWeight: '800'}}>List of episodes:</div>
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px'}}>
        {data.episodes.map((item, index) => {
          return (
          <div key ={index} onClick={() => episodeClick(item.Episode_id, encodeURIComponent(createSlug(data.anime.Name)),item.Episode )} style={{backgroundColor: theme.palette.mode === 'dark' ? '#2a2b2b' : '#d9dbdb', padding: '3px 12px 3px 12px', cursor: 'pointer'}}>{`${item.Episode}`}</div>)
        })}

       
</Box>
        
        </Box>}

        {evaluateClick && <>
      <Box
    sx={{
      position: "absolute",
      zIndex: "10",
      width:'100vw',
      height: '200vh',
      backgroundColor: 'rgba(76, 79, 77, 0.5)',
      top: '0',
      left: '0',
       overflow: 'hidden'
    }}
    autoComplete="off"
    onClick = {ClickEvaluate}
  ></Box>
  <FilmRate name = {data.anime.Name} img ={data.anime['Image URL']} id ={data.anime.Anime_id} rate = {data.rated}/>
     </>}
     {comment && <>
      <Box
    sx={{
      position: "absolute",
      zIndex: "10",
      width:'100vw',
      height: '200vh',
      backgroundColor: 'rgba(76, 79, 77, 0.5)',
      top: '0',
      left: '0',
       overflow: 'hidden'
    }}
    autoComplete="off"
    onClick = {ClickComment}
  ></Box>
  <FilmComment name = {data.anime.Name} img ={data.anime['Image URL']} id ={data.anime.Anime_id} />
     </>}


    </>
  )
}
