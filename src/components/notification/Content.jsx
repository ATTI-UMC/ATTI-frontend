import styled from "styled-components";
import NotificatioinContainer from "./NotificationContainer";

const Content = ({ objectList }) => {
  return (
    <Container>
      {objectList.map((elm, index) => (
        <NotificatioinContainer
          key={elm.notification_id}
          isodd={(index + 1) % 2 === 0}
          object={elm}
        />
      ))}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d9d9d9;
  padding: 10px;
  gap: 10px;
`;
