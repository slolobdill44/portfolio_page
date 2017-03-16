import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BannerAdRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    };

    this.changeLook = this.changeLook.bind(this);
  }

  changeLook() {
    this.setState({ hovered: true })
  }

  render () {
    const bannerAds = this.props.ads.map(ad => {
      return (
        <a key={Math.random()} href={`${ad.link}`} target="_blank">
          <img className='banner-ad' src={`${ad.image}`} />
        </a>
      )
    });

    const oldLookBannerRow = (
      <div key={Math.random()} className='old-banner-row' onMouseEnter={() => this.changeLook()}>
        {bannerAds}
      </div>
    );

    const newLookBannerRow = (
      <div key={Math.random()} className='new-banner-row'>
        {bannerAds}
      </div>
    );

    return (
      <div className='banner-row-container'>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.state.hovered ? newLookBannerRow : oldLookBannerRow }
        </ReactCSSTransitionGroup>
      </div>
    )
  }

}

export default BannerAdRow;
