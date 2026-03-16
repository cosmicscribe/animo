import { useEffect, useRef } from "react";
import "./styles/Showreel.css";

const Showreel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const iframe = iframeRef.current;
    
    if (!section || !iframe) return;

    const sendCommand = (method: string, value?: any) => {
      if (iframe.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ method, value }),
          '*'
        );
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play and Unmute when in view
          sendCommand('play');
          sendCommand('setVolume', 1);
        } else {
          // Pause and Mute when out of view
          sendCommand('pause');
          sendCommand('setVolume', 0);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="showreel-section" id="showreel" ref={sectionRef}>
      <div className="showreel-container section-container">
        <h2 className="showreel-title">
          My&nbsp;&nbsp;<span>Showreel</span>
        </h2>

        <div className="showreel-stage">
          {/* Left charger wire */}
          <div className="charger-side left">
            <svg
              className="charger-svg"
              viewBox="0 0 300 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0,10 Q300,10 300,100" className="wire-base" />
              <path d="M0,10 Q300,10 300,100" className="wire-outer" />
              <path d="M0,10 Q300,10 300,100" className="wire-mid" />
              <path d="M0,10 Q300,10 300,100" className="wire-core" />
            </svg>
            <div className="charger-plug"></div>
          </div>

          {/* Tablet */}
          <div className="tablet-mockup-wrapper">
            <div className="tablet-mockup">
              <div className="tablet-screen">
                <div className="vimeo-wrapper">
                  <iframe
                    ref={iframeRef}
                    src="https://player.vimeo.com/video/1172216054?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Showreel"
                  ></iframe>
                </div>
              </div>
              <div className="tablet-button"></div>
            </div>
          </div>

          {/* Right charger wire */}
          <div className="charger-side right">
            <svg
              className="charger-svg"
              viewBox="0 0 300 200"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M300,10 Q0,10 0,100" className="wire-base" />
              <path d="M300,10 Q0,10 0,100" className="wire-outer" />
              <path d="M300,10 Q0,10 0,100" className="wire-mid" />
              <path d="M300,10 Q0,10 0,100" className="wire-core-right" />
            </svg>
            <div className="charger-plug right-plug"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showreel;
