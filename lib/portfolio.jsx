import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import ProjectHeader from './components/project_header';
import Project from './components/project';
import BannerAdRow from './components/banner_ad_row';
import Footer from './components/footer';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageStyle: "new"
    };

    this.switchStyles = this.switchStyles.bind(this);
  }

  switchStyles() {
    if (this.state.pageStyle === "new") {
      this.setState({pageStyle: "old"});
    } else {
      this.setState({pageStyle: "new"});
    }
  }

  render() {
    const hamcampInfo = {
      title: "Hamcamp",
      link: "http://www.hamcamp.co/#/",
      image: "./assets/hamcampscreenshot.png?quality=70&auto=webp",
      description: "Full-stack Bandcamp clone that allows users to upload albums and play them in a convenient music player.",
      tech: [
        {
          link: "https://facebook.github.io/react/",
          image: "./assets/react.svg"
        },
        {
          link: "http://redux.js.org/",
          image: "./assets/redux_logo.png?quality=70&auto=webp"
        },
        {
          link: "http://rubyonrails.org/",
          image: "./assets/Ruby_on_Rails_logo.png?quality=70&auto=webp"
        },
        {
          link: "https://www.postgresql.org/",
          image: "./assets/PostgreSQL-96.png?quality=70&auto=webp"
        },
        {
          link: "https://en.wikipedia.org/wiki/HTML5",
          image: "./assets/HTML5_Logo_64.png?quality=70&auto=webp"
        },
      ]
    };

    const tweetTheBayInfo = {
      title: "Tweet The Bay",
      link: "http://www.tweetthebay.com/#/",
      image: "./assets/tweetthebaycropped.png?quality=70&auto=webp",
      description: "Twitter mapping application that places tweets on a map as they are live tweeted and also allows searching by keyword.",
      tech: [
        {
          link: "https://facebook.github.io/react/",
          image: "./assets/react.svg"
        },
        {
          link: "http://redux.js.org/",
          image: "./assets/redux_logo.png?quality=70&auto=webp"
        },
        {
          link: "http://rubyonrails.org/",
          image: "./assets/Ruby_on_Rails_logo.png?quality=70&auto=webp"
        },
        {
          link: "https://www.postgresql.org/",
          image: "./assets/PostgreSQL-96.png?quality=70&auto=webp"
        },
        {
          link: "https://en.wikipedia.org/wiki/HTML5",
          image: "./assets/HTML5_Logo_64.png?quality=70&auto=webp"
        },
      ]
    };

    const hamhuckinInfo = {
      title: "Ham Huckin'",
      link: "https://slolobdill44.github.io/hamhuckin/",
      image: "./assets/hamhuckinscreenshot.png?quality=70&auto=webp",
      description: "A simple JavaScript projectile game that employs the matter.js library to render realistic 2D physics.",
      tech: [
        {
          link: "https://en.wikipedia.org/wiki/JavaScript",
          image: "./assets/js_logo.png?quality=70&auto=webp"
        },
        {
          link: "http://brm.io/matter-js/",
          image: "./assets/matter-js.svg"
        }
      ]
    };

    //potentially have project-body-background class be dependent on 'new' or 'old' state

    return (
      <div>

        <div className='project-body-container'>



          <main className='new-project-body-background'>


            <Header style={this.state.pageStyle} />

            <section className='projects-section'>

              <ProjectHeader style={this.state.pageStyle} />

              <Project
                projectInfo={hamcampInfo}
                style={this.state.pageStyle} />

              <BannerAdRow
                ads = {
                  [
                    {
                      link: 'https://en.wikipedia.org/wiki/AltaVista',
                      image: './assets/advertisements/altavista.gif'
                    },
                    {
                      link: 'https://en.wikipedia.org/wiki/MSN_TV',
                      image: './assets/advertisements/webtvlogo.gif'
                    },
                  ]
                }
                style={this.state.pageStyle} />

              <Project
                projectInfo={tweetTheBayInfo}
                style={this.state.pageStyle} />

              <BannerAdRow
                ads = {
                  [
                    {
                      link: 'https://en.wikipedia.org/wiki/Napster',
                      image: './assets/advertisements/napster_premium.gif'
                    }
                  ]
                }
                style={this.state.pageStyle} />

              <Project
                projectInfo={hamhuckinInfo}
                style={this.state.pageStyle} />

            </section>

            <Footer style={this.state.pageStyle} />

          </main>

        </div>
      </div>
    )
  };
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});
