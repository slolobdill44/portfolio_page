import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Footer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      hovered: false
    }

    this.changeLook = this.changeLook.bind(this);
  }

  changeLook() {
    this.setState({ hovered: true })
  }

  render() {

    const oldLookFooter = (
      <div key={ Math.random() } className='old-contact-info' onMouseEnter={() => this.changeLook()}>
        <div className='email'>
          <img src="./assets/pupemail.gif" />
        </div>
        <div className='resume'>
          <img src="./assets/resume.gif" />
        </div>
        <div className='guest-book'>
          <img src='./assets/guest_book.gif' />
        </div>
      </div>
    )

    const newLookFooter = (
      <div key={ Math.random() } className='new-footer-container'>
        <section className='new-contact-info'>
          <div className='new-email'>
            <p>E-Mail</p>
          </div>
          <div className='new-resume'>
            <p>Resume</p>
          </div>
          <div className='new-guest-book'>
            <p>Guestbook</p>
          </div>
        </section>
      </div>
    )

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.state.hovered ? newLookFooter : oldLookFooter }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Footer;
