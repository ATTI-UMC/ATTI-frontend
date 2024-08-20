import styled from "styled-components";
import TalkHeader from "../../components/attitalk/TalkHeader";
import ImageInputField from "../../components/attitalk/new/ImageInputField";
import SettingField from "../../components/attitalk/new/SettingField";
import { useEffect, useState } from "react";
import Preview from "../../components/attitalk/new/Preview";

const Newchat = () => {
  const [name, setName] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleCompleteButton = () => {
    if (!isButtonDisabled) {
      console.log("api 통신하겠삼");
    }
  };

  let previewData = {
    title: "ENFP의 아띠토크",
    description: name,
    tagList: hashtags,
  };

  const isButtonDisabled = !name || hashtags.length === 0;

  return (
    <Container>
      <TalkHeader
        title={"새로 만들기"}
        disabled={isButtonDisabled}
        onComplete={handleCompleteButton}
      />
      <Wrapper>
        <ImageInputField />
        <SettingField
          title={"토크 이름 설정하기"}
          description={"아띠토크의 이름을 입력해 주세요."}
          limit={30}
          isHashtag={false}
          value={name}
          onChange={setName}
        />
        <SettingField
          title={"해시태그 설정하기"}
          description={"#해시태그로 아띠토크를 소개해보세요."}
          limit={3}
          isHashtag={true}
          value={hashtags}
          onChange={setHashtags}
          length={hashtags.length}
        />
        <Button onClick={handleClick} disabled={isButtonDisabled}>
          아띠토크 커버 미리보기
        </Button>
        <Preview
          objectList={previewData}
          show={showModal}
          onClose={handleClick}
        />
      </Wrapper>
    </Container>
  );
};

export default Newchat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#E7E885")};
  border-radius: 10px;
  border: none;
  color: black;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  margin: 20px 0 0 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
