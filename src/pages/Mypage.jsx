import styled from "styled-components";
import InfoCard from "../components/mypage/InfoCard";
import MypageContainer from "../components/mypage/MypageContainer";
import Header from "../components/mypage/Header";

const Mypage = () => {
  const infoList = ["INTP", "닉네임", "20", "홍익대 서울캠", "22", "재학생"];

  return (
    <Container>
      <Header title={"마이페이지"} />
      <Wrapper>
        <InfoCard info={infoList} />
        <MypageContainer />
      </Wrapper>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 0 10px;
`;
