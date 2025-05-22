import room1 from '../assets/room1.jpg';
import { useEffect, useRef } from 'react';

const About = () => {
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
    <div className="about">
      <div className="about-sections">
        <div
          className="section section-animate-left"
          ref={(el) => {
            sectionRefs.current[0] = el;
          }}
        >
          <div className="section-text">
            <h1>About Me</h1>
            <p>
              My passion for individual and societal well-being led me to study psychology, a degree which enabled me
              well as I navigated my way through a rewarding and challenging corporate career in IS&T project management
              and leadership at blue chip JSE listed companies.
            </p>
          </div>
          <img src={room1} alt="About Me" />
        </div>

        <div
          className="three-cards section-animate-right"
          ref={(el) => {
            sectionRefs.current[1] = el;
          }}
        >
          <div className="card">
            <h3>BA Degree (Psychology)</h3>
            <p>Comprehensive understanding of human behaviour and mental processes.</p>
          </div>
          <div className="card">
            <h3>Post graduate HED</h3>
            <p>Specialized training in education to empower and inspire effectively.</p>
          </div>
          <div className="card">
            <h3>Certified Coach Practitioner</h3>
            <p>Accredited by SACAP for professional coaching excellence.</p>
          </div>
          <div className="card">
            <h3>Prince II Project Management</h3>
            <p>Expertise in managing complex projects with precision and efficiency.</p>
          </div>
        </div>

        <div
          className="section section-animate-left"
          ref={(el) => {
            sectionRefs.current[2] = el;
          }}
        >
          <img src="https://placehold.co/600x400" alt="Corporate Career" />
          <div className="section-text">
            <h2>Corporate Career</h2>
            <p>
              A few of these companies include Woolworths SA (15 years), Pick n Pay (5 years), and the City of Cape Town
              (10 years), where my current role is that of Head of Business Systems, HR as well as professional coach.
            </p>
          </div>
        </div>

        <div
          className="section section-animate-right"
          ref={(el) => {
            sectionRefs.current[3] = el;
          }}
        >
          <div className="section-text">
            <h2>Lifelong Learning & Coaching Journey</h2>
            <p>
              I completed relevant technical, business and leadership courses during these years, and it was the
              realisation of a life-long dream to study towards a professional coach practitioner qualification at the
              South African College of Applied Psychology (SACAP) from March 2020 to June 2021.
            </p>
          </div>
          <img src="https://placehold.co/600x400?text=Learning+Journey" alt="Lifelong Learning and Coaching Journey" />
        </div>

        <div
          className="section section-animate-left"
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
        >
          <img src="https://placehold.co/600x400" alt="Coaching Philosophy" />
          <div className="section-text">
            <h2>Coaching Philosophy</h2>
            <p>
              My coaching approach is based on Gerard Egan’s client-centric therapeutic model, exploring issues,
              opportunities, and goals to achieve your desired future.
            </p>
          </div>
        </div>

        <div
          className="section section-animate-right"
          ref={(el) => {
            sectionRefs.current[5] = el;
          }}
        >
          <div className="section-text">
            <h2>Integrating Positive Psychology & Neuroscience</h2>
            <p>
              Alongside my core coaching model, I incorporate insights from positive psychology and neuroscience—fields
              I am passionate about and continue to study. This allows me to support clients with evidence-based
              strategies that foster well-being, resilience, and personal growth.
            </p>
          </div>
          <img
            src="https://placehold.co/600x400?text=Positive+Psychology+%26+Neuroscience"
            alt="Positive Psychology and Neuroscience"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
