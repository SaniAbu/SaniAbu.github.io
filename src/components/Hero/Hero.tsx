import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <p>
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </p>
        <h1>Sani Abubakar</h1>
        <h3>CS Student</h3>
        <p className="small-resume">
          Penultimate Year at Imperial College London
        </p>
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
        <div className="social-media">
          <a
            href="https://github.com/SaniAbu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={Illustration} alt="Ilustração" />
      </div>
    </Container>
  );
}
