import styled from "styled-components";
import Welcome from "../components/home/Welcome";
import HeaderMain from "../components/HeaderMain";
import Contents from "../components/home/Contents";

const Home = () => {
  return (
    <>
      <HeaderMain />
      <HomeWrapper>
        <Welcome />
        <Contents />
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
