import React from 'react';
import './Eligibility.css';
import { AccountCircle, LocationOn, LocalHospital, Work, DirectionsCar,Home } from '@mui/icons-material';

const Eligibility = () => {
  const eligibilityCriteria = [
    {
      criterion: "Age",
      description: "Applicants must typically be between 18 and 65 years old.",
      icon: <AccountCircle />
    },
    {
      criterion: "Residency",
      description: "Applicants must be legal residents of the country where the insurance policy is being offered.",
      icon: <LocationOn />
    },
    {
      criterion: "Health Status",
      description: "Applicants must disclose their current health status and medical history.",
      icon: <LocalHospital />
    },
    {
      criterion: "Occupation",
      description: "Certain high-risk occupations may affect eligibility or require additional premium payments.",
      icon: <Work />
    },
    {
      criterion: "Driving Record",
      description: "For Vechicle insurance, applicants must have a valid driver's license and a clean driving record.",
      icon: <DirectionsCar />
    },
    {
      criterion: "Property Ownership",
      description: "Applicants must own a property to be eligible for certain coverage options.",
      icon: <Home />
    }
  ];

  return (
    <div className="eligibility-container">
      <h2 className="eligibility-title">Our Eligibility Criteria</h2>
      <div className="eligibility-list">
        {eligibilityCriteria.map((criteria, index) => (
          <div key={index} className="eligibility-item " >
            <div className="criteria-info">

              {/* <h3>{criteria.criterion}</h3> */}
              <span className="icon">{criteria.icon}</span>

              <p className='eligibilty-info'>
{criteria.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eligibility;
