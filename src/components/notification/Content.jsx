import styled from "styled-components";
import NotificationContainer from "./NotificationContainer";

const Content = ({ objectList = [] }) => {
  if (!Array.isArray(objectList)) {
    console.error("objectList is not an array:", objectList);
    return null;
  }

  return (
    <Container>
      {objectList.map((elm, index) => (
        <NotificationContainer
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
