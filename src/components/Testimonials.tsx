import "./styles/Testimonials.css";
import jamesImg from "../assets/testimonials/james.png";
import sarahImg from "../assets/testimonials/sarah.png";
import marcusImg from "../assets/testimonials/marcus.png";

const testimonials = [
  {
    quote: "Anirban's motion design work is exceptional. He has a unique ability to bring static concepts to life with fluid animations and a sharp eye for detail.",
    author: "James Wilson",
    role: "Senior Art Director",
    image: jamesImg,
  },
  {
    quote: "Professional, creative, and highly skilled. The SaaS explainer video Anirban created for us exceeded our expectations and significantly boosted our conversion rate.",
    author: "Sarah Chen",
    role: "Marketing Manager",
    image: sarahImg,
  },
  {
    quote: "Working with Anirban was a breeze. He took our rough ideas and turned them into a polished, high-energy promotional video that perfectly captured our brand voice.",
    author: "Marcus Thorne",
    role: "Founder, TechLaunch",
    image: marcusImg,
  },
];

const Testimonials = () => {
  // Double the testimonials for seamless loop
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonials-section">
      <div className="testimonial-glow"></div>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2><span>Testimonials</span></h2>
          <p>What clients and collaborators say about my work</p>
        </div>
        
        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee">
            {displayTestimonials.map((t, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-quote">
                  {t.quote}
                </div>
                <div className="testimonial-author">
                  <div className="author-image">
                    <img src={t.image} alt={t.author} />
                  </div>
                  <div className="author-info">
                    <h4>{t.author}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
