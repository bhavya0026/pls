import React from 'react';
import img1 from './f1.webp';
import img2 from './f2.webp';
import img3 from './f3.jpg';
import img4 from './f4.jpg';
import img5 from './f5.jpg';
import img6 from './f6.jpg';
import img7 from './f7.webp';
import img8 from './f8.jpg';

const ProductList = () => {
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
    container: {
      
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '50px',
      padding: '50px',
    },
    productCard: {
      border: '3px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    productImage: {
      width: '100%',
      borderRadius: '20px',
    },
    productName: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    productPrice: {
      fontSize: '16px',
      color: '#c29872',
      marginTop: '5px',
    },
    saleBadge: {
      position: 'absolute',
      top: '10px',
      left: '10px',
      backgroundColor: 'black',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '12px',
    },
    productWrapper: {
      position: 'relative',
    },
  };

  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.productCard}>
          <div style={styles.productWrapper}>
            {product.sale && <span style={styles.saleBadge}>Sale</span>}
            <img src={product.image} alt={product.name} style={styles.productImage} />
          </div>
          <h3 style={styles.productName}>{product.name}</h3>
          <p style={styles.productPrice}>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
