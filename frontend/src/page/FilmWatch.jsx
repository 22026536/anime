import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import { useTheme } from '@emotion/react';

import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArticleIcon from '@mui/icons-material/Article';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { Button, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

function createSlug(name) {
    return name
      .trim() 
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-'); }
  export default function FilmWatch() {
    const theme = useTheme();
const navigate = useNavigate();
const [data, setData] = useState();
const [loading, setLoading] = useState(true);
const [isLastestEpisode, setIsLastestEpisode] = useState(false);

const fetchFilm = async () => {
  try {
    const response = await fetch('https://animetangobackend.onrender.com/anime/animeInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ anime_id: localStorage.getItem('film_id') }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setData(data);
      setLoading(false);
    } else {
      console.error('Lỗi khi lấy thông tin phim:', response.statusText);
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
  if (data && localStorage.getItem('episode_id') !== data.episodes[data.episodes.length - 1].Episode_id) {
    setIsLastestEpisode(true); 
  } else {
    setIsLastestEpisode(false);
  }
}, [data]); 

const episodeClick = (episode_id, name, episode) => {
  localStorage.setItem('episode_id', episode_id);
  localStorage.setItem('episode', episode);
  navigate(`/film/${name}/${episode}`);
};

const jwt = localStorage.getItem('jwt');

const fetchWatch = async () => {
  try {
    const response = await fetch('https://animetangobackend.onrender.com/userAnime/watch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        episode_id: localStorage.getItem('episode_id'),
        jwt: jwt,
        anime_id: localStorage.getItem('film_id'), 
        isLastestEpisode: isLastestEpisode,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error('Lỗi khi gửi:', response.statusText);
    }
  } catch (error) {
    console.error('Lỗi mạng:', error);
  }
};

useEffect(() => {
  if (localStorage.getItem('episode_id')) {
    fetchWatch(); 
  }
}, [isLastestEpisode]); 
          
    return (
      <>
      <Header/>
      {!loading && 
      <Box sx={{ marginLeft: '10%',width: '80%', height: 'auto', minHeight: '40vh', marginTop: '200px', backgroundColor: theme.palette.mode == 'dark' ? '#333332' : '#fafafa', borderRadius: '12px', display: 'flex', alignItems: 'center', paddingLeft: '7%', gap: '5%', fontSize: '18px'}}>
      <img className='infoImg' src = {data.anime['Image URL']} style={{ cursor: 'pointer', width: '16%', height: 'auto', maxHeight: '35vh', minHeight: '30vh'}}></img>
      <div>
        <div style = {{fontSize: '27px', fontWeight: '800', fontFamily: 'Sour Gummy'}}>{data.anime.Name}</div>
        <div style={{display: 'flex', gap: '4px'}}>
    Genres: {data?.anime?.Genres?.map((item, index) => (
      <Box key={index} sx ={{display: 'flex'}}>
      <Link style={{textDecoration: 'none', cursor: 'pointer'}}>
        {item}
      </Link>
       <div>{index < data.anime.Genres.length - 1 ? ', ' : ''}</div>
       </Box>
    ))}
  </div>
  <div style={{display: 'flex', alignContent: 'center', gap: '5px', fontSize: '18px'}}>
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
       <Box sx ={{alignItems: 'center', display: 'flex', gap: '3px', borderRadius: '5px', backgroundColor: theme.palette.mode === 'light' ? 'black': 'white', color: theme.palette.mode === 'dark' ? 'black': 'white', paddingX:'7px', paddingY: '3px', cursor: 'pointer'}}>Evaluate</Box>
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
      
      {!loading && (
  <Box>
    <Box sx= {{fontWeight: '800', fontSize: '20px', marginLeft: '10%', marginTop: '20px'}}>
        {`Episode: ${localStorage.getItem('episode')}`}
    </Box>
    {data.episodes.map((item, index) => {
      return item.Episode_id == localStorage.getItem('episode_id') && (
        <div style={{ overflow: 'hidden', width: '1163px', height: '592px', position: 'relative', marginTop: '20px', marginLeft: `calc((100vw - 1163px) / 2)`}}>
  <iframe
    allowFullScreen
    key={index}
    src={item.Url_link}
    style={{
      position: 'absolute', 
      top: '-70px',
      left: '-15px',
      width: '1200px',
      height: '700px', 
      border: 'none',
    }}
    scrolling="no"
    title={`iframe-${index}`} 
  ></iframe>
</div>
      );
    })}
  </Box>
)}


        {!loading && <Box sx ={{width: '80%', marginLeft: '10%', marginTop: '20px'}}>
          <div style={{fontSize: '18px', fontWeight: '800'}}>List of episodes:</div>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px'}}>
          {data.episodes.map((item, index) => {
            return (
                <>
            {item.Episode_id == localStorage.getItem('episode_id') && <div key ={index} onClick={() => episodeClick(item.Episode_id, encodeURIComponent(createSlug(data.anime.Name)),item.Episode )} style={{backgroundColor: '#d11b3d', color: 'white', padding: '3px 12px 3px 12px', cursor: 'pointer'}}>{`${item.Episode}`}</div>}
            {item.Episode_id != localStorage.getItem('episode_id') &&<div key ={index} onClick={() => episodeClick(item.Episode_id, encodeURIComponent(createSlug(data.anime.Name)),item.Episode )} style={{backgroundColor: theme.palette.mode === 'dark' ? '#2a2b2b' : '#d9dbdb', padding: '3px 12px 3px 12px', cursor: 'pointer'}}>{`${item.Episode}`}</div>}</>)
          })}
  </Box>
          
          </Box>}
  
  {/* <Footer/> */}
      </>
    )
  }
  
