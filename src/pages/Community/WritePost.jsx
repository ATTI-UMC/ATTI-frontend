import React, { useState } from "react";
import styled from "styled-components";
import NewPostHeader from "../../components/community/NewPostHeader";
import image from "../../assets/images/default_picture.png";
import { useLocation, useNavigate } from "react-router-dom";
import { createPost } from "../../api/fetch";

const WritePost = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { mbti, category } = location.state;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    const postData = {
      boardType: category,
      userId: 123,
      nickname: "nickname",
      title,
      content,
      images,
    };

    const url = await createPost(postData);
    if (url !== undefined) {
      nav(url);
    } else {
      console.log("서버오류");
    }
  };

  return (
    <>
      <NewPostHeader title={"글쓰기"} onSubmit={handleSubmit} />
      <Container>
        <Form>
          <Input
            type="text"
            placeholder="제목"
            value={title}
            onChange={handleTitleChange}
          />
          <Textarea
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={handleContentChange}
          />
          <Footer>
            <UploadLabel>
              <Postimage src={image} />
              <UploadInput type="file" multiple onChange={handleImageUpload} />
            </UploadLabel>
            <RulesButton>게시판 이용 규칙 보기 &gt;</RulesButton>
          </Footer>
          <ImagePreviewContainer>
            {images.map((image, index) => (
              <ImagePreview key={index}>
                <RemoveImageButton onClick={() => handleRemoveImage(index)}>
                  X
                </RemoveImageButton>
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                />
              </ImagePreview>
            ))}
          </ImagePreviewContainer>
        </Form>
      </Container>
    </>
  );
};

export default WritePost;

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const UploadLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  font-size: 24px;
  color: #ccc;
`;

const Postimage = styled.img`
  width: 30px;
  height: 30px;
  color: #ccc;
`;

const UploadInput = styled.input`
  display: none;
`;

const RulesButton = styled.div`
  background: none;
  border: none;
  color: gray;
  cursor: pointer;
  font-size: 14px;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RemoveImageButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 20px;
  height: 20px;
  font-size: 14px;
`;
