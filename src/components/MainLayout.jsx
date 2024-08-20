import MainNavigationBar from "./MainNavigationBar";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 425px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: white;
`;

const Content = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

function MainLayout({ children }) {
  return (
    <LayoutContainer>
      <Content>{children}</Content>
      <MainNavigationBar />
    </LayoutContainer>
  );
}

export default MainLayout;
