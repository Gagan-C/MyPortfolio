import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block py-2 px-3 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
    data-testid={`${href.replace('#', '')}-link`}
  >
    {children}
  </a>
);

const MobileMenuButton = ({ onClick }: { onClick: (event: React.MouseEvent<HTMLButtonElement>) => void }) => (
  <button
    data-collapse-toggle="navbar-default"
    type="button"
    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
    aria-controls="navbar-default"
    aria-expanded="false"
    onClick={onClick}
    data-testid="menu-button"
  >
    <span className="sr-only">Open main menu</span>
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
);

function NavigationBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="bg-gray-900" data-testid="navigation-bar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse" data-testid="brand-link">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Portfolio</span>
        </a>
        <MobileMenuButton onClick={handleButtonClick} />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
          data-testid="menu"
        >
          <MenuItem onClick={handleMenuClose} href="/" component="a" data-testid="home-link">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} href="#projects" component="a" data-testid="projects-link">
            Projects
          </MenuItem>
          <MenuItem onClick={handleMenuClose} href="#skills" component="a" data-testid="skills-link">
            Skills
          </MenuItem>
        </Menu>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default" data-testid="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="#projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="#skills">Skills</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;