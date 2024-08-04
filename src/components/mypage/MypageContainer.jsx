import styled from "styled-components";
import MypageContent from "./MypageContent";

const MypageContainer = () => {
  return (
    <Container>
      <MypageContent
        category={"계정"}
        title={["아이디", "비밀번호 변경", "이메일 변경"]}
      />
      <MypageContent
        category={"이용 안내"}
        title={["공지사항", "서비스 이용약관", "개인정보 처리방침"]}
      />
      <MypageContent
        category={"기타"}
        title={["정보 동의 설정", "회원 탈퇴", "로그아웃"]}
      />
    </Container>
  );
};

export default MypageContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
