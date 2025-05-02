import image from '../assets/lucia-image.png';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Hi, I'm Lucia Van Der Merwe</h1>
        <h3>Well-Being and Thinking Partner</h3>
        <p>
          If you would like to maximise your full potential as your own authentic self in this world of increasing
          complexity, stress, personal, protessional and relationship challenges, I would be honoured to be your
          thinking partner and coach along the way.
        </p>

        <p></p>
        <Link to="/about" id="link-to-about">
          <a>Read more about me →</a>
        </Link>
      </div>
      <img src={image} alt="" id="home-image" />
    </div>
  );
};
export default Home;
