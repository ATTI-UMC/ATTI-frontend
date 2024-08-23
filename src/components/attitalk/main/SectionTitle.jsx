import styled from "styled-components";

const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <TitleContainer>{title}</TitleContainer>
    </Wrapper>
  );
};
export default SectionTitle;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0fbd88;
  border: 1px solid #0fbd88;
  font-size: 14px;
  border-radius: 15px;
  padding: 5px;
  font-weight: 400;
  margin: 10px 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;
