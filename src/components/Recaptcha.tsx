import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

function CaptchaButton() {
  const [captchaValue, setCaptchaValue] = useState<null | string>(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  // Your site key from Google reCAPTCHA admin console
  //modify domains to add the deployed domain
  const recaptchaSiteKey = '6Lc-vC0rAAAAAPXoih2IQ20PRcjyReDy_Y8oxv-P';

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    setButtonEnabled(!!value); // Enable button when captcha is verified
  };

  const handleSubmit = () => {
    if (captchaValue) {
      //open mail of client
      window.open('mailto:luciamakia01@gmail.com?subject=Request for Consultation&body=Dear Lucia, ');
      // Reset captcha value and button state
      setCaptchaValue(null);
      setButtonEnabled(false);
    }
  };

  return (
    <div className="captcha-container">
      <ReCAPTCHA sitekey={recaptchaSiteKey} onChange={handleCaptchaChange} />

      <button
        onClick={handleSubmit}
        disabled={!buttonEnabled}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: buttonEnabled ? '#4CAF50' : '#cccccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: buttonEnabled ? 'pointer' : 'not-allowed',
        }}
      >
        Email me
      </button>
    </div>
  );
}

export default CaptchaButton;
