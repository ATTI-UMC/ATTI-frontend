import styled from "styled-components";

const TalkHeader = ({ title }) => {
  return (
    <HeaderContainer>
      <BackButton />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default TalkHeader;

const HeaderContainer = styled.div`
  display: flex;
`;

const BackButton = styled.div``;

const HeaderTitle = styled.div``;
