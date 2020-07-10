import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { skills, technologies, languages } from '../../data/SkillsData';

class Skills extends Component {
  renderIcons = (items) => {
    return items.map((item, index) => (
      <OverlayTrigger
        key={index}
        placement="top"
        overlay={<Tooltip id={`tooltip-${item}`}>{item.value}</Tooltip>}
      >
        <i className={item.icon + ' icon'} />
      </OverlayTrigger>
    ));
  };

  render() {
    return (
      <article id="skills" className="section break">
        <p className="section-title">Skills</p>
        <p className="font-xlg text-center">Languages</p>
        <div className="skills-sub-section">{this.renderIcons(languages)}</div>

        <p className="font-xlg text-center">Libraries/Frameworks</p>
        <div className="skills-sub-section">{this.renderIcons(skills)}</div>

        <p className="font-xlg text-center">Technologies</p>
        <div className="skills-sub-section">
          {this.renderIcons(technologies)}
        </div>
      </article>
    );
  }
}

export default Skills;
