import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg";
import externalLinkIcon from "../../assets/external-link-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Portfolio() {
  return (
    <Container id="portfolio">
      <h2>My portfolio</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/weather-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Weather App</h3>
              <p>
                A sleek weather forecasting app built with React, providing
                real-time temperature, humidity, and wind data using the
                OpenWeather API. Includes search functionality, location-based
                data, and dynamic UI updates. ☁️🌤️
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>OpenWeather API</li>
                <li>Responsive Design</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/Go-react-project-Registration-form-"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Login Registration Form</h3>
              <p>
                A user-friendly React.js registration form that captures user
                details like name, email, phone, and address, with real-time
                input validation and API integration using Axios. It features a
                clean UI, error handling, and user feedback to ensure a smooth
                data submission process. 🚀
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React JS</li>
                <li>Axios</li>
                <li>GO</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/joaotuliojt/github-search"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                  href="https://github-search-blond.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Github Searcher</h3>
              <p>
                GitHub Searcher is a web application that fetches GitHub
                profiles and repositories using the GitHub API. It provides
                real-time search results with user details, repos, and followers
                in a sleek UI for easy exploration. 🚀
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/movie-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CineFlex - Movie Explorer website</h3>
              <p>
                A modern movie browsing website built with React. CineFlex lets
                users search for films, view ratings, and explore detailed movie
                info with a clean UI and responsive design. 🎬✨
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>OMDb API</li>
                <li>Styled Components</li>
                <li>React Hooks</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/Quiz-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Quiz App</h3>
              <p>
                A responsive and dynamic quiz application built with React and
                Context API. It features real-time score tracking, a countdown
                timer, and smooth screen transitions to test your MERN stack
                knowledge in a fun way! 🧠⚡
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>

                <li>Context API</li>
                <li>Custom Hooks</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/movie-website"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>PIG-GAME</h3>
              <p>
                A fun Pig Game built with HTML, CSS, and JavaScript, featuring
                interactive dice rolling, player turns, and dynamic score
                tracking for an engaging experience. 🎲🔥
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Java Script</li>
                <li>Styled Components</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/restaurant-eat-slip"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>EatSlip - Restaurant Ordering App</h3>
              <p>
                A minimal and responsive restaurant app built with React.
                EatSlip allows users to browse dishes, add items to their cart,
                and place orders with real-time state updates and smooth UI
                transitions. 🍽️🛒
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>JavaScript</li>
                <li>useReducer</li>
                <li>Responsive Design</li>
                <li>State Management</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ihasseeb/restaurant-eat-slip"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Bankist App</h3>
              <p>
                A sleek and interactive banking interface built using modern
                JavaScript. Bankist simulates real-world banking features like
                transfers, loan requests, account summaries, and logout timers —
                all with smooth animations and a responsive design. 🏦💸
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>DOM Manipulation</li>
                <li>Responsive UI</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
