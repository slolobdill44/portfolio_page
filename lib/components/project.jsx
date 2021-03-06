import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Project extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hovered: false
    // };
    //
    // this.changeLook = this.changeLook.bind(this);
  }

  // changeLook() {
  //   this.setState({hovered: true})
  // }

  render () {
    const techUsed = this.props.projectInfo.tech.map(tech => {
      if (tech.link.includes("matter-js")) {
        return (
          <a key={Math.random()} href={`${tech.link}`} target="_blank">
            <img className='matter-js-logo' src={`${tech.image}`} />
          </a>
        )
      }

      return (
        <a key={Math.random()} href={`${tech.link}`} target="_blank">
          <img className='single-project-tech-logo' src={`${tech.image}`} />
        </a>
      )
    });

    const oldLookProject = (
      <div key={Math.random()}
          className='old-single-project-container'>
        <div className='old-single-project'>
          <a className='old-single-project-screenshot-container' href={`${this.props.projectInfo.link}`} target="_blank">
            <img className='old-single-project-screenshot' src={`${this.props.projectInfo.image}`}  />
          </a>
          <div className='old-single-project-description'>
            <a className='old-single-project-description-link' href={`${this.props.projectInfo.link}`} target="_blank">
              <h3>{ this.props.projectInfo.title }</h3>
            </a>
            <p>
              { this.props.projectInfo.description }
            </p>
            <div className='single-project-tech-used'>
              {techUsed}
            </div>
          </div>
        </div>
      </div>
    )


    const newLookProject = (
        <div key={Math.random()} className='new-single-project-frame'>
          <div className='new-single-project-container'>
            <div className='new-single-project'>
              <a className='new-single-project-screenshot-container' href={this.props.projectInfo.link || null /* null here is set to blank out link under maintenance */} target="_blank">
                <div className={`${this.props.projectInfo.overlayImageCSS}`}>
                  <img className='new-external-link-image' src={`${this.props.projectInfo.overlayImage}`} />
                </div>
                <img className='new-single-project-screenshot' src={`${this.props.projectInfo.image}`}  />
              </a>
              <div className='new-single-project-description'>
                <a className={`${this.props.projectInfo.linkColor}`} href={this.props.projectInfo.link || null /* null here is set to blank out link under maintenance */} target="_blank">
                  <h3>{ this.props.projectInfo.title }</h3>
                </a>
                <p>
                  { this.props.projectInfo.description }
                </p>
                <div className='single-project-tech-used'>
                  {techUsed}
                </div>
              </div>
            </div>
          </div>
        </div>
    )

    return (
    <div>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        { this.props.style === "new" ? newLookProject : oldLookProject }
      </ReactCSSTransitionGroup>
    </div>
    )
  }
}

export default Project;
