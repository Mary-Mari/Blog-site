import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Удаляем токен
    
    navigate("/");
  };

  const isAuthenticated = !!localStorage.getItem("token"); // Проверяем наличие токена
  

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ fontSize: "24px", fontWeight: "bold", color: "#a1c3da" }}
        >
          Mindscape
        </Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center">
          {isAuthenticated ? (
            <>
              {/* <span style={{ marginRight: "16px", color: "#a1c3da", fontSize: "18px" }}>
                Привет, {username}!
              </span> */}
              <Button
                as={Link}
                to="/add-post"
                variant="contained"
                style={{
                  backgroundColor: "#a1c3da",
                  color: "#ffff",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  marginLeft: "16px",
                }}
              >
                Добавить блог
              </Button>
              <Button
                onClick={handleLogout}
                variant="outlined"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#a1c3da",
                  color: "#a1c3da",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  marginLeft: "16px",
                }}
              >
                Выйти
              </Button>
            </>
          ) : (
            <>
              <Button
                as={Link}
                to="/login"
                variant="outlined"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#a1c3da",
                  color: "#a1c3da",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  marginLeft: "16px",
                }}
              >
                Войти
              </Button>
              <Button
                as={Link}
                to="/register"
                variant="contained"
                style={{
                  backgroundColor: "#a1c3da",
                  color: "#ffff",
                  borderRadius: "50px",
                  padding: "10px 20px",
                  marginLeft: "10px",
                }}
              >
                Создать профиль
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
