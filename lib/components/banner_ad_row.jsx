import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BannerAdRow extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hovered: false
    // };

    // this.changeLook = this.changeLook.bind(this);
  }

  // changeLook() {
  //   this.setState({ hovered: true })
  // }

  render () {
    const bannerAds = this.props.ads.map(ad => {
      return (
        <a key={Math.random()} href={`${ad.link}`} target="_blank">
          <img className='banner-ad' src={`${ad.image}`} />
        </a>
      )
    });

    const oldLookBannerRow = (
      <div key={Math.random()} className='old-banner-row-container'>
        <div className='old-banner-row'>
          {bannerAds}
        </div>
      </div>
    );

    const newLookBannerRow = (
      <div key={Math.random()} className='new-banner-row-container'>
        <div className='new-banner-row'>
          <div className='new-banner-row-divider'></div>
        </div>
      </div>
    );

    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.props.style === "new" ? newLookBannerRow : oldLookBannerRow }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

export default BannerAdRow;
