import React from 'react';
import ProductList from './ProductList';
import img1 from './img9.png';
import myImage from './img6.png';
import hero from './hero.jpg';

const HomePage = () => {
  const styles = {
    homeContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      overflowX: 'hidden', 
    },
    heroSection: {
      position: 'relative',
      height: '60vh',
      backgroundImage: `url(${hero})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: '10%',
      color: 'white',
    },
    overlay: {
      maxWidth: '500px',
      color: 'white',
      padding: '20px',
    },
    title: {
      fontSize: '40px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    subtitle: {
      fontSize: '18px',
      marginBottom: '20px',
    },
    button: {
      background: '#c29872',
      color: 'white',
      padding: '12px 24px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: '0.3s',
    },
    buttonHover: {
      background: '#b28563',
    },
    servicesSection: {
      textAlign: 'center',
      padding: '50px 20px',
      background: 'white',
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    sectionDescription: {
      fontSize: '18px',
      color: '#666',
      marginBottom: '20px',
    },
    image: {
      maxWidth: '100%', 
      height: 'auto',
    },
    videoContainer: {
      textAlign: 'center',
      padding: '50px 20px',
    },
    iframe: {
      width: '100%',
      height: '400px',
      maxWidth: '800px',
      border: 'none',
    },
    buttonContainer: {
      textAlign: 'center',
      marginTop: '10px',
    },
    giftContainer: {
      textAlign: 'center',
      padding: '20px',
    },
  };

  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Where Your Dreams Become Tangible Treasures</h1>
          <p style={styles.subtitle}>Crafting uniqueness in every package</p>
          <button 
            style={styles.button}
            onMouseEnter={(e) => e.target.style.background = styles.buttonHover.background}
            onMouseLeave={(e) => e.target.style.background = styles.button.background}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Featured Product</h2>
        <ProductList />
      </section>

      {/* Easy Steps Section */}
      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Easy Steps to Your Perfect Gifts</h2>
        <img src={img1} alt="Steps to order" style={styles.image} />
      </section>

      {/* Ready to Create Section */}
      <section style={styles.giftContainer}>
        <h2 style={styles.sectionTitle}>Ready to Create Your Own Gifts?</h2>
        <h4 style={styles.subtitle}>No codes, prepaid orders only</h4>
        <p>Join happy customers who turned their dreams into reality</p>
        <div style={styles.buttonContainer}>
          <button 
            style={styles.button}
            onMouseEnter={(e) => e.target.style.background = styles.buttonHover.background}
            onMouseLeave={(e) => e.target.style.background = styles.button.background}
          >
            Get Started
          </button>
        </div>
        <img src={myImage} alt="Gift creation process" style={styles.image} />
      </section>

      {/* Video Section */}
      <div style={styles.videoContainer}>
        <iframe
          style={styles.iframe}
          src="https://www.youtube.com/embed/UXkKNrU6-9A" 
          title="YouTube Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HomePage;
