import React, { Component } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./Home.css";
import notebookImage from "../../assets/flower.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Container className="d-flex flex-column justify-content-center h-100">
          <Row className="align-items-center justify-content-center text-center text-md-left">
            <Col md={6} className="mt-1">
              <h1 className="heading">Get inspired & create stories</h1>
              <p className="subheading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                placeat perspiciatis necessitatibus voluptatibus! Ea fugiat
                vitae, odit sit nobis vero distinctio doloribus asperiores
                dolorem doloremque. Pariatur facilis minima maxime cupiditate!
              </p>
              <Link to="/register">
                <Button
                  variant="primary"
                  className="cta-button"
                  style={{
                    backgroundColor: "#a1c3da",
                    borderColor: "#a1c3da",
                    color: "#ffffff",
                  }}
                >
                  Начать
                </Button>
              </Link>
            </Col>

            <Col md={6}>
              <img
                src={notebookImage}
                alt="Notebook"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
