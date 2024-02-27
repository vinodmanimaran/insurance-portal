import React, { useEffect, useState } from 'react';

import './Content.css';
import OurSlider from '../Slider/Slider';

const Content = () => {
  

 
  return (
    <div className="container">
      <div className="additional-content">
        <h2>Why Choose Our Hospital for Your Healthcare Needs?</h2>
        <ul>
          <li>Bespoke Coverage: Our extensive network of insurance partnerships ensures that your employees have access to a diverse range of healthcare plans, crafted to suit your company's unique requirements.</li>
          <li>Exceptional Care: With a reputation for excellence in medical services,we  guarantees world-class treatment and personalized care for all covered individuals.</li>
          <li>Streamlined Processes: Our dedicated team of insurance specialists is committed to simplifying the insurance verification process, minimizing administrative burdens, and maximizing efficiency for your HR department.</li>
          <li>Transparency and Accountability: We maintain transparent communication channels to facilitate a clear understanding of insurance coverage, co-payments, deductibles, and other financial aspects, ensuring peace of mind for both employers and employees.</li>
        </ul>
        <p>If your preferred insurance partner is not listed or if you have any inquiries regarding coverage, our dedicated insurance department is always available to provide assistance.</p>
        <div className="start-journey">
  <h2>Start Your Journey Today</h2>
  <p>Empower your workforce with the confidence and security of comprehensive healthcare coverage. Explore our  Insurance Portal to verify coverage, understand benefits, and schedule appointments with ease. Let us be your partner in fostering a healthier, more productive workplace environment.</p>
</div>

      </div>
    </div>
  );
};

export default Content;
