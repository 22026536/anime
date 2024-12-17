import React from "react";
import "./Footer.css";
import { useTheme } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import "./Footer.css";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const renderBubbles = () => {
    let bubbles = [];
    for (let i = 0; i < 128; i++) {
      const size = 2 + Math.random() * 4;
      const distance = 6 + Math.random() * 4;
      const position = -5 + Math.random() * 110;
      const time = 2 + Math.random() * 2;
      const delay = -(2 + Math.random() * 2);
      bubbles.push(
        <div
          key={i}
          className="bubble"
          style={{
            "--size": `${size}rem`,
            "--distance": `${distance}rem`,
            "--position": `${position}%`,
            "--time": `${time}s`,
            "--delay": `${delay}s`,
          }}
        />
      );
    }
    return bubbles;
  };

  return (
    <div
      className="footer"
      style={{
        marginTop: "150px",
        height: "400px",
        backgroundColor: '#eb9534',
        zIndex: '10'
      }}
    >
      {/* <svg style={{ position: "fixed", top: "10vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
            <feComposite in="SourceGraphic" in2="blob" operator="atop" />
          </filter>
        </defs>
      </svg> */}
      <div className="bubbles" style={{ width: '93vw' }}>{renderBubbles()}</div>
      <div style={{ display: 'flex', marginTop: '40px', zIndex: '10', color: 'white', justifyContent: 'space-around', width: '100vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '300px', height: '60px' }}>
          <img src='/logo.png' style={{ width: '50px', height: 'auto', objectFit: 'cover', borderRadius: '100%' }} className="logoo"></img>
          <div style={{ fontSize: '22px', marginTop: '4px' }}><strong>Animetango</strong></div>
        </div>
        <div style={{ width: '480px', marginTop: '15px' }}>
          <div style={{ fontSize: '20px' }}><strong>Animetango Co., Ltd.</strong></div>
          <div>Business Registration Number: 0123456789</div>
          <div>Address: 144 Xuan Thuy, Dich Vong Hau Ward, Cau Giay District, Hanoi</div>
        </div>
        <div style={{ alignItems: 'start', width: '300px' }}>
          <p style={{ fontSize: '20px' }}><strong>Partners</strong></p>
          <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px', gap: '8px', marginTop: '-5px' }}>
            <img src="/payoo.jpg" style={{ width: '35px', height: '35px', borderRadius: '100%', objectFit: 'cover' }}></img>
            <img src="/momo.png" style={{ width: '35px', height: '35px', borderRadius: '100%', objectFit: 'cover' }}></img>
            <img src="/jisho.png" style={{ width: '35px', height: '35px', borderRadius: '100%', objectFit: 'cover' }}></img>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', position: 'absolute', marginTop: '200px', justifyContent: 'space-around', width: '100vw' }}>
        <div style={{ width: '300px', marginLeft: '-30px', marginTop: '-55px' }}>
          <video autoPlay muted loop playsInline style={{ width: '250px', height: 'auto', borderRadius: '50%' }}>
            <source src="/hello.mp4" type="video/mp4" />
          </video>
        </div>
        <div style={{ color: 'white', width: '470px', marginLeft: '20px' }}>
          <div style={{ fontSize: '20px' }}><strong>Explore</strong></div>
          <Link href="/auth" underline="none" sx={{ color: 'white' }}>Categories</Link>
          <br></br>
          <Link href="/lich_chieu" underline="none" sx={{ color: 'white' }}>Genres</Link>
          <br></br>
          <Link href="#" underline="none" sx={{ color: 'white' }}>Levels</Link>
          <br></br>
          <Link href="/introduce" underline="none" sx={{ color: 'white' }}>About</Link>
          <br></br>
        </div>
        <div style={{ width: '300px', color: 'white' }}>
          <div style={{ fontSize: '20px', marginBottom: '15px' }}><strong>Contact</strong></div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Link style={{ color: 'white', cursor: 'pointer' }} href='https://x.com/Reuters'><TwitterIcon></TwitterIcon></Link>
            <Link style={{ color: 'white', cursor: 'pointer' }} href='https://www.facebook.com/profile.php?id=100032541549443&locale=vi_VN'><FacebookIcon></FacebookIcon></Link>
            <Link style={{ color: 'white', cursor: 'pointer' }} href='https://www.instagram.com/stories/highlights/18060386815694422/'><InstagramIcon></InstagramIcon></Link>
            <Link style={{ color: 'white', cursor: 'pointer' }} href='https://www.tiktok.com/@fptsoftwareacademy'><img src='/tiktok.png' style={{ width: '23px', objectFit: 'cover', marginTop: '1px' }}></img></Link>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
            <PhoneIcon></PhoneIcon>
            <div>0364501244</div>
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <EmailIcon></EmailIcon>
            <div>22026534@vnu.edu.vn</div>
          </div>
        </div>
      </div>
    </div>
  );
}
