import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render () {
    const techUsed = this.props.props.tech.map(tech => {
      return (
        <a key={Math.random()} href={`${tech.link}`} target="_blank">
          <img className='single-project-tech-logo' src={`${tech.image}`} />
        </a>
      )
    });

    return (
      <div className='single-project-container'>
        <div className='single-project'>
          <a className='single-project-screenshot-container' href={`${this.props.props.link}`} target="_blank">
            <img className='single-project-screenshot' src={`${this.props.props.image}`}  />
          </a>
          <div className='single-project-description'>
            <a className='single-project-description-link' href={`${this.props.props.link}`} target="_blank">
              <h3>{this.props.props.title}</h3>
            </a>
            <p>
              {this.props.props.description}
            </p>
            <div className='single-project-tech-used'>
              {techUsed}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
