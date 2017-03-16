import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };

    this.changeLook = this.changeLook.bind(this);
  }

  changeLook() {
    this.setState({hovered: true})
  }

  render() {

    const oldLookHeader = (
      <header onMouseEnter={() => this.changeLook()}>
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
        <img className='header-palms' src='./assets/banner_palm.gif' />
      </header>
    )

    const newLookHeader = (
      <header>
        <h1 className='new-header-name'>NEWWWW</h1>
        <div>
          <marquee>Software Developer | QA Advocate</marquee>
        </div>
        <p>
          I love the web!
        </p>
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
        { this.state.hovered ? newLookHeader : oldLookHeader }
      </div>
    )
  }
}

module.exports = Header;
