import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:anirbanmondal.reach2@gmail.com" data-cursor="disable">
                anirbanmondal.reach2@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science and Engineering</p>
          </div>
          <div className="contact-box" style={{ justifyContent: "center", alignItems: "center" }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRHyvzWzC8xi9C6uLLcJn5PVgfLrysxLvA6EnvPXgxzukUGQ/viewform"
              target="_blank"
              className="rainbow-button"
              data-cursor="disable"
            >
              Let's Connect
            </a>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/anirban-mondal-728a8224b"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/luka1234560"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/mr_anir_ban?igsh=NnBoc3pzbWE5ZjF0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anirban Mondal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
