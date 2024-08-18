import styled from "styled-components";
import Recommend from "../../components/attitalk/main/Recommend";
import Mytalk from "../../components/attitalk/main/Mytalk";
import Header from "../../components/attitalk/main/Header";
import MainHeader from "../../components/MainHeader";

const Attitalk = () => {
  return (
    <AttitalkContainer>
      <MainHeader />
      <Header />
      <Recommend />
      <Mytalk />
      <h1>navigation bar</h1>
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
