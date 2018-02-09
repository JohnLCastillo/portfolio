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
                <img alt='' src="http://www.mahsusat.com/images/other/672.jpg" height="602" width="902"/>
                <p>Here is my project that cures cancer</p>
            </div>
            <div>
                <img alt='' src="https://paradojadekaldor.files.wordpress.com/2017/12/italy-2080072_1280.jpg?w=1100" height="602" width="902"/>
                <p>Here is my project that cures world hunger</p>
            </div>
        </Slider>
      </div>
    );
  }
}

export default Slick;