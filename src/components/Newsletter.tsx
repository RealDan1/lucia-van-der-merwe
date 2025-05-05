const Newsletter = () => {
  return (
    <div className="section">
      <div className="section-text">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest insights, tips, and resources to help you on your journey to well-being.</p>
        <form className="form-group">
          <input type="email" className="modern-input" placeholder="Enter your email" required />
          <button type="submit" className="modern-button">
            Subscribe
          </button>
        </form>

        <div className="newsletter-benefits">
          <h3>Why Subscribe?</h3>
          <div className="benefit-item">
            <li>Get exclusive insights on personal development</li>
          </div>
          <div className="benefit-item">
            <li>Stay updated with the latest coaching techniques</li>
          </div>
          <div className="benefit-item">
            <li>Receive monthly wellness tips and strategies</li>
          </div>
        </div>
      </div>
      <img src="https://via.placeholder.com/400" alt="Newsletter" />
    </div>
  );
};

export default Newsletter;
