import React, { Component } from 'react';
import Slider from 'react-slick';

class Slick extends Component {
  render() {
    let settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        className: 'slides'
    };
    return (
      <div className='box-slider'>
        <Slider {...settings}>
            <div>
                <img alt='' src="http://gbchope.com/wp-content/uploads/2016/10/events-placeholder.jpg"/>
                <p>Here is my project that cures cancer</p>
            </div>
            <div>
                <img alt='' src="http://www.germandrive.com/wp-content/uploads/2017/05/placeholder.gif"/>
                <p>Here is my project that cures world hunger</p>
            </div>
        </Slider>
      </div>
    );
  }
}

export default Slick;