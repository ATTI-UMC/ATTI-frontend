import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Attitalk = () => {
  return (
    <AttitalkContainer>
      <Outlet />
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
