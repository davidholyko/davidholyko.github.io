import React, { Component } from 'react';
import Select from 'react-select';
import { Project } from './Project';
import { projects } from '../../data/ProjectsData';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      tags: [
        'Filter by tags:',
        'React.js',
        'Ruby on Rails',
        'Algorithms',
        'Animations',
        ' Express.js',
        'Responsive-Design',
      ],

      focusedTag: '',
      filter: [],
    };
  }

  handleClick = (event) => {
    Array.from(document.querySelector('.btn-tag')).forEach((element) =>
      element.classList.remove('btn-tag-active'),
    );
    this.setState({ focusedTag: event.target.textContent });
  };

  renderProjects = (projects) => {
    const { filter } = this.state;

    // if nothing in filter, we should not filter
    const shouldFilter = !!filter.length;

    if (!shouldFilter) {
      return projects.map((project, index) => {
        return <Project key={index} project={project} />;
      });
    } else {
      return projects.map((project, index) => {
        let shouldRender = false;

        // join filter list and projecttag list
        // at first match, that project should render
        for (let i = 0; i < filter.length; i++) {
          if (project.tags.includes(filter[i])) {
            shouldRender = true;
            break;
          }
        }

        if (shouldRender) {
          return <Project key={index} project={project} />;
        }
      });
    }
  };

  allTags = (projects) => {
    const uniqueTags = projects.reduce((accumulator, current) => {
      current.tags.forEach((tag) => {
        accumulator[tag] = tag;
      });

      return accumulator;
    }, {});

    const tags = Object.keys(uniqueTags).map((tag) => ({
      value: tag,
      label: tag,
    }));

    return tags;
  };

  onHandleChange = (tags, selection) => {
    const { filter } = this.state;

    if (selection.action === 'clear') {
      this.setState({ filter: [] });
    }

    if (selection.action === 'select-option') {
      const newFilter = tags.map((item) => item.value);
      this.setState({ filter: newFilter });
    }

    if (selection.action === 'remove-value') {
      const removalIndex = filter.findIndex(
        (item) => item === selection.removedValue.value,
      );
      filter.splice(removalIndex, 1);
      this.setState({ filter });
    }
  };

  render() {
    return (
      <article id="projects" className="section">
        <h1 className="section-title">Projects</h1>
        <div className="projects-filter">
          <label>Filter Projects By Tag</label>
          <Select
            className="projects-select-tag"
            isMulti
            closeMenuOnSelect={false}
            options={this.allTags(projects)}
            onChange={this.onHandleChange}
          />
        </div>

        <div className="projects-sub-list">{this.renderProjects(projects)}</div>
      </article>
    );
  }
}

export default Projects;
