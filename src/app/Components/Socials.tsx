import Link from "next/link";
import { FaDiscord, FaGithub, FaKaggle, FaLinkedin, FaWordpress } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  return (
  <div data-testid="social-links">
                          <Link
                            href={"https://github.com/Gagan-C"}
                            className="flex flex-row pl-2 p-1 hover:underline hover:dark:bg-gray-700 hover:bg-blue-100 rounded-md"
                            target="_blank"
                          >
                            <FaGithub size={20} />
                            <p className="text-sm flex flex-row pl-2">Github</p>
                          </Link>
                          <Link
                            href={"https://www.kaggle.com/gaganchatu"}
                            className="flex flex-row pl-2 p-1 hover:underline hover:dark:bg-gray-700 hover:bg-blue-100 rounded-md"
                            target="_blank"
                          >
                            <FaKaggle size={20} />
                            <p className="text-sm flex flex-row pl-2">Kaggle</p>
                          </Link>
                          <Link
                            href={
                              "https://www.linkedin.com/in/gaganchowdarychatu/"
                            }
                            className="flex flex-row pl-2 p-1 hover:underline hover:dark:bg-gray-700 hover:bg-blue-100 rounded-md"
                            target="_blank"
                          >
                            <FaLinkedin size={20} />
                            <p className="text-sm flex flex-row pl-2">
                              Linkedin
                            </p>
                          </Link>
                          <Link
                            href={"mailto:cgc@gaganchatu.com"}
                            className="flex flex-row pl-2 p-1 hover:dark:bg-gray-700 hover:bg-blue-100 rounded-md" 
                            target="_blank"
                          >
                            <MdEmail size={20} />
                            <p className="text-sm flex flex-row pl-2">e-Mail</p>
                          </Link>
                          <Link
                            href={"https://discord.gg/S8UwfCN4Md"}
                            className="flex flex-row pl-2 p-1 hover:dark:bg-gray-700 hover:bg-blue-100 rounded-md"
                            target="_blank"
                          >
                            <FaDiscord size={20} />
                            <p className="text-sm flex flex-row pl-2">
                              Discord
                            </p>
                          </Link>
                          <Link
                            href={"https://blog.gaganchatu.com"}
                            className="flex flex-row pl-2 p-1 hover:underline hover:dark:bg-gray-700 hover:bg-blue-100 rounded-md"
                            target="_blank"
                          >
                            <FaWordpress size={20} />
                            <p className="text-sm flex flex-row pl-2">My Blog</p>
                          </Link>
                        </div>);
}
export default Socials;