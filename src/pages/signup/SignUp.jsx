import React from "react";
import { Outlet } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <Outlet />
    </div>
  );
};

export default SignUp;
