import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <>
      {/* Top Strip */}
      <div style={styles.topStrip}>
        <p style={styles.topStripText}>It will take 8-10 days to process new orders!</p>
      </div>

      {/* Main Header */}
      <header style={styles.header}>
        {/* Left: Logo */}
        <div style={styles.logoContainer}>
          <img
            src="https://via.placeholder.com/150x50?text=Logo"
            alt="Logo"
            style={styles.logo}
          />
        </div>

        {/* Center: Search Bar */}
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
        </div>

        {/* Right: Icons */}
        <div style={styles.iconsContainer}>
          <FaShoppingCart style={styles.icon} title="Cart" />
          <FaUser style={styles.icon} title="Account" onClick={handleLoginClick} />
        </div>
      </header>
    </>
  );
};

const styles = {
  topStrip: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 20px',
    textAlign: 'center',
  },
  topStripText: {
    margin: 0,
    fontSize: '14px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between', 
    flexWrap: 'wrap', 
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    flex: '0 0 auto',
  },
  logo: {
    height: '50px',
  },
  searchContainer: {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  searchInput: {
    width: '100%',
    maxWidth: '500px',
    padding: '8px 12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  iconsContainer: {
    flex: '0 0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out',
  },
};

// Hover effects
styles.icon[':hover'] = { transform: 'scale(1.1)' };

export default Header;
