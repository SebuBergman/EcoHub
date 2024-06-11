
import "./assets/dist/css/bootstrap.min.css";
import "./assets/dist/js/bootstrap.bundle.min.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import './app.scss';
import FrontPage from "./pages/frontPage/FrontPage";
import EnvIssuesPage from "./pages/learnPages/ENVIssues";
import SustainableLiving from "./pages/learnPages/SustainableLivingTips";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <FrontPage/> }/>
          <Route path="/environmental-issues" element={ <EnvIssuesPage/> }/>
          <Route path="/sustainable-living-tips" element={ <SustainableLiving/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
