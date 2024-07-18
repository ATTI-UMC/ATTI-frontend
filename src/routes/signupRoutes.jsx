import SignUp from "../pages/signup/SignUp";
import Authentication from "../pages/signup/Authentication";
import PasswordSetup from "../pages/signup/PasswordSetup";

const signupRoutes = [
  {
    path: "/signup",
    element: <SignUp />,
    children: [
      { path: "", element: <Authentication /> },
      { path: "password-setup", element: <PasswordSetup /> },
    ],
  },
];

export default signupRoutes;
