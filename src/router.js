import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import signupRoutes from "./routes/signupRoutes";
import onboardingRoutes from "./routes/onboardingRoutes";
import mypageRoutes from "./routes/mypageRoutes";
import ChatRoomRoutes from "./routes/chatRoomRoutes";
import communityRoutes from "./routes/communityRoutes";
import attitalkRoutes from "./routes/attitalkRoutes";

const router = createBrowserRouter([
  ...homeRoutes,
  ...authRoutes,
  ...signupRoutes,
  ...onboardingRoutes,
  ...mypageRoutes,
  ...ChatRoomRoutes,
  ...communityRoutes,
  ...attitalkRoutes,
]);

export default router;
