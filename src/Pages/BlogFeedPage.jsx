import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/BlogFeedPage.css";

function BlogFeedPage() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Первый пост",
      description: "Краткое содержание первого поста...",
      date: "01.09.2024",
      likes: 24,
      comments: 5,
      imageUrl: "https://via.placeholder.com/600x400",
    },
    // Начальные данные
  ]);

  // const addPost = (newPost) => {
  //   setBlogPosts([...blogPosts, newPost]);
  // };

  return (
    <div className="blog-feed-page">
      <Container>
        <Row className="scrollable-row">
          {blogPosts.map((post) => (
            <Col md={12} key={post.id} className="mb-0">
              <Card className="blog-card clickable d-flex flex-row align-items-center">
                <Card.Body className="blog-card-body">
                  <Card.Title className="blog-card-title">
                    {post.title}
                  </Card.Title>
                  <Card.Text className="blog-card-text">
                    {post.description}
                  </Card.Text>
                  <div className="blog-card-info">
                    <span className="blog-card-date">🗓 {post.date}</span>
                    <span className="blog-card-likes">👍 {post.likes}</span>
                    <span className="blog-card-comments">
                      💬 {post.comments}
                    </span>
                  </div>
                </Card.Body>
                {post.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={post.imageUrl}
                    className="blog-card-img"
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default BlogFeedPage;
