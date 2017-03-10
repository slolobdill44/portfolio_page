import React from 'react';

class BannerAdRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const bannerAds = this.props.ads.map(ad => {
      return (
        <a key={Math.random()} href={`${ad.link}`} target="_blank">
          <img className='banner-ad' src={`${ad.image}`} />
        </a>
      )
    });

    return (
      <div className='banner-row'>
        {bannerAds}
      </div>
    )
  }

}

export default BannerAdRow;
