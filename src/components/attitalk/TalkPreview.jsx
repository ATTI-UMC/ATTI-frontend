import styled from "styled-components";

const TalkPreview = () => {
  return (
    <Container>
      <ChatContainer>
        <ImageWrapper>
          <Image />
        </ImageWrapper>
        <InfoWrapper>
          <Nickname>닉네임</Nickname>
          <Mbti>MBTI</Mbti>
        </InfoWrapper>
        <ChatWrapper>
          <ChatTitle>제목</ChatTitle>
          <Preview>최근 대화 내용 미리보기</Preview>
        </ChatWrapper>
      </ChatContainer>
      <Date>2024/08/02</Date>
    </Container>
  );
};

export default TalkPreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 39px;
  height: 44px;
  border: 1px solid #b8e581;
  border-radius: 5px;
  margin-right: 15px;
`;

const Image = styled.img``;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  flex-grow: 2;
`;

const Nickname = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

const Mbti = styled.div`
  color: rgba(15, 189, 136, 1);
  font-size: 12px;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
`;

const ChatTitle = styled.div`
  margin-bottom: 7px;
`;

const Preview = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: #1c1b1f;
`;
const Date = styled.div`
  font-weight: 300;
  font-size: 8px;
  color: #5a5a5a;
  margin-left: auto;
  margin-top: 4px;
`;
