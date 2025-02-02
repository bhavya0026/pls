import React from 'react';
import ProductList from './ProductList';
import img1 from './img9.png';
import myImage from './img6.png';
//import {img} from 'react-image'

const HomePage = () => {
  const styles = {
    homeContainer: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      padding: '20px',
      
    },
    heroSection: {
      position: 'relative',
      width: '100%',
      height: '40vh', // Adjust the height as needed
      // backgroundImage: img1, // Replace with your image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '0 10%', // Moves content to the left
      color: 'white',
      textAlign: 'left',
    },
    content: {
      maxWidth: '500px', // Restrict width for better readability
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
      padding: '11px 24px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
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
  };

  return (
    <div style={styles.homeContainer}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
      <div style={styles.content}>
        <h1 style={styles.title}>Where Your Dreams Become Tangible Treasures</h1>
        <p style={styles.subtitle}>Crafting uniqueness in every package</p>
        <button style={styles.button}>Learn More</button>
      </div>
    </section>

      {/* Services Section */}
      <section style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>Featured Product</h2>

        {/* Product List (Service Section) */}
        <ProductList />
      </section>

      

      <section style={styles.servicesSection}>
      <h2 style={styles.sectionTitle}>Easy steps to your perfect gifts</h2>
      <img src={img1} alt="Description of image" />


      <h2 style={styles.sectionTitle}>Ready to create your kwn Gifts?</h2>
      <h4 style={styles.subtitle}>No cods, prepaid orders only</h4>
      <p style={{textAlign:'center', padding:'10px', justifyContent:'left' }}>Join happy customers who<br /> truned their derams into reality  <button style={styles.button}>Get Started</button> </p>
      <img src={myImage}  alt="Description of image" />

      </ section>
      
      {/*video section*/ }
      <div style={{ textAlign: 'center', padding: '50px' }}>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="YouTube Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default HomePage;
