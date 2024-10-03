import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faComment,
  faTag,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Components/Post/PostPage.css";

const Post = ({
  id,
  title,
  imageUrl,
  user,
  createdAt,
  viewsCount,
  commentsCount,
  tags,
  currentUserId, // Добавляем текущего пользователя
  handleDeletePost, // Передаем функцию удаления
  children, // для контента поста
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  const canEdit = currentUserId === user.id; // Проверка, является ли текущий пользователь автором поста

  return (
    <Card
      style={{ marginBottom: "20px", position: "relative", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        style={{ height: "400px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <small className="text-muted">
            Posted by {user.fullName} on {createdAt}
          </small>
          <div>
            <FontAwesomeIcon icon={faEye} style={{ marginRight: 5 }} />{" "}
            {viewsCount} |
            <FontAwesomeIcon
              icon={faComment}
              style={{ marginLeft: 10, marginRight: 5 }}
            />{" "}
            {commentsCount}
          </div>
          <div>
            <FontAwesomeIcon icon={faTag} style={{ marginRight: 5 }} />{" "}
            {tags.join(", ")}
          </div>
        </Card.Text>
        {canEdit && ( // Проверка на возможность редактирования и удаления
          <div className="post-actions">
            <FontAwesomeIcon icon={faEdit} className="fa-edit" title="Edit" />
            <FontAwesomeIcon
              icon={faTrash}
              className="fa-trash"
              title="Delete"
              onClick={(e) => {
                e.stopPropagation(); // Остановите событие клика, чтобы не вызывался handleClick
                handleDeletePost(id); // Вызов функции удаления
              }}
            />
          </div>
        )}
        {children}
      </Card.Body>
    </Card>
  );
};

export default Post;
