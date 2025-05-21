import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

function CaptchaButton() {
  const [captchaValue, setCaptchaValue] = useState<null | string>(null);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  // Your site key from Google reCAPTCHA admin console
  //modify domains to add the deployed domain
  const recaptchaSiteKey = '6Lc9vC0rAAAAAFQbRWFr3KGq1B5ro9veyXKrHOCz';
  // 6Lc-vC0rAAAAAPXoih2IQ20PRcjyReDy_Y8oxv-P
  // current key??

  function handleCaptchaChange(value: string | null) {
    setCaptchaValue(value);
    setButtonEnabled(!!value);
  }

  const handleSubmit = () => {
    if (captchaValue) {
      window.open('mailto:placeholder@mailinator.com?subject=Request for Consultation&body=Dear Lucia, ');

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
        className={`modern-button ${!buttonEnabled ? 'disabled' : ''}`}
      >
        Email me
      </button>
    </div>
  );
}

export default CaptchaButton;
