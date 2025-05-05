const About = () => {
  return (
    <div className="about">
      <div className="about-sections">
        {/* Section 1: text left, image right */}
        <div className="section">
          <div className="section-text">
            <h1>About Me</h1>
            <p>
              My passion for individual and societal well-being led me to study psychology, a degree which enabled me
              well as I navigated my way through a rewarding and challenging corporate career in IS&T project management
              and leadership at blue chip JSE listed companies.
            </p>
          </div>
          <img src="https://placehold.co/600x400" alt="About Me" />
        </div>

        <div className="three-cards">
          <div className="card">
            <h3>BA Degree (Psychology)</h3>
            <p>Comprehensive understanding of human behavior and mental processes.</p>
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

        {/* Section 2: image left, text right */}
        <div className="section">
          <img src="https://placehold.co/600x400" alt="Corporate Career" />
          <div className="section-text">
            <h2>Corporate Career</h2>
            <p>
              A few of these companies include Woolworths SA (15 years), Pick n Pay (5 years), and the City of Cape Town
              (10 years), where my current role is that of Head of Business Systems, HR as well as professional coach.
            </p>
          </div>
        </div>

        {/* Section 3: text left, image right */}
        <div className="section">
          <div className="section-text">
            <h2>Coaching Philosophy</h2>
            <p>
              My coaching approach is based on Gerard Egan’s client-centric therapeutic model, exploring issues,
              opportunities, and goals to achieve your desired future.
            </p>
          </div>
          <img src="https://placehold.co/600x400" alt="Coaching Philosophy" />
        </div>

        {/* Section 4: image left, text right */}
        <div className="section">
          <img src="https://placehold.co/600x400" alt="Testimonials" />
          <div className="section-text">
            <h2>Testimonials</h2>
            <p>"Lucia's guidance has been life-changing."</p>
            <p>"Her coaching style is both compassionate and effective."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
