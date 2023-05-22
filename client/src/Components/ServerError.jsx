import React from 'react';
import '../assets/styles/serverError.css';

export default function ServerError() {
  return (
    <div className="centered">
      <h1>500 Server Error</h1>
      <div className="container">
        <span className="message" id="js-whoops" />
        <span className="message" id="js-appears" />
        <span className="message" id="js-error" />
        <span className="message" id="js-apology" />
        <div><span className="hidden" id="js-hidden">Message Here</span></div>
      </div>
    </div>
  );
}
