import luciaImage from '../assets/lucia-image.png';

const Home = () => {
  return (
    <div className="home">
      <div className="section">
        <div className="section-text">
          <h1>Hi, I'm Lucia Van Der Merwe</h1>
          <h3>Well-Being and Thinking Partner</h3>
          <p>
            If you would like to maximise your full potential as your own authentic self in this world of increasing
            complexity, stress, personal, professional, and relationship challenges, I would be honoured to be your
            thinking partner and coach along the way.
          </p>
          <a href="/about" className="link-item">
            Read more about me →
          </a>
        </div>
        <img src={luciaImage} alt="Lucia Van Der Merwe" />
      </div>

      <div className="section">
        <img src="https://via.placeholder.com/400" alt="Placeholder" />
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

      <div className="section">
        <div className="section-text">
          <h2>Why Choose Coaching?</h2>
          <p>
            Coaching is a transformative process that helps you unlock your potential, overcome challenges, and achieve
            your goals. Together, we will create a roadmap to your desired future.
          </p>
        </div>
        <img src="https://via.placeholder.com/400" alt="Placeholder" />
      </div>

      <div className="section">
        <img src="https://via.placeholder.com/400" alt="Placeholder" />
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
