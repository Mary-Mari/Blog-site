import React from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import { Tag } from 'react-bootstrap-icons';

const TagsBlock = ({ items, isLoading = true }) => {
  return (
    <Card style={{ marginTop: '20px' }}>
      <Card.Header>Тэги</Card.Header>
      <ListGroup variant="flush">
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          <ListGroup.Item
            key={i}
            as="a"
            href={`/tags/${name}`}
            style={{ textDecoration: 'none', color: 'black' }}
            className="d-flex align-items-center"
          >
            {isLoading ? (
              <>
                <Spinner
                  animation="border"
                  role="status"
                  style={{ width: '20px', height: '20px', marginRight: '10px' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                <div
                  className="placeholder-wave"
                  style={{ width: '100px', height: '15px', backgroundColor: '#e9ecef' }}
                ></div>
              </>
            ) : (
              <>
                <Tag style={{ marginRight: '10px' }} />
                {name}
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TagsBlock;
