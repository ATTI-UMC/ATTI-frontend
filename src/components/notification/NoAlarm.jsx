import styled from "styled-components";
import img from "../../assets/images/INTJ.png";

const NoAlarm = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={img}></Image>
        <Text>아직은 대화할 친구가 없어요</Text>
        <Text>친구를 찾으러 가볼까요?</Text>
      </Wrapper>
    </Container>
  );
};

export default NoAlarm;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 211px;
  height: 317px;
`;
const Text = styled.div`
  color: #5a5a5a;
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 10px;
`;
