import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img4 from "./img4.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);

    // TODO: Add authentication logic here
    // If login is successful, navigate to home
    navigate("/");
  };

  return (
    <div style={styles.container}>
      {/* Side Image */}
      <div style={styles.imageContainer}>
        <img src={img4} alt="Login Visual" style={styles.image} />
      </div>

      {/* Login Form */}
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Customize Your Memories with Us</h2>
        <h5 style={styles.subtitle}>Welcome back! Please login to your account.</h5>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Sign In</button>
        </form>
      </div>
    </div>
  );
};

// Responsive Styles
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexWrap: "wrap", // ✅ Makes it mobile-friendly
    backgroundColor: "#f9f9f9",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    minWidth: "300px",
    padding: "20px",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    objectFit: "cover",
  },
  formContainer: {
    flex: 1,
    maxWidth: "400px",
    padding: "40px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#666",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Login;
