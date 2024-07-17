import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "./styles/theme";
import router from "./router";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
