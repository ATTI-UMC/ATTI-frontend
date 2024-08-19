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
      <Date></Date>
    </Container>
  );
};

export default TalkPreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ImageWrapper = styled.div`
  width: 39px;
  height: 44px;
  border: 1px solid #b8e581;
  border-radius: 5px;
`;

const Image = styled.img``;

const InfoWrapper = styled.div``;

const Nickname = styled.div`
  font-weight: 400;
  font-size: 14px;
`;

const Mbti = styled.div`
  color: rgba(15, 189, 136, 1);
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatTitle = styled.div`
  margin-bottom: 10px;
`;

const Preview = styled.div`
  font-size: 12px;
  color: #1c1b1f;
`;
const Date = styled.div`
  justify-self: flex-end;
  font-weight: 300;
  font-size: 8px;
  color: #5a5a5a;
`;
