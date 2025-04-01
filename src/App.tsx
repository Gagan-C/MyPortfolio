import "./components/NavigationBar";
import NavigationBar from "./components/NavigationBar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import background from "./assets/background-img.jpg";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <HashRouter>
        <div className="bg-cover bg-center bg-image" style={{ backgroundImage: `url(${background})` }}>
          <div className="backdrop-blur-sm">
            <NavigationBar/>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/skills" Component={Skills} />
              <Route path="/projects" Component={Projects} />
              <Route path="/resume" Component={Resume} />
            </Routes>
          </div>
        </div>
      </HashRouter>
  );
}

export default App;
