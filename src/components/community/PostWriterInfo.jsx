import styled from "styled-components";
import { images } from "../../utils/mbti-characters";

//mbti, nickname, time을 받아서 출력
const PostWriterInfo = ({ mbti, nickname, date }) => {
  return (
    <Container>
      <ChatContainer>
        <ImageWrapper>
          <Image src={images[mbti]} />
        </ImageWrapper>
        <InfoWrapper>
          <Nickname>{nickname}</Nickname>
          <Date>{date}</Date>
        </InfoWrapper>
      </ChatContainer>
    </Container>
  );
};

export default PostWriterInfo;

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
  width: 54px;
  height: 61px;
  border: 1px solid #b8e581;
  border-radius: 5px;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  flex-grow: 2;
`;

const Nickname = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

const Date = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #5a5a5a;
`;
