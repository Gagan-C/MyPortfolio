import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.css";
import Skills from "./components/Skills";
import { Route, HashRouter , Routes } from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <NavigationBar></NavigationBar>

        <Routes>
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/education"
            element={<Education />}
          ></Route>
          <Route
            path="/Projects"
            element={<Projects />}
          ></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
