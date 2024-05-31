
import 'bootstrap/dist/css/bootstrap.css';
import "./assets/dist/css/bootstrap.min.css";
import "./assets/dist/js/bootstrap.bundle.min.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './app.scss';
import FrontPage from "./pages/frontPage/FrontPage";
import EnvIssuesPage from "./pages/learnPages/ENVIssues";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <FrontPage/>}/>
        <Route path="/Environmental-Issues" element={EnvIssuesPage}/>
      </Routes>
    </Router>
  )
}

export default App;
