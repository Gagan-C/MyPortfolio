import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import Background from "../assets/background-img.jpg";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
function Home() {
  const background = {
    backgroundImage: `url(${Background})`,
    height: "100vh",
    width: "100vw",
  };
  return (
    <div className="bg-cover bg-center" style={background}>
      <div className="text-white h-screen flex items-center justify-center container mx auto backdrop-blur-sm ">
        <div className="banner-text text-5xl ">
          <h1 className="responsive-headline pb-3">I am {"Gagan."}</h1>
          <h3 className="text-xl pb-2">
            I'm a <span>{"Software Developer"}</span> from {"India"}. {"NA"}.
          </h3>
          <hr className="pb-2" />
          <div className="socials flex flex-row">
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
            >
              <MdEmail size={20} />
              <p className="text-sm flex flex-row pl-2">e-mail</p>
            </Link>
            <Link
              to={"#"}
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
