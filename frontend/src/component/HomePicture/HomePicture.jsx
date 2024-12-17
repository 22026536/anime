import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

export default function HomePicture() {
    const links = [
        { stt: '1', url: '/homepicture1.webp' },
        { stt: '2', url: '/haha.webp' },
    ];

    const [currentImage, setCurrentImage] = useState(0);
    const timerRef = useRef(null);

    const changeImage = () => {
        setCurrentImage(prevImage => (prevImage + 1) % links.length); 
    };

   
    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            changeImage();
        }, 7000); 
        return () => clearInterval(timerRef.current); 
    }, [currentImage]); 
    const handleImageClick = (index) => {
        setCurrentImage(index); 
        clearInterval(timerRef.current); 
        timerRef.current = setInterval(() => {
            changeImage();
        }, 7000); 
    };

    return (
        <Box sx={{ marginTop: '120px' }}>
            <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <img 
                    src={links[currentImage].url} 
                    style={{ 
                        width: '96vw', 
                        height: '600px', 
                        opacity: 1, 
                        transition: 'opacity 0.5s ease-in-out',
                    }} 
                    alt="home" 
                />
            </div>
            <div style={{ display: 'flex', width: '100vw', justifyContent: 'center', gap: '12px', marginTop: '15px' }}>
                {links.map((item, index) => (
                    <div
                        key={item.stt}
                        onClick={() => handleImageClick(index)} 
                        style={{
                            width: '30px',
                            height: '5px',
                            borderRadius: '7px',
                            backgroundColor: currentImage === index ? 'red' : '#d1cbcb',
                            cursor: 'pointer',
                        }}
                    ></div>
                ))}
            </div>
        </Box>
    );
}
