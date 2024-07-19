import React from "react";
import styled from "styled-components";
import logoNaver from "../assets/images/logoNaver.png";
import logoKakao from "../assets/images/logoKakao.png";
import logoGoogle from "../assets/images/logoGoogle.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  color: #1c1b1f;
  a {
    text-decoration: none;
    color: #1c1b1f;
  }
`;

const LinkItem = styled.span`
  padding-left: 10px;
  &::before {
    padding-right: 10px;
    color: #999999;
    content: "|";
  }
  &:nth-child(1)::before {
    content: none;
  }
  &:nth-child(1) {
    padding-left: 0px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 80px;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 15px;
  cursor: pointer;
`;

const LoginFooter = () => (
  <FooterContainer>
    <LinksContainer>
      <LinkItem>
        <Link to="/signup">회원가입</Link>
      </LinkItem>
      <LinkItem>
        <Link to="">아이디 찾기</Link>
      </LinkItem>
      <LinkItem>
        <Link to="">비밀번호 찾기</Link>
      </LinkItem>
    </LinksContainer>
    <IconsContainer>
      <Icon src={logoNaver} alt="Naver" />
      <Icon src={logoKakao} alt="KakaoTalk" />
      <Icon src={logoGoogle} alt="Google" />
    </IconsContainer>
  </FooterContainer>
);

export default LoginFooter;
