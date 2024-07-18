import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./routes/homeRoutes";
import authRoutes from "./routes/authRoutes";
import signupRoutes from "./routes/signupRoutes";
import onboardingRoutes from "./routes/onboardingRoutes";

const router = createBrowserRouter([
  ...homeRoutes,
  ...authRoutes,
  ...signupRoutes,
  ...onboardingRoutes,
]);

export default router;
