import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {
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

  render() {

    const oldLookHeader = (
      <header className='old-header-container' key={Math.random()} >
        <h1 className='old-header-name'>Adrian Lobdill</h1>
        <div>
          <marquee>Software Developer | QA Advocate</marquee>
        </div>
        <p>
          I love the web!
        </p>
        <br  />
        <div className='old-contact-links'>
          <a href='https://github.com/slolobdill44' target="_blank"><img className='old-contact-logo' src='./assets/GitHub-Mark-64px.png' /></a>
          <a href='http://www.linkedin.com/in/lobdill' target="_blank"><img className='old-contact-logo' src='./assets/linked_in.png' /></a>
        </div>
        <img className='header-palms' src='./assets/divideflashing.gif' />
      </header>
    )

    const newLookHeader = (
      <header className='new-header-container' key={Math.random()}>
        <h1 className='new-header-name'>Adrian Lobdill</h1>
        <div>
          <h4 className='new-header-description'>Software Developer | QA Advocate</h4>
        </div>
        <p>&#126;</p>
        <br  />
        <div className='new-contact-links'>
          <a href='https://github.com/slolobdill44' target="_blank"><img className='new-contact-logo' src='./assets/GitHub-Mark-64px.png' /></a>
          <a href='http://www.linkedin.com/in/lobdill' target="_blank"><img className='new-contact-logo' src='./assets/linked_in.png' /></a>
        </div>
        <img className='header-palms' src='./assets/banner_palm.gif' />
      </header>
    )

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.props.style === "new" ? newLookHeader : oldLookHeader }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Header;
