import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SoSpecialWrapper from "./slider.styles";
import Image1 from "../../../slide1.png";
import Image2 from "../../../slide2.png";
import Image3 from "../../../slide3.png";
import Image4 from "../../../slide4.png";
import Image5 from "../../../slide5.png";

const SoSpecial = ({ theme }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.2,

        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <SoSpecialWrapper>
      <div className="so-special-head">
      </div>
      <div className="special_carousel">
        <Slider {...settings}>
<div style={{marginTop : "13rem" }}>
           <img src={Image1}/>
          </div>
          <div>
           <img src={Image2}/>
          </div>
          <div>
           <img src={Image3} style={{width: "14rem"}}/>
          </div>
          <div>
            <img src={Image4}/>
          </div>
          <div>
            <img src={Image5}/>
          </div>

        </Slider>
      </div>
    </SoSpecialWrapper>
  );
};

export default SoSpecial;