import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import signupRoutes from "./routes/signupRoutes";
import onboardingRoutes from "./routes/onboardingRoutes";
import mypageRoutes from "./routes/mypageRoutes";
import ChatRoomRoutes from "./routes/chatRoomRoutes";

const router = createBrowserRouter([
  ...homeRoutes,
  ...authRoutes,
  ...signupRoutes,
  ...onboardingRoutes,
  ...mypageRoutes,
  ...ChatRoomRoutes,
]);

export default router;
