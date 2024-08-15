import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import TalkPreview from "../TalkPreview";

const Mytalk = () => {
  return (
    <MytalkContainer>
      <SectionTitle title={"MY 토크"} />
      <TalkWrapper>
        <TalkPreview />
        <TalkPreview />
      </TalkWrapper>
    </MytalkContainer>
  );
};

export default Mytalk;

const MytalkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//scroll
const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
