import React, { useState } from "react";
import styled from "styled-components";
import INTJ from "../../assets/images/INTJ.png"
import button_exit from "../../assets/images/button_exit.png"
import button_report from "../../assets/images/button_report.png"
import BottomSheet from "./BottomSheet";
import TextButton from "./TextButton";
import Modal from "./Modal";

const Info = () => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [isReportSheetVisible, setIsReportSheetVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] =useState({});

  const toggleSheet = () => {
    setIsSheetVisible(!isSheetVisible);
  };

  const toggleReportSheet = () => {
    setIsReportSheetVisible(!isReportSheetVisible);
    setIsSheetVisible(false);
  };

  const showModal = (title, message, confirmButtonText, color) => {
    setModalContent({ title, message, confirmButtonText, color });
    setIsModalVisible(true);
    setIsSheetVisible(false);
    setIsReportSheetVisible(false);
  }

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const handleConfirm = () => {
    alert("신고가 접수되었습니다.");
    closeModal();
  };

  return(
    <Container>
      <InfoWrapper>
        <MBTIIcon src = { INTJ }/>
        <Nickname>닉네임</Nickname>
        <MBTI>INTJ</MBTI>
      </InfoWrapper>
      <IconsWrapper>
        <Icon src={ button_report } alt="report" onClick={toggleSheet}/>
        <Icon src={ button_exit } alt="exit" onClick={() => showModal('채팅을 종료할까요?', '채팅 종료 이후에는 채팅을 다시 이어나갈 수 없습니다.', '나가기', '#0FBD88')}/>
      </IconsWrapper>

      {/* 첫번째 팝업 */}
      <BottomSheet isVisible={isSheetVisible} onClose={toggleSheet}>
        <TextButton onClick={(toggleReportSheet)}>신고</TextButton>
        <TextButton onClick={() => showModal('정말 차단할까요?', '해당 사용자와 서로 차단되며, 진행중인 채팅방은 삭제됩니다.', '차단', '#D91040')}>차단</TextButton>
      </BottomSheet>

      {/* 두번째 팝업 */}
      <BottomSheet isVisible={isReportSheetVisible} onClose={toggleReportSheet}>
        <Title>어떤 문제가 있나요?</Title>
        <TextButton onClick={() => showModal('정말 신고할까요?', '해당 사용자와 서로 차단되며, 진행중인 채팅방은 삭제됩니다.', '신고', '#D91040')}>상대방이 답장 없음</TextButton>
        <TextButton onClick={() => showModal('정말 신고할까요?', '해당 사용자와 서로 차단되며, 진행중인 채팅방은 삭제됩니다.', '신고', '#D91040')}>허위 프로필 및 사진 도용</TextButton>
        <TextButton onClick={() => showModal('정말 신고할까요?', '해당 사용자와 서로 차단되며, 진행중인 채팅방은 삭제됩니다.', '신고', '#D91040')}>불법 촬영물 공유</TextButton>
        <TextButton onClick={() => showModal('정말 신고할까요?', '해당 사용자와 서로 차단되며, 진행중인 채팅방은 삭제됩니다.', '신고', '#D91040')}>욕설 및 불쾌한 대화</TextButton>
        <TextButton onClick={() => showModal('정말 신고할까요?', '해당 사용자와 서로 차단되며, 진행중인 채팅방은 삭제됩니다.', '신고', '#D91040')}>기타</TextButton>
      </BottomSheet>

      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        title={modalContent.title}
        message={modalContent.message}
        confirmButtonText={modalContent.confirmButtonText}
        color={modalContent.color}
        onConfirm={handleConfirm}
      />  
    </Container>
  )
};

export default Info;

const Container = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

const InfoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  background-color: #fff;
`
const MBTIIcon = styled.img`
  width: 54px;
  height: 60px;
`
const Nickname = styled.p`
  font-size: 16px;
  margin-left: 2px;
`
const MBTI = styled.p`
  font-size:16px;
  font-weight: bold;
  margin-left: 5px;
  color: #10D99B;
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 12px;
`
const Icon = styled.img`
  width: 16px;
  height: 18px;
  cursor: pointer;
`
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  padding: 20px;
`