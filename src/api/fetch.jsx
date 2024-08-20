//api 파일
const baseURL = "http://52.78.150.51:3000";

export const fetchLogin = async (id, password) => {
  const loginInfo = { id: id, password: password };

  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.user.id;
  } catch (err) {
    console.log("버그당", err);
    throw err;
  }
};
