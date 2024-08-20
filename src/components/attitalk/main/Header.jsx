import styled from "styled-components";
import plus from "../../../assets/images/plus.png";
import search from "../../../assets/images/search.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Icon
          src={search}
          alt="검색 아이콘"
          onClick={() => {
            nav("/atti/search");
          }}
        />
        <Icon
          src={plus}
          alt="플러스 아이콘"
          onClick={() => {
            nav("/atti/new-chat");
          }}
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: 0 20px;
  gap: 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
