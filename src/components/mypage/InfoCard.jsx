import styled from "styled-components";
import flip from "../../assets/images/flip.png";

const InfoCard = () => {
  return (
    <Wrapper>
      <Container>
        <Image />
        <InfoContainer>
          <MbtiText>INTP인</MbtiText>
          <Nickname>아아아아띠님!</Nickname>
        </InfoContainer>
      </Container>
      <FlipContainer>
        <Flip src={flip} />
      </FlipContainer>
    </Wrapper>
  );
};

export default InfoCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid rgba(15, 189, 136, 1);
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  gap: 5px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Image = styled.img`
  background-color: rgba(217, 217, 217, 1);
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const MbtiText = styled.div`
  font-size: 14px;
`;

const Nickname = styled.div`
  font-size: 18px;
`;

const FlipContainer = styled.div`
  text-align: center;
`;

const Flip = styled.img`
  cursor: pointer;
`;
