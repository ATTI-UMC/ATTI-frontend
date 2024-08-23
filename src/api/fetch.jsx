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

    return response.data.user.userid;
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
    images.forEach((image, index) => {
      formData.append(`images`, image);
    });
  }

  try {
    const response = await axios.post(`${baseURL}/board`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Post created successfully:", response.data);
    const data = await response.json();
    return data.redirecturl;
  } catch (error) {
    console.error("create post 버그:", error);
  }
};
