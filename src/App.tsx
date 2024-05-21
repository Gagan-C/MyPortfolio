import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
