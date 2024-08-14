import React from "react";
import styled from "styled-components";
import home from "../assets/images/nav_home.png";
import chat from "../assets/images/nav_chat.png";
import notice from "../assets/images/nav_notice.png";
import attitalk from "../assets/images/nav_attitalk.png";

const BottomNav = () => {
  return (
    <NavWrapper>
      <NavItem>
        <Icon src={home} />
        <span>홈</span>
      </NavItem>
      <NavItem>
        <Icon src={chat} />
        <span>채팅</span>
      </NavItem>
      <NavItem>
        <Icon src={notice} />
        <span>게시판</span>
      </NavItem>
      <NavItem>
        <Icon src={attitalk} />
        <span>아띠토크</span>
      </NavItem>
    </NavWrapper>
  );
};

export default BottomNav;

const NavWrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  width: 25%;
  height: 60px;
`;

const Icon = styled.img`
  width: 30px;
  height: 25px;
`;
