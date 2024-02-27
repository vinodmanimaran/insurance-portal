import React from 'react';
import './OurApplication.css';
import InsurancePackages from '../../components/InsurancePackages/InsurancePackages';
import Eligibility from '../../components/Eligibility/Eligibility'; 
import Remarks from '../../components/Remarks/Remarks';
import OurSlider from '../../components/Slider/Slider';
import header from '../../assets/insurance_/application_header.jpg';
import AppliedStatus from '../../components/AppliedStatus/AppliedStatus';

const OurApplication = () => {
  return (
    <div className='application_page'>
      <div className="row">
        <div className="banner_application" style={{ backgroundImage: `url(${header})` }}>
          <div className="content_application_banner">
            <h1 >Secure Your Future Today</h1>
            {/* <p>Discover our wide range of insurance options designed to suit your lifestyle.</p> */}
          </div>
        </div>
      </div>

      <OurSlider/>

      <AppliedStatus/>

      <Eligibility/>

      <InsurancePackages/>

      <Remarks/>

    </div>
  )
}

export default OurApplication;
