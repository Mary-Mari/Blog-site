import React, { useState } from "react";
import { ListGroup, Form, Button, Spinner } from "react-bootstrap";

const CommentsBlock = ({ items, onAddComment, isLoading }) => {
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() && onAddComment) {
      onAddComment(newComment.trim());
      setNewComment("");
    }
  };

  return (
    <div className="p-3 border rounded" style={{ position: 'relative', maxHeight: '400px', overflowY: 'auto', marginTop: '20px'}}>
      <h5>Комментарии</h5>
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <ListGroup>
          {items.map((comment, index) => (
            <ListGroup.Item key={index} className="d-flex align-items-start">
              <img
                src={comment.user.avatarUrl}
                alt={comment.user.fullName}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <div>
                <strong>{comment.user.fullName}</strong>
                <p>{comment.text}</p>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <Form onSubmit={handleAddComment} className="mt-3">
        <Form.Group controlId="newComment">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Напишите комментарий..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="contained"
          type="submit"
          className="mt-2"
          style={{
            backgroundColor: "#a1c3da",
            color: "#ffff",
            borderRadius: "50px",
            padding: "10px 20px",
            marginLeft: "10px",
            marginTop: "20px",
          }}
        >
          Добавить комментарий
        </Button>
      </Form>
    </div>
  );
};

export default CommentsBlock;