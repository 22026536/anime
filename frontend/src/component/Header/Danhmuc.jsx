import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@emotion/react';
import './Type.css'

export default function Danhmuc() {
    const theme = useTheme();

    // Định nghĩa các URL tương ứng cho từng mục
    const links = [
        { label: 'TV', url: '/category/TV' },
        { label: 'Ova', url: '/category/Ova' },
    ];

    return (
        <Box sx={{position: 'absolute'}} className ='Child'>
        <Box sx= {{ width: '100px', height: '10px', backgroundColor: 'transparent'}}></Box>
        <Box 
            sx={{
                width: '200px',
                height: '70px',
                paddingTop: '5px',
                zIndex: '200',
                backgroundColor: theme.palette.mode === 'light' ? '#Fafafa' : '#3e3d40',
                marginLeft: '-50px',
                borderRadius: '5px',
                border: `1.5px solid ${theme.palette.mode === 'dark' ? 'white' : 'grey'}`,
                fontSize: '15px'
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
                        onClick={() => localStorage.setItem('type', link.label)}
                        href={link.url} 
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
