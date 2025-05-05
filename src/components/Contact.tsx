import Recaptcha from './Recaptcha';

const Contact = () => {
  return (
    <div className="section">
      <div className="section-text">
        <h2>Contact Me</h2>
        <div className="form-group">
          <p>
            I would love to hear from you! Whether you have questions, want to schedule a session, or just want to learn
            more about my coaching services, feel free to reach out.
          </p>
        </div>
        <Recaptcha />
      </div>
      <img src="https://placehold.co/600x400" alt="Contact" />
    </div>
  );
};

export default Contact;
