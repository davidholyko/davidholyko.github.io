import React, { Component } from 'react';
import src from '../../images/resume-preview.webp';

class Contact extends Component {
  render() {
    return (
      <article id="contact" className="section">
        <div className="full-page">
          <h1 className="section-title mb-0">Resume</h1>
          <a
            aria-label="resume-link"
            className="d-flex justify-content-center"
            href="https://davidholyko.github.io/resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={src} alt="" className="img-resume" />
          </a>
        </div>
      </article>
    );
  }
}

export default Contact;
