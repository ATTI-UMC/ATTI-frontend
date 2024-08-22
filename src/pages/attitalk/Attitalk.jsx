import styled from "styled-components";
import Recommend from "../../components/attitalk/main/Recommend";
import Mytalk from "../../components/attitalk/main/Mytalk";
import Header from "../../components/attitalk/main/Header";
import SectionTitle from "../../components/attitalk/main/SectionTitle";
import HeaderMain from "../../components/HeaderMain";

const Attitalk = () => {
  const objectList = {
    title: "ENFP의 아띠토크",
    description: "첫사랑 고민 들어드립니다",
    tagList: ["재미잇어요", "강추", "놀러오세요"],
  };
  return (
    <AttitalkContainer>
      <HeaderMain />
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
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
  margin-top: 60px;
`;
const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 남은 공간을 채우도록 설정 */
`;

const MytalkWrapper = styled.div`
  flex-grow: 1; /* 남은 공간을 채우도록 설정 */
  overflow-y: auto; /* 스크롤 설정 */
`;
