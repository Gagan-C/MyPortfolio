import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import Skills from "./components/Skills";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Router>
        <NavigationBar></NavigationBar>
      
      <Routes>
        <Route path="/GitHubPages_test.github.io/skills" element={<Skills />} />
        <Route path="/GitHubPages_test.github.io/"element={<Home />}></Route>
        <Route path="/GitHubPages_test.github.io/education" element={<Education/>}></Route>
        <Route path="/GitHubPages_test.github.io/Projects" element={<Projects/>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
