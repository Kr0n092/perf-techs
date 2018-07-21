import React, { Component } from 'react';
import Slider from "react-slick";

class App extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
            <img src="/images/god.jpg" alt="Picture of God here" />
        </div>
        <div>
            <img src="/images/ColdRipple.jpg" alt="Picture of water"/>
        </div>
        <div>
            <img src="/images/DarkestHour.jpg" alt="Image of lake" />
        </div>
        <div>
            <img src="/images/Firewatch1.jpg" alt="Image of Firewatch game" />
        </div>
        <div>
            <img src="/images/Firewatch2.jpg" alt="Image of Firewacht game 2" />
        </div>
        <div>
            <img src="/images/matterhorn.jpg" alt="Image of the Matterhorn mountain" />
        </div>
        <div>
            <img src="/images/mountains-blue-overview.png" alt="Image of blue mountains" />
        </div>
        <div>
            <img src="/images/OneStandsOut.jpg" alt="Image of irregular flower in field of flowers" />
        </div>
        <div>
            <img src="/images/Path.jpg" alt="Image of path through the woods" />
        </div>
        <div>
            <img src="/images/wallhaven-bridge.png" alt="Image of a bridge" />
        </div>
        <div>
            <img src="/images/wallhaven-forest.jpg" alt="Image of a forest" />
        </div>
      </Slider>
    )
  };
}

export default App