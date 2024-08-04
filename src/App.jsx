import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import router from "./router";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
