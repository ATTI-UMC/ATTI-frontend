import { createBrowserRouter, Outlet } from "react-router-dom";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import signupRoutes from "./routes/signupRoutes";
import onboardingRoutes from "./routes/onboardingRoutes";
import mypageRoutes from "./routes/mypageRoutes";
import ChatRoomRoutes from "./routes/chatRoomRoutes";
import communityRoutes from "./routes/communityRoutes";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      ...homeRoutes,
      ...authRoutes,
      ...signupRoutes,
      ...onboardingRoutes,
      ...mypageRoutes,
      ...ChatRoomRoutes,
      ...communityRoutes,
    ],
  },
]);

export default router;
