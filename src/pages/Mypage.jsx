import styled from "styled-components";
import InfoCard from "../components/mypage/InfoCard";
import MypageContainer from "../components/mypage/MypageContainer";
import Header from "../components/mypage/Header";
import { fetchUserInfo } from "../api/fetch";
import { useEffect, useState } from "react";

const Mypage = () => {
  const [data, setData] = useState(null);
  const storedUserId = localStorage.getItem("userId");

  const userid = storedUserId ? parseInt(storedUserId, 10) : null;

  const getInfo = async () => {
    try {
      const fetchedData = await fetchUserInfo(userid);
      setData(fetchedData);
      console.log(fetchedData);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  useEffect(() => {
    if (userid) {
      getInfo();
    }
  }, [userid]);

  return (
    <Container>
      <Header title={"마이페이지"} />
      <Wrapper>
        {data ? <InfoCard info={data} /> : <p>Loading...</p>}
        <MypageContainer />
      </Wrapper>
    </Container>
  );
};

export default Mypage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 30px;
`;
