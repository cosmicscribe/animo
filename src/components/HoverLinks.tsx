import "./styles/style.css";

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && `disable`}>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <linearGradient id="g">
          <stop offset="0%" stopColor="var(--accentColor)" />
          <stop offset="100%" stopColor="var(--textColor)" />
        </linearGradient>
      </svg>
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
