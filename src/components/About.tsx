import HoverLinks from "./HoverLinks";
import { TbNotes } from "react-icons/tb";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Anirban, a Graphic Designer, Motion Designer, and Video Editor with 1+ years of experience creating engaging visual content.
          I specialize in clean, modern designs and dynamic motion graphics that help brands communicate their ideas clearly.

          From SaaS explainer videos to product animations and social media content, I focus on blending creativity with storytelling to produce visuals that capture attention and deliver impact.
        </p>
        <a
          className="about-resume-button"
          href="https://drive.google.com/file/d/10YPt3jtBxT8y0w0nq0fqVjPdhY3SUmRX/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          <HoverLinks text="RESUME" />
          <span><TbNotes /></span>
        </a>
      </div>
    </div>
  );
};

export default About;
