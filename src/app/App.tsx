import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "@config/styles/Global";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@config/styles";
import { useAuthStateSubscription } from "@services/firebase";

import { AppRouter } from "./config/routes";
import "./app.scss";

function App() {
  useAuthStateSubscription();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NextUIProvider>
          <GlobalStyles />
          <SnackbarProvider>
            <AppRouter />
          </SnackbarProvider>
        </NextUIProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
