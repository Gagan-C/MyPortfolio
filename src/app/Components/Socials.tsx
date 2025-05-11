import Link from "next/link";
import { FaDiscord, FaGithub, FaKaggle, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
  <div data-testid="social-links">
                          <Link
                            href={"https://github.com/Gagan-C"}
                            className="flex flex-row pl-2 p-1"
                            target="_blank"
                          >
                            <FaGithub size={20} />
                            <p className="text-sm flex flex-row pl-2">Github</p>
                          </Link>
                          <Link
                            href={"https://www.kaggle.com/gaganchatu"}
                            className="flex flex-row pl-2 p-1"
                            target="_blank"
                          >
                            <FaKaggle size={20} />
                            <p className="text-sm flex flex-row pl-2">Kaggle</p>
                          </Link>
                          <Link
                            href={
                              "https://www.linkedin.com/in/gaganchowdarychatu/"
                            }
                            className="flex flex-row pl-2 p-1"
                            target="_blank"
                          >
                            <FaLinkedin size={20} />
                            <p className="text-sm flex flex-row pl-2">
                              Linkedin
                            </p>
                          </Link>
                          <Link
                            href={"mailto:gagan.chatu@proton.me"}
                            className="flex flex-row pl-2 p-1"
                            target="_blank"
                          >
                            <MdEmail size={20} />
                            <p className="text-sm flex flex-row pl-2">e-Mail</p>
                          </Link>
                          <Link
                            href={"https://discord.gg/S8UwfCN4Md"}
                            className="flex flex-row pl-2 p-1"
                            target="_blank"
                          >
                            <FaDiscord size={20} />
                            <p className="text-sm flex flex-row pl-2">
                              Discord
                            </p>
                          </Link>
                        </div>);
}
export default Socials;