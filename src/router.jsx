import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout showMainNav={true}>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
