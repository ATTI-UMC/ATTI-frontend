import React from "react";
import styled from "styled-components";
import INTJ from "../../assets/images/INTJ.png";
import flower from "../../assets/images/flower.png";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const nav = useNavigate();
  return (
    <Container onClick={() => nav("/chatroom")}>
      <Icon src={flower} />
      <Avatar src={INTJ} />
      <ContentsWrapper>
        <Wrapper>
          <Nickname>{user.nickname}</Nickname>
          <MBTI>{user.MBTI_FK}</MBTI>
        </Wrapper>
        <TagsWrapper>
          <Tag>
            {user.interesting_tags ? (
              user.interting_tags.map((tag, index) => (
                <span key={index}>#{tag}</span>
              ))
            ) : (
              <p>#태그없음</p>
            )}
          </Tag>
        </TagsWrapper>
      </ContentsWrapper>
    </Container>
  );
};

export default UserCard;

const Container = styled.div`
  display: flex;
  width: 90%;
  height: 100px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #0fbd88;
  padding: 12px 10px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 70px;
  height: 78px;
`;

const Icon = styled.img`
  width: 29px;
  height: 28px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Nickname = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #1c1b1f;
`;

const MBTI = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #0fbd88;
  margin-left: 12px;
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Tag = styled.div`
  display: flex;
  border-radius: 15px;
  border: 0.75px solid #5a5a5a;
  height: 24px;
  padding: 3px 6px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  color: #5a5a5a;
`;
