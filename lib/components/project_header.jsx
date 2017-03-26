import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectHeader extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hovered: false
    // };

    // this.changeLook = this.changeLook.bind(this);
  }

  // changeLook() {
  //   this.setState({hovered: true})
  // }

  render() {

    const oldLookProjectHeader = (
      <h4 key={Math.random()} className='old-projects-title'>Projects</h4>
    )

    const newLookProjectHeader = (
      <h4 key={Math.random()} className='new-projects-title'>Projects</h4>
    )

    return (
      <div className='projects-title-container'>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.props.style === "new" ? newLookProjectHeader : oldLookProjectHeader }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

module.exports = ProjectHeader;
