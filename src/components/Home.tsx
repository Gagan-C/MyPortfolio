import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import Background from "../assets/background-img.jpg";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Paper } from "@mui/material";
function Home() {
  const background = {
    backgroundImage: `url(${Background})`
  };
  const aboutMe='I’m a passionate software engineer with an insatiable curiosity for technology. Whether it’s diving into a new programming language, exploring cutting-edge frameworks, or solving complex problems, I thrive on continuous learning. My journey in the tech world has been marked by rapid adaptation and a hunger for knowledge. As a quick learner, I’ve successfully mastered various software tools, methodologies, and systems. Let’s build something amazing together!'
  return (
    <div className="bg-cover bg-center bg-image" style={background}>
      <div className="text-white  h-screen flex items-center justify-center  backdrop-blur-sm">
        <div className="banner-text text-5xl items-center justify-center container mx-auto ">
        <Paper elevation={1} className="px-10 py-4">
          <h1 className="responsive-headline pb-3">I am {"Gagan"}</h1>
          
          <h3 className="text-xl pb-2">
            {aboutMe}
          </h3>
          </Paper>
          <hr className="pb-2" />
          <div className="socials flex flex-row justify-center">
            <Link
              to={"https://github.com/Gagan-C"}
              className="flex flex-row pl-2"
              target="_blank"
            >
              <FaGithub size={20} />
              <p className="text-sm flex flex-row pl-2">Github</p>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/gaganchowdarychatu/"}
              className="flex flex-row pl-2"
              target="_blank"
            >
              <FaLinkedin size={20} />
              <p className="text-sm flex flex-row pl-2">Linkedin</p>
            </Link>
            <Link
              to={"mailto:gagan.chatu@gmail.com"}
              className="flex flex-row pl-2"
              target="_blank"
            >
              <MdEmail size={20} />
              <p className="text-sm flex flex-row pl-2">e-mail</p>
            </Link>
            <Link
              to={"https://discord.gg/S8UwfCN4Md"}
              className="flex flex-row pl-2"
              target="_blank"
            >
              <FaDiscord size={20} />
              <p className="text-sm flex flex-row pl-2">Discord</p>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
