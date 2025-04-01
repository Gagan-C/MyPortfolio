import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import Background from "../assets/background-img.jpg";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Paper } from "@mui/material";
import aboutMe from "./aboutme.json";
function Home() {
  const background = {
    backgroundImage: `url(${Background})`
  };
  return (
    <div data-testid="home-component" className="home">
      <div className="bg-cover bg-center bg-image" style={background}>
        <div className="text-white  h-screen flex items-center justify-center  backdrop-blur-sm">
          <div className="banner-text text-5xl items-center justify-center container mx-auto ">
          <Paper elevation={1} className="px-10 py-4">
            <h1 className="responsive-headline pb-3">{aboutMe.body.greeting} {aboutMe.body.heading}</h1>
            
            <h3 className="text-xl pb-2">
              {aboutMe.body.desciption}
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
    </div>
  );
}

export default Home;
