import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "./AddPost.module.scss";

export const AddPost = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const navigate = useNavigate();

  const onChange = useCallback((value) => {
    setValue(value);
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "quote",
        "unordered-list",
        "ordered-list",
        "|",
        "link",
        "image",
        "|",
        "preview",
        "side-by-side",
        "fullscreen",
        "|",
        "guide",
      ],
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClose = () => {
    setShowPreview(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = () => {
    const newPost = {
      title,
      content: value,
      tags: tags.split(",").map(tag => tag.trim()), // Преобразование тэгов в массив
      coverImage: coverImagePreview,
    };

    // В реальном приложении здесь будет вызов API для сохранения поста

    navigate("/post", { state: { newPost } }); // Передача данных нового поста
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={12} className="mb-4">
          <Button
            variant="contained"
            size="lg"
            className={styles.uploadBtn}
            onClick={handlePreview}
          >
            Показать превью
          </Button>
        </Col>
        <Col md={12} className="mb-4">
          <Form.Group>
            <Form.Label>Загрузить обложку</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {coverImagePreview && (
              <div
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  height: "auto",
                  overflow: "hidden",
                  border: "2px solid #ccc",
                  marginTop: "10px",
                }}
              >
                <img
                  src={coverImagePreview}
                  alt="Обложка"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </Form.Group>
        </Col>

        <Col md={12} className="mb-4">
          <Form.Control
            className={`${styles.inputField}`}
            type="text"
            placeholder="Заголовок статьи..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col md={12} className="mb-4">
          <Form.Control
            className={`${styles.inputField}`}
            type="text"
            placeholder="Тэги"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </Col>
        <Col md={12} className="mb-4">
          <SimpleMDE
            className={styles.editor}
            value={value}
            onChange={onChange}
            options={options}
          />
        </Col>
        <Col md={12} className="d-flex justify-content-between">
          <Button size="lg" variant="contained" className={styles.uploadBtn} onClick={handlePublish}>
            Опубликовать
          </Button>
          <Button size="lg" variant="secondary" className={styles.cancelBtn}>
            Отмена
          </Button>
        </Col>
      </Row>

      {/* Модальное окно для предварительного просмотра */}
      <Modal show={showPreview} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Предварительный просмотр</Modal.Title>
          <Button
            variant="link"
            onClick={handleClose}
            style={{ float: "right", color: "#2a2c2c" }}
          >
            <X size={30} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          {coverImagePreview && (
            <div
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                maxHeight: "400px",
                overflow: "hidden",
                border: "2px solid #ccc",
                marginBottom: "20px",
              }}
            >
              <img
                src={coverImagePreview}
                alt="Обложка"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          <h2>{title}</h2>
          <p>{tags}</p>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            onClick={handleClose}
            className={styles.uploadBtn}
          >
            Подтвердить
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            className={styles.cancelBtn}
          >
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddPost;
