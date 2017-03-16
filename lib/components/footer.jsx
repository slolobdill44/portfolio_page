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
      <div key={ Math.random() } className='contact-info' onMouseEnter={() => this.changeLook()}>
        <div className='email'>
          <h2>E-Mail</h2>
          <img src="./assets/pupemail.gif" />
        </div>
        <div className='guest-book'>
          <h2>Guestbook</h2>
          <img src='./assets/guest_book.gif' />
        </div>
      </div>
    )

    const newLookFooter = (
      <div key={ Math.random() } className='contact-info'>
        <div className='email'>
          <h2>NEWWWW</h2>
          <img src="./assets/pupemail.gif" />
        </div>
        <div className='guest-book'>
          <h2>Guestbook</h2>
          <img src='./assets/guest_book.gif' />
        </div>
      </div>
    )

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.state.hovered ? newLookFooter : oldLookFooter }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

module.exports = Footer;
