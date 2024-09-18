import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // В данном примере авторизация не реализована, просто сохраняем фиктивные данные в localStorage
    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/post");
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
          Создать профиль
        </h2>

        {/* Круг для фото профиля */}
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            margin: "20px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaUser size={50} color="#6e99c3" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ color: "#6e99c3", fontSize: "18px" }}
            >
              Имя
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ width: "100%", height: "40px", borderRadius: "50px" }}
            />
          </div>
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
              Зарегистрироваться
            </Button>
          </div>
        </form>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/login"
            style={{ color: "#6e99c3", textDecoration: "none" }}
          >
            Есть Аккаунт? Авторизоваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
