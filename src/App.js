import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/Theme";
import FrontPage from "./pages/Home/";
import EnvIssuesPage from "./pages/Learn/ENV-Issues/";
import SustainableLiving from "./pages/Learn/SustainableLiving/";
import UserAuth from "./pages/User/authPage";

import "./app.scss";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/environmental-issues" element={<EnvIssuesPage />} />
          <Route path="/login" element={<UserAuth />} />
          <Route
            path="/sustainable-living-tips"
            element={<SustainableLiving />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
