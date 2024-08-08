import styled from "styled-components";
import { Outlet } from "react-router-dom";
import TalkHeader from "../../components/attitalk/TalkHeader";

const Atti = () => {
  return (
    <AttiContainer>
      <TalkHeader />
      <Outlet />
    </AttiContainer>
  );
};

export default Atti;

const AttiContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
