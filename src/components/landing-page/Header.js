import React from 'react';
import Scrollspy from 'react-scrollspy';

const Header = () => {
  const sections = [
    { href: 'top', text: 'David Ko' },
    { href: 'about-me', text: 'About Me' },
    { href: 'skills', text: 'Skills' },
    { href: 'projects', text: 'Projects' },
    { href: 'resume', text: 'Resume' },
  ];

  const scrollTo = (element) => {
    document.querySelector(element).scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handleClick = (event) => scrollTo(event.target.getAttribute('href'));

  const generateHeaderText = (sections, className) =>
    sections.map((section, index) => (
      <h3
        key={section + index}
        className={'header-item-text ' + className}
        onClick={handleClick}
        href={'#' + section.href}
      >
        {section.text}
      </h3>
    ));

  return (
    <header>
      <Scrollspy
        items={sections.map((section) => section.href)}
        currentClassName="is-current"
        className="header"
      >
        {generateHeaderText([sections[0]], 'mr-auto')}
        {generateHeaderText(sections.slice(1))}
      </Scrollspy>
    </header>
  );
};

export default Header;
