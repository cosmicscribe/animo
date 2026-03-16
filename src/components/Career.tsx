import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Motion Graphics Designer</h4>
                <h5>Rakary</h5>
              </div>
              <h3>Aug'25-Feb'26</h3>
            </div>
            <p>
              Created and edited 15+ SaaS explainer and product videos for startups and tech companies.
              Designed motion graphics, UI animations, and visual storytelling content to simplify complex
              software features and improve audience engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor & Motion Designer</h4>
                <h5>Independent Clients</h5>
              </div>
              <h3>Jan'26-March'26</h3>
            </div>
            <p>
              Worked with multiple clients to produce promotional videos, social media ads,
              and brand motion graphics. Edited various marketing and content videos while
              delivering high-quality visuals tailored to each client’s brand style.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor & Motion Graphics Designer</h4>
                <h5>Ncrypt Media</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Producing high-quality video edits and motion graphics for marketing campaigns,
              product promotions, and personal branding content. Creating engaging
              storytelling-driven videos, social media visuals, and brand-focused animations
              for digital platforms and commercial projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
