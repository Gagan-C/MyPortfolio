import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
          <Route path="/resume" Component={Resume} />
        </Routes>
      </HashRouter>
  );
}

export default App;
