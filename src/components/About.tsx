import plant from '../assets/plant.png';

const About = () => {
  return (
    <>
      <div className="text-container">
        <h1>About Me</h1>
        <p>
          My passion for individual and societal well-being led me to study psychology, a degree which enabled me well
          as I navigated my way through a rewarding and challenging corporate career in IS&T project management and
          leadership at blue chip JSE listed companies.
        </p>
        <p>
          {' '}
          A few of these companies include Woolworths SA (15 years), Pick n Pay (5 years), the City of Cape Town (10
          years) where my current role is that of Head of Business Systems, HR as well as professional coach.
        </p>
        <h2>Education and Accreditation</h2>
        <ul>
          <li>BA Degree (Psychology)</li>
          <li>Post graduate HED</li>
          <li>Post graduate Advanced Coach Practitioner Programme, Professional</li>
          <li>Certified Coach Practitioner (SACAP)</li>
          <li>Prince II Project Management Practitioner</li>
          <li>PROSCII Certified Change Management Practitioner</li>
        </ul>
      </div>
      <img src={plant} alt="plant-background" />
    </>
  );
};
export default About;
