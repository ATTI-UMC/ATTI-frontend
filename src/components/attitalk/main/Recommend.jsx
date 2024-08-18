import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import header_logo from "../../../assets/images/header_logo.png";

const Recommend = () => {
  const dummy = ["#재미잇어요", "#강추", "#놀러오세요"];

  return (
    <RecommendContainer>
      <SectionTitle title={"아띠가 추천하는 오늘의 아띠 토크"} />
      <RecommendWrapper>
        <ImageWrapper>
          <Image src={header_logo} />
        </ImageWrapper>
        <TextWrapper>
          <Title>ENFP의 아띠토크</Title>
          <Description>첫사랑 고민 들어드립니다</Description>
          <HashTagContainer>
            {dummy.map((elm) => (
              <HashTag>{elm}</HashTag>
            ))}
          </HashTagContainer>
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
  width: 100%;
  background-color: #7fe089;
  border-radius: 5px;
  padding: 10px;
  gap: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Image = styled.img``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-color: white;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  border-bottom: 1px solid white;
  padding: 5px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  color: white;
  margin-bottom: 10px;
`;

const HashTagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const HashTag = styled.div`
  font-size: 10px;
  font-weight: 300;
  border-radius: 5px;
  background-color: white;
  padding: 5px;
`;
