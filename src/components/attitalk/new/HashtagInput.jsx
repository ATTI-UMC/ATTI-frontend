import React, { useState } from "react";
import styled from "styled-components";

const HashtagInput = ({ placeholder, onChange, limit }) => {
  const [hashtags, setHashtags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      const trimmedValue = inputValue.trim(); // 앞뒤 공백 제거
      if (trimmedValue && hashtags.length < limit) {
        const newHashtags = [...hashtags, trimmedValue];
        setHashtags(newHashtags);
        setInputValue(""); // 해시태그 등록 후 inputValue 초기화
        onChange(newHashtags); // 해시태그 배열을 부모 컴포넌트에 전달
      }
    }
  };

  const removeHashtag = (indexToRemove) => {
    const newHashtags = hashtags.filter((_, index) => index !== indexToRemove);
    setHashtags(newHashtags);
    onChange(newHashtags); // 해시태그 배열을 부모 컴포넌트에 전달
  };

  return (
    <Container>
      <HashtagContainer>
        {hashtags.map((hashtag, index) => (
          <Hashtag key={index} onClick={() => removeHashtag(index)}>
            # {hashtag} &times;
          </Hashtag>
        ))}
      </HashtagContainer>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default HashtagInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HashtagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

const Hashtag = styled.div`
  background-color: #0fbd88;
  color: white;
  padding: 5px 10px;
  margin: 4px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 12px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 8px 4px;
  font-size: 12px;
  outline: none;
`;
