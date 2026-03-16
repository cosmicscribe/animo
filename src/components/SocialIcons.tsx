import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const cleanupFns: (() => void)[] = [];
    const elements = Array.from(social.querySelectorAll("span")) as HTMLElement[];

    elements.forEach((elem) => {
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      let rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = mouseX;
      let currentY = mouseY;
      let animationFrameId: number;
      let isHovering = false;

      const refreshRect = () => {
        rect = elem.getBoundingClientRect();
      };

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Only track if mouse is close enough to the icon
        const distance = Math.sqrt(
          Math.pow(x - rect.width / 2, 2) + Math.pow(y - rect.height / 2, 2)
        );

        if (distance < 50) {
          mouseX = x;
          mouseY = y;
          isHovering = true;
        } else if (isHovering) {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
          isHovering = false;
        }
      };

      window.addEventListener("resize", refreshRect);
      elem.addEventListener("mouseenter", refreshRect);
      elem.addEventListener("mousemove", onMouseMove);

      updatePosition();

      cleanupFns.push(() => {
        window.removeEventListener("resize", refreshRect);
        elem.removeEventListener("mouseenter", refreshRect);
        elem.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://www.linkedin.com/in/anirban-mondal-728a8224b" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://x.com/luka1234560" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/mr_anir_ban?igsh=NnBoc3pzbWE5ZjF0" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <div className="icons-section">
        <a className="resume-button" href="https://drive.google.com/file/d/10YPt3jtBxT8y0w0nq0fqVjPdhY3SUmRX/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
