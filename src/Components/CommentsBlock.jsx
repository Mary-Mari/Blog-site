import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const CommentsBlock = ({ items, isLoading, onDeleteComment }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
      
      <ListGroup>
        {items.map((comment) => (
          <ListGroupItem key={comment.id}>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <strong>{comment.createdAt}</strong>
                <p>{comment.text}</p>
              </div>
              <Button variant="danger" size="sm" onClick={() => onDeleteComment(comment.id)}>
                Удалить
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentsBlock;
