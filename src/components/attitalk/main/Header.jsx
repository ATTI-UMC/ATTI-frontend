import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Icon>search</Icon>
      <Icon>new</Icon>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
`;

const Icon = styled.div``;
