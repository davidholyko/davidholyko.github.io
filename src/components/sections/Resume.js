import React, { Fragment } from 'react';
import src from '../../images/resume-preview.png';

const Resume = () => {
  return (
    <Fragment>
      <a
        aria-label="resume-link"
        className="d-flex justify-content-center"
        href="https://davidholyko.github.io/resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={src} alt="" className="img-resume" />
      </a>
    </Fragment>
  );
};

export default Resume;
