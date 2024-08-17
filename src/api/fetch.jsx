//api 파일
const baseURL = "";

export const fetchLogin = async ({ id, password }) => {
  const loginInfo = { id: id, password: password };

  try {
    const response = fetch();

    return response.user.id;
  } catch (err) {
    console.log(err);
  }
};
