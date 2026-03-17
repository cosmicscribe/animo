import { useState, useRef, useEffect } from "react";
import "./styles/Work.css";

/* ─── Data ──────────────────────────────────────────── */

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  label: string;
  vimeoUrl?: string;
}

const videoProjects: Project[] = [
  {
    id: 1,
    title: "Fitmart Wellness",
    description: "A crisp explainer illustrating complex SaaS features through kinetic typography and motion graphics.",
    tools: ["After Effects", "Premiere Pro"],
    image: "/images/Solidx.png",
    label: "Video 1",
    vimeoUrl: "https://player.vimeo.com/video/1173597733?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1&playsinline=1",
  },
  {
    id: 2,
    title: "Final Motion Showcase",
    description: "High-energy promotional ad produced for a consumer brand launch campaign.",
    tools: ["Premiere Pro", "After Effects"],
    image: "/images/radix.png",
    label: "Video 2",
    vimeoUrl: "https://player.vimeo.com/video/1173601052?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1&playsinline=1",
  },
  {
    id: 3,
    title: "Rakary Promotion",
    description: "Fluid motion graphics produced for the Rakary brand campaign showcase.",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    image: "/images/bond.png",
    label: "Video 3",
    vimeoUrl: "https://player.vimeo.com/video/1173602264?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1&playsinline=1",
  },
  {
    id: 4,
    title: "Typography Design",
    description: "Experimental typography and kinetic motion graphics produced for a creative showcase.",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    image: "/images/Maxlife.png",
    label: "Video 4",
    vimeoUrl: "https://player.vimeo.com/video/1173602647?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1&playsinline=1",
  },
  {
    id: 5,
    title: "Kungfu Panda Edit",
    description: "High-energy stylized edit featuring cinematic choreography and dynamic transitions.",
    tools: ["Premiere Pro", "After Effects"],
    image: "/images/sapphire.png",
    label: "Video 5",
    vimeoUrl: "https://player.vimeo.com/video/1173604549?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1&playsinline=1",
  },
  {
    id: 6,
    title: "Educational Video",
    description: "Informative educational content produced with clean motion graphics and clear visual storytelling.",
    tools: ["After Effects", "Premiere Pro"],
    image: "/images/Solidx.png",
    label: "Video 6",
    vimeoUrl: "https://player.vimeo.com/video/1173605914?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&api=1&playsinline=1",
  },
];

const posterProjects: Project[] = [
  {
    id: 1,
    title: "Ferrari F1",
    description: "High-energy Formula 1 design highlighting Ferrari racing performance with bold typography and a striking red motorsport aesthetic.",
    tools: ["Canva"],
    image: "/images/1 (2).jpg",
    label: "Poster 1",
  },
  {
    id: 2,
    title: "Fast Series",
    description: "Minimal automotive composition featuring a dynamic car layout and bold typography inspired by speed and motion.",
    tools: ["Photoshop"],
    image: "/images/2.jpg",
    label: "Poster 2",
  },
  {
    id: 3,
    title: "Porsche Carrera",
    description: "Luxury automotive visual showcasing the Porsche Carrera with a modern editorial layout and performance-focused aesthetic.",
    tools: ["PicsArt"],
    image: "/images/3.png",
    label: "Poster 3",
  },
  {
    id: 4,
    title: "The Weeknd",
    description: "Cinematic neon portrait inspired by The Weeknd with dramatic lighting and a moody retro music aesthetic.",
    tools: ["Canva"],
    image: "/images/4 (2).jpg",
    label: "Poster 4",
  },
  {
    id: 5,
    title: "Denim Hoodie",
    description: "Streetwear fashion visual highlighting a modern hoodie design with bold typography and vibrant green styling.",
    tools: ["Photoshop"],
    image: "/images/5 (2).jpg",
    label: "Poster 5",
  },
  {
    id: 6,
    title: "Level Up Snacking",
    description: "Clean food advertising layout featuring snack bars with bright colors and energetic promotional typography.",
    tools: ["PicsArt"],
    image: "/images/6.jpg",
    label: "Poster 6",
  },
  {
    id: 7,
    title: "Porsche 911",
    description: "Minimal automotive artwork focusing on the iconic Porsche 911 silhouette with a clean and modern composition.",
    tools: ["Photoshop"],
    image: "/images/7.jpg",
    label: "Poster 7",
  },
  {
    id: 8,
    title: "Porsche Turbo",
    description: "Bold automotive layout highlighting the Porsche Turbo with strong typography and a dramatic sports car perspective.",
    tools: ["Canva"],
    image: "/images/8.jpg",
    label: "Poster 8",
  },
  {
    id: 9,
    title: "Chocolate Dessert",
    description: "Rich food advertisement showcasing chocolate ice cream with splash effects and appetizing dessert visuals.",
    tools: ["PicsArt"],
    image: "/images/9.png",
    label: "Poster 9",
  },
  {
    id: 10,
    title: "Pisang Goreng",
    description: "Bright food promotion featuring crispy fried bananas with playful colors and an engaging product presentation.",
    tools: ["Canva"],
    image: "/images/10.jpg",
    label: "Poster 10",
  },
];

/* ─── Tool Badge — per-tool hover highlight ─────────── */

