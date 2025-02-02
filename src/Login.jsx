import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img4 from './img4.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  const navigate = useNavigate(); 

  const home = () => {
    navigate('/'); 
  };

  return (
    <div style={styles.container}>
      {/* Side image container */}
      <div style={styles.imageContainer}>
        <img
          src= {img4} // Replace with your actual image URL
          alt="Side Visual"
          style={styles.image}
        />
      </div>

      {/* Login form container */}
      <div style={styles.formContainer}>
       
       <h2 style={styles.title}>Customize your memories with us</h2>
      <h5>Welcome back! Please login to your account.</h5>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Email"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button} onClick={home}>
           Sign IN
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = { 
  container: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  },
  formContainer: {
    flex: 1,
    maxWidth: '400px',
    padding: '40px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
    justifyContent:'left'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '15px'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    display: 'block'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Login;
