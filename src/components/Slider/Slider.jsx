import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';

const OurSlider = () => {
    const [slider, setSlider] = useState([]);

    useEffect(() => {
      const getSlider = async () => {
        try {
          const res = await axios.get('https://api.thelifeplushospital.co.in/insurance/get_insuranceslider');
          setSlider(res.data.data);
          console.log(res);
        } catch (e) {
          console.log(e.response.data);
        }
      };
  
      getSlider();
    }, []);
  
    

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true, 
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3
            }
          }
        ]
      };
  return (
    <div>
          <div className="premium-content">
        <div className="cta-insurance">
        <h2>Explore Our Premium Insurance Partnerships</h2>
        {/* <p>Discover a world of comprehensive coverage with our esteemed insurance partners.</p> */}
        </div>
     
       
      </div>  
        <Slider {...settings} className='slider-insurance'>
          {slider.map((slide, index) => (
            <div className="slider-item" key={slide._id}>
              <img src={slide?.insurance_image} alt="" className="insurance-img" />
              {/* <Link to={slide?.link} className="slider-link">
                <h3>{slide.name}</h3>
              </Link> */}
            </div>
          ))}
        </Slider>
  
    </div>
  )
}

export default OurSlider