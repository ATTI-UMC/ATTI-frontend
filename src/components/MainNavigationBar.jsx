import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function MainNavigationBar() {
  const location = useLocation();
  const checkActive = (path) => location.pathname.includes(path);

  return (
    <NavBar>
      <NavItem
        to="/home"
        isActive={checkActive("/") && location.pathname === "/"}
      >
        홈
      </NavItem>
      <NavItem to="/report" isActive={checkActive("/report")}>
        분석
      </NavItem>
      <NavItem to="/group" isActive={checkActive("/group")}>
        그룹
      </NavItem>
      <NavItem to="/match" isActive={checkActive("/match")}>
        매치
      </NavItem>
      <NavItem to="/mypage" isActive={checkActive("/mypage")}>
        마이페이지
      </NavItem>
    </NavBar>
  );
}

export default MainNavigationBar;

const NavBar = styled.nav`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #dcdcdc;
  box-sizing: border-box;
`;

const NavItem = styled(({ isActive, ...props }) => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-decoration: none;
  font-size: 10px;
  color: ${({ isActive }) => (isActive ? "blue" : "black")};
`;
