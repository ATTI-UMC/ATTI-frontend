import styled from "styled-components";
import plus from "../../../assets/images/plus.png";
import search from "../../../assets/images/search.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Icon src={search} alt="검색 아이콘" />
        <Icon src={plus} alt="플러스 아이콘" />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%; /* Wrapper가 전체 너비를 차지하도록 설정 */
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%; /* HeaderContainer가 전체 너비를 차지하도록 설정 */
  margin: 5px 20px;
  gap: 10px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
