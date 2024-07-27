import { Link } from "react-router-dom";
import styled from "styled-components";

const Debug = () => {
  return (
    <Container>
      <Link to={"/home"}>/home</Link>
      <Link to={"/signup/auth"}>/signup/auth</Link>
      <Link to={"/signup/password-setup"}>/signup/password-setup</Link>
      <Link to={"/onboarding/personal-info"}>/onboarding/personal-info</Link>
      <Link to={"/onboarding/mbti-info"}>/onboarding/mbti-info</Link>
      <Link to={"/onboarding/interest-info"}>/onboarding/interest-info</Link>
      <Link to={"/onboarding/terms-agreement"}>
        /onboarding/terms-agreement
      </Link>
    </Container>
  );
};

export default Debug;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;
