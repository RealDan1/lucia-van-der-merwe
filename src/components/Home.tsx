import imgLucia from '../assets/lucia-image.jpg';
import imgPlantBeige from '../assets/plant-1-beige.jpg';
import imgBeach from '../assets/beach.jpg';
import imgRiver from '../assets/river.jpg';
import { useEffect, useRef } from 'react';

const Home = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      <div
        className="mobile-box section section-animate-left"
        ref={(el) => {
          sectionRefs.current[0] = el;
        }}
      >
        <div className="section-text">
          <h1>Hi, I'm Lucia Van Der Merwe</h1>
          <h3>Well-Being and Thinking Partner</h3>
          <p>
            If you would like to maximise your full potential as your own authentic self in this world of increasing
            complexity, stress, personal, professional, and relationship challenges, I would be honoured to be your
            thinking partner and coach along the way.
          </p>
          <a href="/about" className="link-item" id="read-more">
            Read more about me →
          </a>
        </div>
        <img src={imgLucia} alt="Lucia Van Der Merwe" />
      </div>

      <div
        className="mobile-box section section-animate-right"
        ref={(el) => {
          sectionRefs.current[1] = el;
        }}
      >
        <img src={imgPlantBeige} alt="Placeholder" />
        <div className="section-text">
          <h2>My Coaching Philosophy</h2>
          <p>
            My coaching approach is based on Gerard Egan’s client-centric therapeutic model, exploring issues,
            opportunities, and goals to achieve your desired future.
          </p>
          <p className="quote">
            “Many stories matter. Stories have been used to dispossess and to malign. But stories can be used to empower
            and to humanise.” - Chimamanda Ngozi Adichie
          </p>
        </div>
      </div>

      <div
        className="mobile-box section section-animate-left"
        ref={(el) => {
          sectionRefs.current[2] = el;
        }}
      >
        <div className="section-text">
          <h2>Why Choose Coaching?</h2>
          <p>
            Coaching is a transformative process that helps you unlock your potential, overcome challenges, and achieve
            your goals. Together, we will create a roadmap to your desired future.
          </p>
        </div>
        <img src={imgBeach} alt="Placeholder" />
      </div>

      <div
        className="mobile-box section section-animate-right"
        ref={(el) => {
          sectionRefs.current[3] = el;
        }}
      >
        <img src={imgRiver} alt="Placeholder" />
        <div className="section-text">
          <h2>Testimonials</h2>
          <p>"Lucia's guidance has been life-changing."</p>
          <p>"Her coaching style is both compassionate and effective."</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
