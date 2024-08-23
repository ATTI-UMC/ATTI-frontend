import axios from "axios";

//api 파일
const baseURL = "http://teamatti.site:3000";

export const fetchLogin = async (id, password) => {
  const loginInfo = { id: id, password: password };

  try {
    const response = await axios.post(`${baseURL}/auth/login`, loginInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const userInfo = {
      userid: response.data.user.userid,
      nickname: response.data.user.nickname,
      mbti: response.data.user.MBTI_FK,
    };
    return userInfo;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      throw new Error("Unauthorized");
    } else {
      console.log("버그당", err);
      throw err;
    }
  }
};

export const createPost = async ({
  boardType,
  userId,
  nickname,
  title,
  content,
  images,
}) => {
  const formData = new FormData();

  formData.append("board_type", boardType);
  formData.append("user_id", userId);
  formData.append("nickname", nickname);
  formData.append("title", title);
  formData.append("content", content);

  if (images && images.length > 0) {
    images.forEach((image) => {
      formData.append("images", image);
    });
  }

  try {
    const response = await axios.post(`${baseURL}/board`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("formdata", formData);
    console.log("Post created successfully:", response.data);
    return response.data.board_id; // 응답 데이터에서 board_id 반환
  } catch (error) {
    console.error(
      "create post 버그:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to create post");
  }
};

export const getMyTalk = async (userid) => {
  try {
    const response = await axios.get(`${baseURL}/groupchat/${userid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching a user's group chat:", error);
    throw error;
  }
};

export const fetchUserInfo = async (userid) => {
  try {
    const response = await axios.get(`${baseURL}/user/${userid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};

export const fetchPost = async (postid) => {
  try {
    const response = await axios.get(`${baseURL}/board/${postid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post info:", error);
    throw error;
  }
};
