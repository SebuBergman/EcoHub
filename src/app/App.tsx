import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "@config/styles/Global";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@config/styles";

import "./app.scss";
import { AppRouter } from "./config/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NextUIProvider>
        <GlobalStyles />
        <BrowserRouter>
          <SnackbarProvider>
            <AppRouter />
          </SnackbarProvider>
        </BrowserRouter>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default App;
