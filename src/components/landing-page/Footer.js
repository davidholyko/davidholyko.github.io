import React from 'react';
import { icons } from '../../data/ContactData';

class Footer extends React.Component {
  renderIcons = ({ href, src }) => (
    <a
      aria-label={src}
      className=""
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      key={href}
    >
      <img className="img-icon-big" src={src} alt="" />
    </a>
  );

  render() {
    const text = `Need help on a project? Send me a message or email!
    I'd love to hear from you!`;

    return (
      <footer className="footer">
        <p className="font-lg text-center break my-2">{text}</p>
        <div
          id="contact-me-icons"
          className="d-flex justify-content-around mb-4"
        >
          {icons.map(this.renderIcons)}
        </div>
      </footer>
    );
  }
}

export default Footer;
