import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@emotion/react';
import './Type.css'

export default function Type() {
    const theme = useTheme();

    const links = [
        { label: 'Action', url: '/Action' },
        { label: 'Adventure', url: '/Adventure' },
        { label: 'Avant Garde', url: '/Avant_Garde' },
        { label: 'Award Winning', url: '/Award_Winning' },
        { label: 'Comedy', url: '/Comedy' },
        { label: 'Drama', url: '/Drama' },
        { label: 'Fantasy', url: '/Fantasy' },
        { label: 'Girls Love', url: '/Girls_Love' },
        { label: 'Horror', url: '/Horror' },
        { label: 'Mystery', url: '/Mystery' },
        { label: 'Romance', url: '/Romance' },
        { label: 'Sports', url: '/Sports' },
        { label: 'Sci-Fi', url: '/Sci-Fi' },
        { label: 'Slice of Life', url: '/Slice_of_Life' },
        { label: 'Supernatural', url: '/Supernatural' },
        { label: 'Suspense', url: '/Suspense' },
    ];

    return (
        <Box sx={{position: 'absolute'}} className ='Child'>
            <Box sx= {{ width: '100px', height: '10px', backgroundColor: 'transparent'}}></Box>
            <Box 
                sx={{
                    width: '200px',
                    height: '220px',
                    paddingTop: '5px',
                    zIndex: '200',
                    backgroundColor: theme.palette.mode === 'light' ? '#Fafafa' : '#3e3d40',
                    marginLeft: '-50px',
                    borderRadius: '5px',
                    border: `1.5px solid ${theme.palette.mode === 'dark' ? 'white' : 'grey'}`,
                    fontSize: '15px',
                    overflowY: 'auto',
                    maxHeight: '220px', 
                }}
            >
                {links.map((link, index) => (
                    <Box
                        key={index}
                        className='type__div'
                        sx={{
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '10px',
                            '&:hover': {
                                backgroundColor: theme.palette.mode === 'dark' ? '#5a5a5a' : '#e0e0e0',
                            }
                        }}
                    >
                        <Link
                            href={`/genre${link.url}`} 
                            onClick={() => localStorage.setItem('genre', link.label)}
                            style={{
                                textDecoration: 'none',
                                color: theme.palette.mode === 'light' ? '#000' : 'white',
                                width: '100%', 
                                display: 'block',
                                padding: '5px 10px'
                            }}
                        >
                            {link.label}
                        </Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
