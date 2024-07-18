import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/signup/SignUp";
import Authentication from "./pages/signup/Authentication";
import PasswordSetup from "./pages/signup/PasswordSetup";
import Onboarding from "./pages/onboarding/Onboarding";
import PersonalInfo from "./pages/onboarding/PersonalInfo";
import MbtiInfo from "./pages/onboarding/MbtiInfo";
import InterestInfo from "./pages/onboarding/InterestInfo";
import TermsAgreement from "./pages/onboarding/TermsAgreement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    children: [
      { path: "", element: <Authentication /> },
      { path: "password-setup", element: <PasswordSetup /> },
    ],
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
    children: [
      { path: "personal-info", element: <PersonalInfo /> },
      { path: "mbti-info", element: <MbtiInfo /> },
      { path: "interest-info", element: <InterestInfo /> },
      { path: "terms-agreement", element: <TermsAgreement /> },
    ],
  },
]);

export default router;
