import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import home from "../assets/images/nav_home.png";
import chat from "../assets/images/nav_chat.png";
import notice from "../assets/images/nav_notice.png";
import attitalk from "../assets/images/nav_attitalk.png";

function MainNavigationBar() {
  const location = useLocation();
  const checkActive = (path) => location.pathname.includes(path);

  return (
    <NavBar>
      <NavItem
        to="/home"
        isActive={checkActive("/") && location.pathname === "/"}
      >
        <Icon src={home} />
        <Text>홈</Text>
      </NavItem>
      <NavItem to="/chatmain" isActive={checkActive("/chatmain")}>
        <Icon src={chat} />
        <Text>채팅</Text>
      </NavItem>
      <NavItem
        to="/community/counseling"
        isActive={checkActive("/community/counseling")}
      >
        <Icon src={notice} />
        <Text>게시판</Text>
      </NavItem>
      <NavItem to="/attitalk" isActive={checkActive("/attitalk")}>
        <Icon src={attitalk} />
        <Text>아띠토크</Text>
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
  color: ${({ isActive }) => (isActive ? "#10D99B" : "black")};
`;

const Icon = styled.img`
  width: 30px;
  height: 25px;
`;

const Text = styled.span`
  margin-top: 10px;
`;
