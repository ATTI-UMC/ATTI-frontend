import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const Recommend = () => {
  return (
    <RecommendContainer>
      <SectionTitle title={"아띠가 추천하는 오늘의 아띠 토크"} />
      <RecommendWrapper>
        <Image />
        <TextWrapper>
          <Title>ENFP의 아띠토크</Title>
          <Description>첫사랑 고민 들어드립니다</Description>
        </TextWrapper>
      </RecommendWrapper>
    </RecommendContainer>
  );
};

export default Recommend;

const RecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecommendWrapper = styled.div`
  display: flex;
`;

const Image = styled.img``;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  border-bottom: 1px solid white;
`;

const Description = styled.div`
  color: white;
`;
