import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import ProjectHeader from './components/project_header';
import Project from './components/project';
import BannerAdRow from './components/banner_ad_row';
import Footer from './components/footer';

class Root extends React.Component {

  render() {
    const hamcampInfo = {
      title: "Hamcamp",
      link: "http://www.hamcamp.co/#/",
      image: "./assets/hamcampscreenshot.png",
      description: "Full-stack Bandcamp clone that allows users to upload albums and play them in a convenient music player.",
      tech: [
        {
          link: "https://facebook.github.io/react/",
          image: "./assets/react.svg"
        },
        {
          link: "http://redux.js.org/",
          image: "./assets/redux_logo.png"
        },
        {
          link: "http://rubyonrails.org/",
          image: "./assets/Ruby_on_Rails_logo.png"
        },
        {
          link: "https://www.postgresql.org/",
          image: "./assets/PostgreSQL-96.png"
        },
        {
          link: "https://en.wikipedia.org/wiki/HTML5",
          image: "./assets/HTML5_Logo_64.png"
        },
      ]
    };

    const tweetTheBayInfo = {
      title: "Tweet The Bay",
      link: "http://www.tweetthebay.com/#/",
      image: "./assets/tweetthebaycropped.png",
      description: "Twitter mapping application that places tweets on a map as they are live tweeted and also allows the user to search by keyword for recent tweets.",
      tech: [
        {
          link: "https://facebook.github.io/react/",
          image: "./assets/react.svg"
        },
        {
          link: "http://redux.js.org/",
          image: "./assets/redux_logo.png"
        },
        {
          link: "http://rubyonrails.org/",
          image: "./assets/Ruby_on_Rails_logo.png"
        },
        {
          link: "https://www.postgresql.org/",
          image: "./assets/PostgreSQL-96.png"
        },
        {
          link: "https://en.wikipedia.org/wiki/HTML5",
          image: "./assets/HTML5_Logo_64.png"
        },
      ]
    };

    const hamhuckinInfo = {
      title: "Ham Huckin'",
      link: "https://slolobdill44.github.io/hamhuckin/",
      image: "./assets/hamhuckinscreenshot.png",
      description: "A simple JavaScript projectile game that employs the matter.js library to render realistic 2D physics.",
      tech: [
        {
          link: "https://en.wikipedia.org/wiki/JavaScript",
          image: "./assets/js_logo.png"
        },
        {
          link: "http://brm.io/matter-js/",
          image: "./assets/matter-js.svg"
        }
      ]
    };

    return (
      <div>

        <Header />

        <section className='projects-section'>

          <ProjectHeader />

          <Project
            projectInfo={hamcampInfo} />

          <BannerAdRow
            ads = {
              [
                {
                  link: 'https://en.wikipedia.org/wiki/AltaVista',
                  image: './assets/altavista.gif'
                },
                {
                  link: 'https://en.wikipedia.org/wiki/MSN_TV',
                  image: './assets/advertisements/webtvlogo.gif'
                },
              ]
            }
             />

           <Project
             projectInfo={tweetTheBayInfo} />

          <BannerAdRow
            ads = {
              [
                {
                  link: 'https://en.wikipedia.org/wiki/Napster',
                  image: './assets/advertisements/napster_premium.gif'
                }
              ]
            } />

           <Project
             projectInfo={hamhuckinInfo} />
        </section>

        <Footer />
      </div>
    )
  };
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
