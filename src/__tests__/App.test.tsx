import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import '@testing-library/jest-dom';
import NavigationBar from '../components/NavigationBar';

describe('App Component', () => {
  test('renders NavigationBar', () => {
    render(<App />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('renders Home component on default route', () => {
    render(<App />);
    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  });
  
  test('navigates to Skills component when Skills link is clicked', async () => {
    render(<App />);
    const user = await userEvent.setup();
    
    const skillsLink = screen.getByText(/Skills/);
    await user.click(skillsLink);
    
    const skillsElement = screen.getByTestId('skills-component');
    expect(skillsElement).toBeInTheDocument();
  });

  test('navigates to Projects component when Projects link is clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    const projectsLink = screen.getByText(/projects/i);
    await user.click(projectsLink);
    
    const projectsElement = screen.getByTestId('projects-component');
    expect(projectsElement).toBeInTheDocument();
  });

  test('navigates to Home component when Home link is clicked from NavigationBar', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    const homeLink = screen.getByText(/home/i);
    await user.click(homeLink);
    
    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  });

  test('renders mobile menu button and opens menu on click', async () => {
    // Set window size to mobile dimensions
    window.innerWidth = 375;
    window.innerHeight = 667;
    window.dispatchEvent(new Event('resize'));

    render(<App />);
    const user = userEvent.setup();
    
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();
    
    await user.click(menuButton);
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
  });

  test('opens menu when menu button is clicked', () => {
    window.innerWidth = 375;
    window.innerHeight = 667;
    window.dispatchEvent(new Event('resize'));

    render(<NavigationBar />);
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    fireEvent.click(menuButton);
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();
  });
  
  test('closes menu when a menu item is clicked', async () => {
    // Set window size to mobile dimensions
    window.innerWidth = 375;
    window.innerHeight = 667;
    window.dispatchEvent(new Event('resize'));

    render(<NavigationBar />);
    const user = userEvent.setup();
    
    const menuButton = screen.getByRole('button', { name: /open main menu/i });
    await user.click(menuButton);
    const menu = screen.getByRole('menu');
    expect(menu).toBeInTheDocument();

    const homeLink = screen.getByTestId('home-link');
    await user.click(homeLink);
    expect(menu).not.toBeInTheDocument();
  });

  test('navigates to Resume component when Resume link is clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    const resumeLink = screen.getByText(/resume/i);
    await user.click(resumeLink);
    
    const resumeElement = screen.getByTestId('resume-iframe');
    expect(resumeElement).toBeInTheDocument();
  });
});