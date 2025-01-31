import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Получаем данные пользователей из localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      
      localStorage.setItem('token', 'dummy-token'); 
      navigate("/post");
    } else {
      setErrorMessage("Неверные данные");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          width: "100%",
          padding: "20px",
          backgroundColor: "#e5edf4",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#6e99c3", textAlign: "center" }}>
          {errorMessage && <p style={{ color: "red", fontSize: '16px'}}>{errorMessage}</p>}
          Войти в аккаунт
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ color: "#6e99c3", fontSize: "18px" }}
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", height: "40px", borderRadius: "50px" }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label"
              style={{ color: "#6e99c3", fontSize: "18px" }}
            >
              Пароль
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", height: "40px", borderRadius: "50px" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              type="submit"
              variant="primary"
              style={{
                backgroundColor: "#8ab2d0",
                color: "#f8f6ed",
                borderRadius: "50px",
                padding: "10px 20px",
                width: "100%",
                maxWidth: "300px",
                borderColor: "#a1c3da",
                marginTop: "16px",
              }}
            >
              Войти
            </Button>
          </div>
        </form>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/register"
            style={{ color: "#6e99c3", textDecoration: "none" }}
          >
            Нет аккаунта? Зарегистрироватся
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
