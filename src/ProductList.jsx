import React from 'react';
import img1 from './f1.webp';
import img2 from './f2.webp';
import img3 from './f3.jpg';
import img4 from './f4.jpg';
import img5 from './f5.jpg';
import img6 from './f6.jpg';
import img7 from './f7.webp';
import img8 from './f8.jpg';
import { useNavigate } from 'react-router-dom'; 
// import Product from './Product';

const ProductList = () => {
  const navigate = useNavigate(); 

  const open = () => {
    navigate('./Product');
  };
  const products = [
    { id: 1, name: "3D Miniature Frame", price: "RS 2,850.00", image: img1 },
    { id: 2, name: "Music Plaque", price: "RS 550.00", image: img2, sale: true },
    { id: 3, name: "Photo Key Chain", price: "RS 249.00", image: img3 },
    { id: 4, name: "Wallet Card", price: "RS 249.00", image: img4 },
    { id: 5, name: "Music Keychain", price: "RS 249.00", image: img5 },
    { id: 6, name: "Barcode Keychain", price: "RS 159.00", image: img6, sale: true },
    { id: 7, name: "Love Plaque", price: "RS 550.00", image: img7, sale: true },
    { id: 8, name: "DIY Keychain Kit", price: "RS 450.00", image: img8, sale: false },
  ];

  const styles = {
    productSection: {
      padding: '40px 10%',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      marginBottom: '20px',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      justifyContent: 'center',
    },
    productCard: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '15px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    productName: {
      fontSize: '18px',
      margin: '10px 0',
    },
    price: {
      color: '#c29872',
      fontWeight: 'bold',
    },
    button: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
    },
    buttonImage: {
      width: '40px', 
      height: '40px',
    },
  };
  

  return (
    <section style={styles.productSection}>
      <div style={styles.productGrid}>
        {products.map((product) => (
             <button style={styles.button} onClick={open}>
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.price}>{product.price}</p>
         
             
           
          </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
