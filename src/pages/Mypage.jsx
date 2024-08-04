import styled from "styled-components";
import SignUpHeader from "../components/signup/SignUpHeader";
import InfoCard from "../components/mypage/InfoCard";
import MypageContainer from "../components/mypage/MypageContainer";

const Mypage = () => {
  const infoList = ["INTP", "닉네임", "20", "홍익대 서울캠", "22", "재학생"];

  return (
    <Container>
      <SignUpHeader />
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
  width: 90%;
  height: 100%;
  margin: 3rem;
`;

const Wrapper = styled.div`
  padding: 0 10px;
`;
