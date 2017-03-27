import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Footer extends React.Component {
  constructor(props){
    super(props);

    // this.state = {
    //   hovered: false
    // }
    //
    // this.changeLook = this.changeLook.bind(this);
  }

  // changeLook() {
  //   this.setState({ hovered: true })
  // }

  render() {

    const oldLookFooter = (
      <div key={ Math.random() } className='old-contact-info'>
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
          <a href="mailto:adrian@lobdill.com" target="_top">
            <div className='new-email'>
              <p>E-Mail</p>
            </div>
          </a>
          <a href="./assets/Adrian_Lobdill_Resume_2017.pdf" target="_blank">
            <div className='new-resume'>
              <p>Resume</p>
            </div>
          </a>
          <a href="http://pub38.bravenet.com/guestbook/3253034921/" target="_blank">
            <div className='new-guest-book'>
              <p>Guestbook</p>
            </div>
          </a>
      </section>
      </div>
    )

    return (
      <div id="main-footer">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.props.style === "new" ? newLookFooter : oldLookFooter }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Footer;
