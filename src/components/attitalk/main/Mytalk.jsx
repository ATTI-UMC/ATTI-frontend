import styled from "styled-components";
import TalkPreview from "../TalkPreview";

const Mytalk = () => {
  return (
    <MytalkContainer>
      <TalkPreview />
      <TalkPreview />
      <TalkPreview />
      <TalkPreview />
      <TalkPreview />
      <TalkPreview />
      <TalkPreview />
    </MytalkContainer>
  );
};

export default Mytalk;

const MytalkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;
