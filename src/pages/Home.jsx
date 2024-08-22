import styled from "styled-components";
import Welcome from "../components/home/Welcome";
import HeaderMain from "../components/HeaderMain";

const Home = () => {
  return (
    <>
      <HeaderMain />
      <HomeWrapper>
        <Welcome />
      </HomeWrapper>
    </>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
