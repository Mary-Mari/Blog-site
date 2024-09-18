import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Post from "../Post";
import TagsBlock from "../TagsBlock";
import CommentsBlock from "../CommentsBlock";

const PostPage = () => {
  const location = useLocation();
  const newPost = location.state?.newPost;

  const staticPosts = [
    {
      id: 1,
      title: "Sample Post Title 1",
      imageUrl: "https://via.placeholder.com/800x400",
      user: {
        avatarUrl: "https://via.placeholder.com/50",
        fullName: "John Doe",
      },
      createdAt: "12 июня 2022 г.",
      viewsCount: 150,
      commentsCount: 3,
      tags: ["react", "fun", "typescript"],
    },
    {
      id: 2,
      title: "Sample Post Title 2",
      imageUrl: "https://via.placeholder.com/800x400",
      user: {
        avatarUrl: "https://via.placeholder.com/50",
        fullName: "Jane Doe",
      },
      createdAt: "13 июня 2022 г.",
      viewsCount: 200,
      commentsCount: 5,
      tags: ["javascript", "web", "css"],
    },
    // Добавьте другие статичные посты здесь
  ];

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col md={8}>
          {newPost ? (
            <Post
              id={1} // Можно генерировать уникальный id для нового поста
              title={newPost.title}
              imageUrl={newPost.coverImage || "https://via.placeholder.com/800x400"}
              user={{
                avatarUrl: "https://via.placeholder.com/50",
                fullName: "Anonymous", // Пример пользователя
              }}
              createdAt={new Date().toLocaleDateString()} // Пример даты создания
              viewsCount={0} // Пример количества просмотров
              commentsCount={0} // Пример количества комментариев
              tags={newPost.tags}
            />
          ) : (
            staticPosts.map(post => (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                imageUrl={post.imageUrl}
                user={post.user}
                createdAt={post.createdAt}
                viewsCount={post.viewsCount}
                commentsCount={post.commentsCount}
                tags={post.tags}
              />
            ))
          )}
        </Col>
        <Col md={4}>
          <TagsBlock
            items={["react", "typescript", "заметки"]}
            isLoading={false}
          />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://via.placeholder.com/30",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://via.placeholder.com/30",
                },
                text: "When displaying three lines or more...",
              },
            ]}
            isLoading={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;