const ToolBadge = ({ label, style }: { label: string; style?: React.CSSProperties }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className={`tool-badge${hovered ? " tool-badge--active" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={style}
    >
      {label}
    </span>
  );
};

/* ─── Marquee Row ───────────────────────────────────── */

const MarqueeRow = ({
  projects,
  direction,
  duration = 30,
}: {
  projects: Project[];
  direction: "left" | "right";
  duration?: number;
}) => {
  const [activeCardIdx, setActiveCardIdx] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const isPaused = activeCardIdx !== null;
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const animClass = direction === "left" ? "marquee-track--left" : "marquee-track--right";
  const doubled = [...projects, ...projects];

  // Update volume based on activeCardIdx
  useEffect(() => {
    const setVolume = (iframe: HTMLIFrameElement | null, value: number) => {
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ method: 'setVolume', value }),
          '*'
        );
      }
    };

    // Mute all first
    iframeRefs.current.forEach(ref => setVolume(ref, 0));

    // Unmute only the active one if not muted
    if (activeCardIdx !== null && !isMuted) {
      setVolume(iframeRefs.current[activeCardIdx], 1);
    }
  }, [activeCardIdx, isMuted]);


  const handleCardEnter = (idx: number) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveCardIdx(idx);
  };

  const handleLeave = () => {
    hideTimer.current = setTimeout(() => setActiveCardIdx(null), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
    
    // Don't immediately toggle state, wait for touchEnd to see if it was a tap
  };

  const handleTouchEnd = (idx: number, e?: React.TouchEvent) => {
    if (isSwiping.current) return;
    
    if (activeCardIdx === idx) {
      // Don't close immediately if they are trying to tap the mute button
      // Let the button's own event handler manage its state if needed, but we can just toggle close logic
      if (e) {
        const target = e.target as HTMLElement;
        if (target.closest('.video-mute-btn')) {
          return; 
        }
      }
      setActiveCardIdx(null);
    } else {
      setActiveCardIdx(idx);
    }
  };

  const handleTouchMove = () => {
    isSwiping.current = true;
    // Dismiss detail panel while swiping for clean UX
    if (activeCardIdx !== null) setActiveCardIdx(null);
  };

  return (
    <div className="marquee-row-wrapper">
      <div className="marquee-row">
        <div className="marquee-row-inner">
          <div
            className={`marquee-track ${animClass}${isPaused ? " marquee-track--paused" : ""}`}
              style={{
                animationDuration: `${duration}s`,
                animationPlayState: isPaused ? "paused" : "running",
                "--base-duration": `${duration}s`,
              } as React.CSSProperties}
            onTouchMove={handleTouchMove}
          >
            {doubled.map((project, idx) => {
              const isActive = idx === activeCardIdx;

              return (
                <div
                  key={idx}
                  className={`marquee-card${isActive ? " marquee-card--active" : ""}`}
                  onMouseEnter={() => handleCardEnter(idx)}
                  onMouseLeave={handleLeave}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={(e) => handleTouchEnd(idx, e)}
                >
                  <div className="marquee-card-inner">
                    <div className="marquee-card-media">
                      <div className="marquee-card-img-wrap">
                          {/* Hover Shim to prevent iframe from stealing focus/hover */}
                          <div className="marquee-card-hover-shim"></div>
                          
                          {project.vimeoUrl ? (
                            <div className="vimeo-container">
                              <iframe
                                ref={(el: HTMLIFrameElement | null) => (iframeRefs.current[idx] = el)}
                                src={project.vimeoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; web-share"
                                className="marquee-card-vimeo"
                                title={project.title}
                              ></iframe>
                              {isActive && (
                                <button
                                  className="video-mute-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsMuted(!isMuted);
                                  }}
                                  onTouchEnd={(e) => {
                                    e.stopPropagation();
                                    setIsMuted(!isMuted);
                                  }}
                                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                                >
                                  {isMuted ? "Unmute" : "Mute"}
                                </button>
                              )}
                            </div>
                          ) : (
                          <img
                            src={project.image}
                            alt={project.label}
                            className="marquee-card-img"
                            draggable={false}
                          />
                        )}
                      </div>
                      <div className="marquee-card-label">{project.label}</div>
                    </div>

                    <div className="marquee-card-details">
                      <div className="marquee-card-details-content">
                        <div className="detail-number-box">
                          <span>{String(project.id).padStart(2, "0")}</span>
                        </div>
                        <div className="detail-text-col">
                          <h3 className="detail-title">{project.title}</h3>
                          <p className="detail-desc">{project.description}</p>
                          <div className="detail-tools-section">
                            <span className="detail-tools-label">Tools Used</span>
                            <div className="detail-tools-row">
                              {project.tools.map((t, i) => (
                                <ToolBadge
                                  key={t}
                                  label={t}
                                  style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Work ──────────────────────────────────────────── */

const Work = () => (
  <div className="work-section" id="work">
    <div className="marquee-header section-container">
      <h2 className="work-title">My <span>Work</span></h2>
      <p className="marquee-subtitle">Motion Graphics & Video Editing</p>
    </div>

    <div className="work-gallery marquee-rows-container video-gallery">
      {/* Row 1: Videos (Left -> Right) */}
      <MarqueeRow projects={videoProjects} direction="left" duration={35} />
    </div>

    <div className="marquee-header section-container" style={{ marginTop: "60px" }}>
      <h2 className="work-title">My <span>Work</span></h2>
      <p className="marquee-subtitle">Graphics design & poster design</p>
    </div>

    <div className="work-gallery marquee-rows-container poster-gallery">
      {/* Row 2: Posters (Right -> Left) */}
      <MarqueeRow projects={posterProjects} direction="right" duration={35} />
    </div>
  </div>
);

export default Work;
