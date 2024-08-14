import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import signupRoutes from "./routes/signupRoutes";
import onboardingRoutes from "./routes/onboardingRoutes";
import mypageRoutes from "./routes/mypageRoutes";
import ChatRoomRoutes from "./routes/chatRoomRoutes";
import communityRoutes from "./routes/communityRoutes";
import chatMainRoutes from "./routes/chatMainRoutes";

const router = createBrowserRouter([
  ...homeRoutes,
  ...authRoutes,
  ...signupRoutes,
  ...onboardingRoutes,
  ...mypageRoutes,
  ...ChatRoomRoutes,
  ...communityRoutes,
  ...chatMainRoutes,
]);

export default router;
