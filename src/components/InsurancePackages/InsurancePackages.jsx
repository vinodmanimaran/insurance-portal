import React, { useRef } from 'react';
import './InsurancePackages.css';
import Car from '../../assets/insurance_/Car.jpg'
import TermInsurance from '../../assets/insurance_/Family.jpg'
import House from '../../assets/insurance_/House.jpg'
import Travel from '../../assets/insurance_/Travel.jpg'
import Health from '../../assets/insurance_/health_insurance.jpg'

import { Avatar, Button, Card } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
ArrowForward
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';

const InsurancePackages = () => {
  const navigate=useNavigate()
  const sliderControl=useRef(null)

  const nextSlide = () => {
    sliderControl.current.slickNext();
  };

  const prevSlide = () => {
    sliderControl.current.slickPrev();
  };


    const insurancePackages = [
        {
            name: "Car Insurance",
            coverage: ["Third Party Liability", "Own Damage"],
            deductible: "Rs. 1,000",
            premium: "Rs. 5,000/year",
            description: "Provides coverage for damage to your vehicle and third-party liability.",
            benefits: ["Coverage for bodily injury", "Coverage for property damage"],
              image: Car
        },
        {
            name: "Health Insurance",
            coverage: ["Hospitalization Expenses", "Preventive Healthcare"],
            deductible: "Rs. 0",
            premium: "Rs. 15,000/year",
            description: "Offers coverage for medical expenses and preventive healthcare services.",
            benefits: ["Cashless hospitalization", "Coverage for pre-existing conditions after waiting period"],
              image:Health
        },
        {
            name: "Travel Insurance",
            coverage: ["Trip Cancellation", "Emergency Medical Coverage", "Lost Luggage"],
            deductible: "Varies",
            premium: "Rs. 500/trip",
            description: "Provides coverage for unexpected events while traveling, such as trip cancellation, medical emergencies, and lost luggage.",
            benefits: ["Reimbursement for canceled trips", "Coverage for medical expenses abroad"],
              image: Travel
        },
        {
            name: "Term Life Insurance",
            coverage: ["Death Benefit"],
            deductible: "N/A",
            premium: "Rs. 500/month",
            description: "Provides coverage for a specified term, offering financial protection to your beneficiaries in case of death during the policy term.",
            benefits: ["Financial security for loved ones", "Income replacement for dependents"],
              image: TermInsurance
        },
        {
            name: "Home Insurance",
            coverage: ["Building Structure", "Household Contents", "Liability Coverage"],
            deductible: "Rs. 2,500",
            premium: "Rs. 5,000/year",
            description: "Provides comprehensive coverage for your home and belongings against various risks.",
            benefits: ["Protection against fire, theft, and natural calamities", "Coverage for personal belongings"],
              image: House
        }
    ];

    const settings = {
        infinite: true,
        speed: 500,
        // autoplay: true, 
        // autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              // infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>  
        <div className="container-fluid">
            <div className="package-main-title">
                <h3 className='main-title'>Packages provided</h3>
            </div>
            <Slider {...settings} className='slider' ref={sliderControl}>
                {insurancePackages.map((pack, index) => (
                    <div key={index} className='insurance-card'>
                        <div className="row">
                            <div className="col-6">
                                <div className="package-images">
                                    <Avatar src={pack.image} alt='package_image' sx={{width:"100px",height:"100px"}} className='avatar'/>
                                </div>
                            </div>
                            <div className="col-6">
                                <h5 className='package-title'>{pack.name}</h5>
                            </div>
                        </div>
                        <div className="insurance-package">
                            <p><strong>Coverage:</strong> <br/>{pack.coverage.join(', ')}</p>
                            <p><strong>Deductible:</strong> <br/>{pack.deductible}</p>
                            <p><strong>Premium:</strong><br/> {pack.premium}</p>
                            <p><strong>Description:</strong><br/> {pack.description}</p>
                            <p><strong>Benefits:</strong></p>
                            <ul className='list-item'>
                                {pack.benefits.map((benefit, idx) => (
                                    <li key={idx} >{benefit}</li>
                                ))}
                            </ul>
                            <button className='apply' onClick={()=>{
                              navigate("/")
                            }}>Apply Now</button>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* <div className="controls">
        <ArrowBack className="arrow-prev" onClick={prevSlide}/>
        <ArrowForward className="arrow-next" onClick={nextSlide}/>
      </div> */}
        </div>
        </>
    );
}

export default InsurancePackages;
