import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  render() {
    return (
      <div>
        <section className='projects-section'>
          <h1 className='projects-title'>Projects</h1>

          <div className='single-project-container'>
            <div className='single-project'>
              <a className='single-project-screenshot-container' href='http://www.hamcamp.co/#/' target="_blank">
                <img className='single-project-screenshot' src='./assets/hamcampscreenshot.png'  />
              </a>
              <div className='single-project-description'>
                <a className='single-project-description-link' href="http://www.hamcamp.co/#/" target="_blank">
                  <h3>Hamcamp</h3>
                </a>
                <p>
                  Full-stack Bandcamp clone that allows users to upload albums and play them in a convenient music player.
                </p>
                <div className='single-project-tech-used'>
                  <a href='https://facebook.github.io/react/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/react.svg' />
                  </a>
                  <a href='http://redux.js.org/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/redux_logo.png' />
                  </a>
                  <a href='http://rubyonrails.org/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/Ruby_on_Rails_logo.png' />
                  </a>
                  <a href='https://www.postgresql.org/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/PostgreSQL-96.png' />
                  </a>
                  <a href='https://en.wikipedia.org/wiki/HTML5' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/HTML5_Logo_64.png' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className='banner-row'>
            <a href='https://en.wikipedia.org/wiki/MSN_TV' target="_blank">
              <img className='banner-ad' src='./assets/advertisements/webtvlogo.gif' />
            </a>
            <a href='https://en.wikipedia.org/wiki/AltaVista' target="_blank">
              <img className='banner-ad' src='./assets/advertisements/altavista.gif' />
            </a>
          </section>

          <div className='single-project-container'>
            <div className='single-project'>
              <a className='single-project-screenshot-container' href="http://www.tweetthebay.com/#/" target="_blank">
                <img className='single-project-screenshot' src='./assets/tweetthebaycropped.png'  />
              </a>
              <div className='single-project-description'>
                <a className='single-project-description-link' href="http://www.tweetthebay.com/#/" target="_blank">
                  <h3>Tweet The Bay</h3>
                </a>
                <p>
                  A Twitter mapping application that places tweets on a map as they are live tweeted and also allows the user to search by keyword for recent tweets.
                </p>
                <div className='single-project-tech-used'>
                  <a href='https://facebook.github.io/react/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/react.svg' />
                  </a>
                  <a href='http://redux.js.org/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/redux_logo.png' />
                  </a>
                  <a href='http://rubyonrails.org/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/Ruby_on_Rails_logo.png' />
                  </a>
                  <a href='https://www.postgresql.org/' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/PostgreSQL-96.png' />
                  </a>
                  <a href='https://en.wikipedia.org/wiki/HTML5' target="_blank">
                    <img className='single-project-tech-logo' src='./assets/HTML5_Logo_64.png' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className='banner-row'>
            <img className='banner-ad' src='./assets/advertisements/napster_premium.gif' />
          </section>

          <div className='single-project-container'>
            <div className='single-project'>
              <a className='single-project-screenshot-container' href="https://slolobdill44.github.io/hamhuckin/"  target="_blank">
                <img className='single-project-screenshot' src='./assets/hamhuckinscreenshot.png'  />
              </a>
              <div className='single-project-title'>
                <div className='single-project-description'>
                  <a className='single-project-description-' href="https://slolobdill44.github.io/hamhuckin/" target="_blank">
                    <h3>Ham Huckin</h3>
                  </a>
                  <p>
                    A simple JavaScript projectile game that employs the matter.js library to render realistic 2D physics.
                  </p>
                  <div className='single-project-tech-used'>
                    <a href='https://en.wikipedia.org/wiki/JavaScript' target="_blank">
                      <img className='single-project-tech-logo' src='./assets/js_logo.png' />
                    </a>
                    <a href='http://brm.io/matter-js/' target="_blank">
                      <img className='single-project-tech-logo' id='matter-js-logo' src='./assets/matter-js.svg' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />

        <footer className='contact-info'>
          <div className='email'>
            <h2>E-Mail</h2>
            <img src="./assets/pupemail.gif" />
          </div>
          <div className='guest-book'>
            <h2>Guestbook</h2>
            <img src='./assets/guest_book.gif' />
          </div>
        </footer>
      </div>
    )
  };
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
