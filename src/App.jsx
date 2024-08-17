import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import router from "./router";
import Layout from "./components/Layout";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
