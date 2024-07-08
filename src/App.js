import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./app.scss";
import FrontPage from "./pages/frontPage/FrontPage";
import EnvIssuesPage from "./pages/learnPages/ENVIssues";
import SustainableLiving from "./pages/learnPages/SustainableLivingTips";
import UserAuth from "./pages/userPages/authPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <FrontPage/> }/>
          <Route path="/environmental-issues" element={ <EnvIssuesPage/> }/>
          <Route path="/login" element={ <UserAuth/> }/>
          <Route path="/sustainable-living-tips" element={ <SustainableLiving/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
