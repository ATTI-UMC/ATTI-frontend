import styled from "styled-components";
import TalkHeader from "../../components/attitalk/TalkHeader";
import ImageInputField from "../../components/attitalk/new/ImageInputField";
import SettingField from "../../components/attitalk/new/SettingField";

const Newchat = () => {
  return (
    <Container>
      <TalkHeader title={"새로 만들기"} />
      <ImageInputField />
      <SettingField
        title={"토크 이름 설정하기"}
        description={"아띠토크의 이름을 입력해 주세요."}
        limit={30}
      />
      <SettingField
        title={"해시태그 설정하기"}
        description={"#해시태그로 아띠토크를 소개해보세요."}
        limit={3}
      />
      <Button>아띠토크 커버 미리보기</Button>
    </Container>
  );
};

export default Newchat;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 10px;
`;
