import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Onboarding from "./pages/onboarding/Onboarding";
import SignUp from "./pages/signup/SignUp";
import Authentication from "./pages/signup/Authentication";
import PasswordSetup from "./pages/signup/PasswordSetup";
import onboardingRoutes from "./routes/onboardingRoutes";
import signupRoutes from "./routes/signupRoutes";
import Mypage from "./pages/Mypage";
import ChatRoom from "./pages/chat/ChatRoom";
import CommunityHome from "./pages/Community/CommunityHome";
import CategoryCommunity from "./pages/Community/CategoryCommunity";
import Post from "./pages/Community/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Login />,
      },
      ...signupRoutes,
      ...onboardingRoutes,
      {
        path: "/mypage",
        element: <Mypage />,
      },
      {
        path: "/chatroom",
        element: <ChatRoom />,
      },
      {
        path: "/community/:category",
        element: <CommunityHome />,
      },
      {
        path: "/community/:category/:mbti",
        element: <CategoryCommunity />,
      },
      {
        path: "/community/:category/:mbti/:postId",
        element: <Post />,
      },
    ],
  },
]);

export default router;
