import Box from '@mui/material/Box'
import React, {useState, useEffect} from 'react'
import './FilmCard.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Skeleton } from "@mui/material";
import { useNavigate } from 'react-router-dom';
function createSlug(name) {
  return name
    .trim() 
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-'); }
export default function TvFilm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        Type: 'TV',
         n: '20',
      });
      const [loading, setLoading] = useState(true)
    const [data, setData] = useState();
      const fetchFilm = async () => {
        try {
          const response = await fetch('https://animetangobackend.onrender.com/anime/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data)
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
      const ClickFilm = (anime_id, anime_name) => {
          localStorage.setItem('film_id', anime_id)
          navigate(`/film/${encodeURIComponent(createSlug(anime_name))}`)
      }
  return (
    <>
    <div style={{ fontSize: '25px', fontFamily: 'monospace', marginLeft: '5%', marginTop: '15px', marginBottom: '15px' }}>
        TV MOVIE
      </div>
    <Box sx={{display: 'flex', width: '92%', marginLeft: '5%', gap: '3%', height: '400px'}}>
        {!loading &&
        <>
        <div style={{width: '45%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '10px', zIndex: '1', alignItems: 'center', display: 'flex', justifyContent:'center'}} className='filmImagediv' onClick={() => ClickFilm(data[6].Anime_id, data[6].Name)}>
            <img className='filmImage' src={data[6]["Image URL"]} style={{width: '100%', height: '100%', borderRadius: '10px', transition: 'transform 0.3s ease', cursor: 'pointer', zIndex: '2'}}></img>
            <div style={{position: 'absolute',fontWeight: '800', bottom: '10px', fontSize: '20px', fontFamily: 'monospace', textDecoration: 'underline', left: '15px', color: 'white', zIndex: '3'}}>{data[6].Name}</div>
            <PlayCircleIcon className='icon' style={{position: 'absolute', zIndex: '7', color: '#ef4444', fontSize: '55px',transition: 'opacity 0.3s ease'}}/>
        </div>    
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', width: '50%', alignContent: 'space-between', height: '100%', overflow: 'hidden'}}>
          {data.slice(8, 16).map((item, index) => {
            return (
                <div key ={index} style = {{width: '20%', height: '45%', overflow: 'hidden', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}} className='filmImagediv' onClick={() => ClickFilm(item.Anime_id, item.Name)}>
                   <img src ={item["Image URL"]} className='filmImage' style={{width: '100%', height: '100%', borderRadius: '10px', cursor: 'pointer', objectFit: 'cover', transition: 'transform 0.3s ease'}}></img> 
                   <PlayCircleIcon className='icon' style={{position: 'absolute', zIndex: '7', color: '#ef4444', fontSize: '55px',transition: 'opacity 0.3s ease', cursor: 'pointer'}}/>
                   <div style={{width: '100%',position: 'absolute',fontWeight: '800', bottom: '10px', left: '0', fontSize: '12px', fontFamily: 'monospace', color: '#fafafa', zIndex: '3', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', backgroundColor: '#ef4444', textAlign: 'start', flexWrap: 'wrap', paddingLeft: '3px'}}>{item.Name}</div>
                </div>
            )
          })}
        </div>    
        </>
}
{loading && <>
        <Skeleton variant="rectangular" 
        width="45%"
        height={380}  >
        </Skeleton>  
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', width: '50%', alignContent: 'space-between', height: '100%' }}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div 
          key={index}
          style={{
            width: '20%',
            height: '45%',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="100%" 
            style={{ borderRadius: '10px' }}
          />
        </div>
      ))}
    </div>
        </>  
        
        
}
    </Box>
    </>
  )
}
