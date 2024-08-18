import styled from "styled-components";
import attiText from "../assets/images/attiText.png";
import header_logo from "../assets/images/header_logo.png";
import mypage from "../assets/images/mypage.png";
import notification from "../assets/images/notification.png";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const nav = useNavigate();

  return (
    <HeaderContainer>
      <LogoWrapper>
        <MainLogo src={header_logo} />
        <LogoText src={attiText} />
      </LogoWrapper>
      <IconWrapper>
        <Icon
          src={notification}
          onClick={() => {
            nav("/");
          }}
        ></Icon>
        <Icon
          src={mypage}
          onClick={() => {
            nav("/mypage");
          }}
        ></Icon>
      </IconWrapper>
    </HeaderContainer>
  );
};

export default MainHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  margin: 10px 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-right: 160px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MainLogo = styled.img`
  width: 38px;
  height: 38px;
`;

const LogoText = styled.img`
  width: 48px;
  height: 23px;
`;

const Icon = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;
`;
