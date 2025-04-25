import { useEffect, useState } from "react";
import { FaDiscord, FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Paper } from "@mui/material";

interface AboutMe {
  body: {
    greeting: string;
    heading: string;
    description: string;
  };
}

function Home() {
  const [aboutMe, setAboutMe] = useState<AboutMe | null>(null);

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const response = await fetch("https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/aboutme.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: AboutMe = await response.json();
        setAboutMe(data);
      } catch (error) {
        console.error("Error fetching aboutMe data:", error);
      }
    };

    fetchAboutMe();
  }, []);

  if (!aboutMe) {
    return <div data-testid="home-component-loading">Loading...</div>;
  }

  return (
    <div data-testid="home-component" className="home">
      <div className="text-white h-screen flex items-center justify-center">
        <div className="banner-text text-5xl items-center justify-center container mx-auto">
          <Paper elevation={1} className="px-10 py-4">
            <div className="flex items-center">
              <div className="w-1/6 md:w-1/6 sm:w-1/2 text-center">
                <img
                  data-testid="profile-pic"
                  src="https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com/profile-pic.png"
                  className="rounded-full w-32 h-32 object-cover border-2 border-white shadow-lg mb-1"
                  alt="profile-picture"
                />
                <div data-testid="social-links">
                  <Link
                    to={"https://github.com/Gagan-C"}
                    className="flex flex-row pl-2 p-1"
                    target="_blank"
                  >
                    <FaGithub size={20} />
                    <p className="text-sm flex flex-row pl-2">Github</p>
                  </Link>
                  <Link
                    to={"https://www.kaggle.com/gaganchatu"}
                    className="flex flex-row pl-2 p-1"
                    target="_blank"
                  >
                    <FaKaggle size={20} />
                    <p className="text-sm flex flex-row pl-2">Kaggle</p>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/gaganchowdarychatu/"}
                    className="flex flex-row pl-2 p-1"
                    target="_blank"
                  >
                    <FaLinkedin size={20} />
                    <p className="text-sm flex flex-row pl-2">Linkedin</p>
                  </Link>
                  <Link
                    to={"mailto:gagan.chatu@proton.me"}
                    className="flex flex-row pl-2 p-1"
                    target="_blank"
                  >
                    <MdEmail size={20} />
                    <p className="text-sm flex flex-row pl-2">e-Mail</p>
                  </Link>
                  <Link
                    to={"https://discord.gg/S8UwfCN4Md"}
                    className="flex flex-row pl-2 p-1"
                    target="_blank"
                  >
                    <FaDiscord size={20} />
                    <p className="text-sm flex flex-row pl-2">Discord</p>
                  </Link>
                </div>
              </div>
              <div className="w-5/6 md:w-5/6 sm:w-1/2">
                <h1 className="responsive-headline pb-3">
                  {aboutMe.body.greeting} {aboutMe.body.heading}
                </h1>
                <h3 className="text-xl pb-2">{aboutMe.body.description}</h3>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}

export default Home;
