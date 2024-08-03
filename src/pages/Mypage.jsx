import styled from "styled-components";
import SignUpHeader from "../components/signup/SignUpHeader";
import InfoCard from "../components/mypage/InfoCard";
import MypageContainer from "../components/mypage/MypageContainer";

const Mypage = () => {
  return (
    <Container>
      <SignUpHeader />
      <Wrapper>
        <InfoCard />
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
  padding: 20px 10px;
`;
