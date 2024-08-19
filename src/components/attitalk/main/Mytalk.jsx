import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import TalkPreview from "../TalkPreview";

const Mytalk = () => {
  return (
    <MytalkContainer>
      <TalkWrapper>
        <TalkPreview />
        <TalkPreview />
        <TalkPreview />
        <TalkPreview />
        <TalkPreview />
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
  height: 100%; /* 화면 전체를 차지 */
  box-sizing: border-box;
`;

const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  width: 100%;
  flex-grow: 1; /* 남은 공간을 모두 차지 */
  margin: 0 auto;
  overflow-y: auto; /* TalkWrapper 내부에서만 스크롤 가능 */
  box-sizing: border-box;
`;
