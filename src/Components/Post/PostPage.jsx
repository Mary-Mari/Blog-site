import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../../Components/Post";
import TagsBlock from "../../Components/TagsBlock";
import CommentsBlock from "../CommentsBlock";

const PostPage = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <Col md={8}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              imageUrl={post.coverImage}
              user={post.user}
              createdAt={post.createdAt}
              viewsCount={post.viewsCount}
              commentsCount={post.comments?.length || 0}
              tags={post.tags}
              isEditable={false}
            />
          ))}
        </Col>
        <Col md={4}>
          <TagsBlock
            items={["react", "typescript", "заметки"]}
            isLoading={false}
          />
          <CommentsBlock items={[]} isLoading={false} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostPage;
