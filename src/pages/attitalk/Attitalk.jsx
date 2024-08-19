import styled from "styled-components";
import Recommend from "../../components/attitalk/main/Recommend";
import Mytalk from "../../components/attitalk/main/Mytalk";
import Header from "../../components/attitalk/main/Header";
import MainHeader from "../../components/MainHeader";
import SectionTitle from "../../components/attitalk/main/SectionTitle";

const Attitalk = () => {
  const objectList = {
    title: "ENFP의 아띠토크",
    description: "첫사랑 고민 들어드립니다",
    tagList: ["재미잇어요", "강추", "놀러오세요"],
  };
  return (
    <AttitalkContainer>
      <MainHeader />
      <Header />
      <ContentWrapper>
        <SectionTitle title={"아띠가 추천하는 오늘의 아띠 토크"} />
        <Recommend objectList={objectList} />
        <SectionTitle title={"MY 토크"} />
        <MytalkWrapper>
          <Mytalk />
        </MytalkWrapper>
      </ContentWrapper>
    </AttitalkContainer>
  );
};

export default Attitalk;

const AttitalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

const ContentWrapper = styled.div`
  width: 90%;
`;

const Wrapper = styled.div`
  height: 40%;
`;

const MytalkWrapper = styled.div`
  max-height: 70%;
`;
