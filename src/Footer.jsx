import React from 'react';
import { AiFillFacebook, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Home</a>
          <a href="/experience" style={styles.link}>Experience</a>
          <a href="/news" style={styles.link}>News</a>
          <a href="/about" style={styles.link}>About Us</a>
          <a href="/jobs" style={styles.link}>Jobs</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </nav>

        <div style={styles.iconsContainer}>
          <AiFillFacebook style={styles.icon} title="Facebook" />
          <AiFillTwitterCircle style={styles.icon} title="Twitter" />
          <AiFillYoutube style={styles.icon} title="YouTube" />
        </div>

        <p style={styles.text}>© Copyright 2024 - Lift Media</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#c29872',
    color: 'white',
    padding: '20px 0',
    marginTop: '40px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    margin: '0 0 10px',
    fontSize: '14px',
  },
  nav: {
    display: 'flex',
    flexWrap: 'wrap',  
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
  },
  iconsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    padding: '15px',
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  },
};

// Hover effects
styles.link[':hover'] = { color: '#ffebcc' };
styles.icon[':hover'] = { transform: 'scale(1.2)' };

export default Footer;
