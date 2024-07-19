import React from "react";
import { Outlet } from "react-router-dom";

const Onboarding = () => {
  return (
    <div>
      <h1>Onboarding Process</h1>
      <h1>Progress Bar</h1>
      <Outlet />
    </div>
  );
};

export default Onboarding;
