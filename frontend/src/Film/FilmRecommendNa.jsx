import React, { useState, useEffect } from 'react';
import FilmCard from './FilmCard';
import { Box } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
export default function FilmRecommendNa({change}) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;
  const [visibleMovies, setVisibleMovies] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true); 

  const fetchFilm = async () => {
    try {
      const response = await fetch('https://animetangobackend.onrender.com/naivebayes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({jwt : localStorage.getItem('jwt')})
      });

      if (response.ok) {
        const dataa = await response.json();
        console.log(dataa)
        setData(dataa.data.recommended_anime);
        setVisibleMovies(dataa.data.recommended_anime.slice(0, itemsPerPage));
        setLoading(false); 
      } else {
        console.error('Lỗi khi lấy dữ liệu:', response.statusText);
      }
    } catch (error) {
      console.error('Lỗi mạng:', error);
    }
  };

  useEffect(() => {
    fetchFilm();
  }, []);

  const handleNext = () => {
    setVisibleMovies((prev) => {
      const nextIndex = (data.indexOf(prev[prev.length - 1]) + 1) % data.length;
      return [...prev.slice(1), data[nextIndex]];
    });
  };

  const handlePrev = () => {
    setVisibleMovies((prev) => {
      const prevIndex = (data.indexOf(prev[0]) - 1 + data.length) % data.length;
      return [data[prevIndex], ...prev.slice(0, itemsPerPage - 1)];
    });
  };

  return (
    <Box>
      <div style={{marginLeft: '5%', width: '82%', marginTop: '15px', marginBottom: '15px', justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
      <div style ={{fontSize: '25px', fontFamily: 'monospace', display: 'flex', alignItems:'center'}}>RECOMMEND FOR YOU (NAIVE BAYES MODEL) <ChangeCircleIcon style={{fontSize: '30px', cursor: 'pointer'}} onClick= {change}/></div> 
        <Link to ='/recommend_naiveBayes' style={{textDecoration: 'none', marginTop: '15px'}}>See more....</Link>
      </div>
      <Box sx={{ display: 'flex',marginLeft: '2.5%', width: '95%', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
        <ExpandCircleDownIcon sx={{ cursor: 'pointer', fontSize: '50px', rotate: '90deg',display: { xs: 'none', lg: 'block'}}} onClick={handlePrev} />
        {
  loading
    ? Array.from(new Array(itemsPerPage)).map((_, index) => (
      <Box sx={{ display: 'block' }} key={`skeleton-${index}`}>
        <Skeleton 
          variant="rectangular" 
          width={160} 
          height={245} 
          sx={{ borderRadius: '8px', margin: '10px' }} 
        />
        <Skeleton 
          variant="rectangular" 
          width={160} 
          height={20} 
          sx={{ borderRadius: '8px', margin: '10px' }} 
        />
      </Box>
    ))
    : visibleMovies.map((item) => (
      <FilmCard
        key={item.Anime_id}
        image={item["Image URL"]}
        name={item.Name}
        level={item.JapaneseLevel}
        view={item.Members}
        score={item.Score}
        index={item.Anime_id}
        className="film-card"
      />
    ))
}

        <ExpandCircleDownIcon sx={{ cursor: 'pointer', fontSize: '50px', rotate: '270deg', display: { xs: 'none', lg: 'block'}}} onClick={handleNext} />
      </Box>
    </Box>
  );
}
