import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Post from "../Components/Post";
import CommentsBlock from "../Components/CommentsBlock";
import {
  addComment,
  deleteComment,
  deletePost,
} from "../redux/slices/postsSlice";

const FullPost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      dispatch(
        addComment({
          postId: post.id,
          comment: {
            id: Date.now(),
            text: newComment,
            createdAt: new Date().toLocaleDateString(),
          },
        })
      );
      setNewComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment({ postId: post.id, commentId }));
  };

  const handleDeletePost = () => {
    dispatch(deletePost(post.id));
    navigate("/post");
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Post
            id={post.id}
            title={post.title}
            imageUrl={post.coverImage}
            user={post.user}
            createdAt={post.createdAt}
            viewsCount={post.viewsCount}
            commentsCount={post.comments ? post.comments.length : 0}
            tags={post.tags}
            isFullPost
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Post>

          {/* Кнопки для редактирования и удаления поста */}
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* <Button
              variant="warning"
              style={{ marginRight: "10px", borderRadius: "50px" }}
              onClick={() => navigate(`/edit-post/${post.id}`)}
            >
              Редактировать пост
            </Button> */}
            <Button
              variant="danger"
              style={{ borderRadius: "50px" }}
              onClick={handleDeletePost}
            >
              Удалить пост
            </Button>
          </div>

          {/* Комментарии */}
          <CommentsBlock
            items={post.comments || []}
            isLoading={false}
            //удаление коммента
            onDeleteComment={handleDeleteComment}
          />

          {/* Форма для добавления нового комментария */}
          <Form>
            <Form.Group>
              <Form.Label>Написать комментарий...</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="contained"
              onClick={handleAddComment}
              style={{
                backgroundColor: "#a1c3da",
                color: "#ffff",
                borderRadius: "50px",
                padding: "10px 20px",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Добавить комментарий
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FullPost;
