import React, { useState } from 'react';
import './Remarks.css';
import { AccessTime} from '@mui/icons-material';
const Remarks = () => {
    const [showAllRemarks, setShowAllRemarks] = useState(false);

    const teamRemarks = [
        {
            remarkId: 1,
            dateTime: "2024-02-22 10:00 AM",
            interactionDetails: "Customer John Smith called regarding a claim for his automobile policy (Policy #123456789). He reported an accident that occurred yesterday, providing details of the incident and the other party involved. Claim filed for review.",
            recommendations: "Advise customer to submit any supporting documentation and photos via the online portal. Assign claim to adjuster for further investigation and processing.",
            teamMemberRemarks: "Spoke with Mr. Smith, who was cooperative and provided all necessary information. Assigned claim #789012 to adjuster Jane Doe for review. Follow-up scheduled for next week."
        },
        {
            remarkId: 2,
            dateTime: "2024-02-21 3:30 PM",
            interactionDetails: "Received an email inquiry from John Doe regarding coverage options for a new commercial property he is acquiring. Provided information on available policy options and coverage limits.",
            recommendations: "Advise Mr. Doe to schedule a call for further discussion and customization of the policy to meet his specific needs. Prepare quotes for different coverage options to present during the call.",
            teamMemberRemarks: "Mr. Doe expressed appreciation for the prompt response and requested a call to discuss further. Task assigned to sales representative for follow-up and consultation."
        },
        {
            remarkId: 3,
            dateTime: "2024-02-20 11:45 AM",
            interactionDetails: "Customer Sarah Johnson called to report a minor fender-bender while driving her insured vehicle. Provided details of the incident and requested guidance on filing a claim.",
            recommendations: "Assure Ms. Johnson that her claim will be processed promptly. Advise her to submit photos of the damage and any relevant documents via the online claims portal. Assign claim to claims adjuster for review and processing.",
            teamMemberRemarks: "Ms. Johnson was understandably shaken but cooperative during the call. Provided reassurance and instructions for claim submission. Claim #123456789 assigned to adjuster for further action."
        },
        {
            remarkId: 4,
            dateTime: "2024-02-19 9:15 AM",
            interactionDetails: "Received a fax from ABC Corporation requesting a certificate of insurance for their upcoming event. Processed the request and sent the certificate via email to the designated contact.",
            recommendations: "Follow up with ABC Corporation to ensure they have received the certificate and address any additional questions or concerns they may have.",
            teamMemberRemarks: "Completed the certificate request in a timely manner. Noted the event details and contact information for future reference."
        },
        {
            remarkId: 5,
            dateTime: "2024-02-18 2:00 PM",
            interactionDetails: "Met with Mr. James regarding renewal options for his homeowners insurance policy. Discussed coverage limits, deductible options, and premium rates for the upcoming policy term.",
            recommendations: "Prepare a customized quote based on Mr. James' preferences and provide additional information on available discounts or bundling options.",
            teamMemberRemarks: "Mr. James expressed interest in exploring different coverage levels and requested a follow-up call to review the customized quote."
        },
        {
            remarkId: 6,
            dateTime: "2024-02-17 4:45 PM",
            interactionDetails: "Received a phone call from Mrs. Patel regarding a billing inquiry. Reviewed the account history and addressed Mrs. Patel's concerns regarding an incorrect charge.",
            recommendations: "Adjust the billing statement to reflect the correct amount and issue a refund for any overpayment. Provide Mrs. Patel with a revised statement for her records.",
            teamMemberRemarks: "Mrs. Patel was appreciative of the assistance provided and expressed satisfaction with the resolution of the billing issue."
        },
        {
            remarkId: 7,
            dateTime: "2024-02-16 11:30 AM",
            interactionDetails: "Conducted a policy review with Mr. and Mrs. Thompson to assess their current coverage needs and discuss any changes or updates since their last review.",
            recommendations: "Update the policy to reflect changes in the insured property, additional drivers, or any new coverage options that may be beneficial to the Thompsons.",
            teamMemberRemarks: "Mr. and Mrs. Thompson were pleased with the policy review process and appreciated the opportunity to ensure their coverage aligns with their current circumstances."
        },
        {
            remarkId: 8,
            dateTime: "2024-02-15 1:45 PM",
            interactionDetails: "Received an online quote request from Ms. Garcia for an auto insurance policy. Reviewed the information provided and prepared a customized quote based on her coverage preferences.",
            recommendations: "Send the customized quote to Ms. Garcia via email and follow up with a phone call to discuss the quote in more detail and answer any questions she may have.",
            teamMemberRemarks: "Ms. Garcia's quote request included specific details about her driving history and coverage needs, making it easy to tailor the quote to her requirements."
        },
        {
            remarkId: 9,
            dateTime: "2024-02-14 10:30 AM",
            interactionDetails: "Met with Mr. Johnson to discuss options for adding a life insurance policy to his existing coverage portfolio. Provided information on different policy types, coverage amounts, and premium rates.",
            recommendations: "Schedule a follow-up meeting with Mr. Johnson to review policy illustrations and finalize the application process for the selected life insurance policy.",
            teamMemberRemarks: "Mr. Johnson expressed interest in exploring life insurance options to provide financial security for his family and appreciated the comprehensive information provided during the meeting."
        },
        {
            remarkId: 10,
            dateTime: "2024-02-13 3:15 PM",
            interactionDetails: "Received a notification from the claims department regarding the settlement of a personal injury claim. Reviewed the claim details and processed the settlement payment.",
            recommendations: "Follow up with the claimant to ensure they have received the settlement payment and address any additional questions or concerns they may have.",
            teamMemberRemarks: "Settlement payment processed according to company procedures. Noted the claim reference number for future reference."
        },
        {
            remarkId: 11,
            dateTime: "2024-02-12 9:30 AM",
            interactionDetails: "Conducted an annual policy review with Mr. Smith to assess his current coverage needs and discuss any changes or updates since his last review.",
            recommendations: "Update the policy to reflect changes in the insured property, additional drivers, or any new coverage options that may be beneficial to Mr. Smith.",
            teamMemberRemarks: "Mr. Smith was satisfied with the policy review process and appreciated the opportunity to ensure his coverage aligns with his current circumstances."
        },
        {
            remarkId: 12,
            dateTime: "2024-02-11 2:45 PM",
            interactionDetails: "Received a request from a new client for a quote on a comprehensive insurance package. Gathered information on the client's assets, liabilities, and coverage preferences.",
            recommendations: "Prepare a comprehensive quote package tailored to the client's needs and provide additional information on available coverage options and policy features.",
            teamMemberRemarks: "New client expressed interest in exploring insurance options to protect their assets and expressed appreciation for the thorough consultation process."
        }
    ];
    


    const toggleRemarks = () => {
        setShowAllRemarks(!showAllRemarks);
    };

    return (
        <div className="remarks-container">
            <h3 className="team-remarks_title">
                Our Team Remarks
            </h3>
            <div className="team-remarks-container">
                {teamRemarks.slice(0, showAllRemarks ? teamRemarks.length : 3).map((remarks, index) => (
                    <div className="team-remarks_card" key={index}>
                        <div className="header-remark-card">
                            <div className="">
                                {/* <h5 className='remark_id'> #Remark{remarks.remarkId}</h5> */}
                            </div>
                            {/* <div className="time-container">
    <p>
        <span className='time-icon'><AccessTime/></span>
        <span className='time-text'>{remarks.dateTime}</span>
    </p>
</div> */}
                        </div>
                        <p className='interaction-detail'>{remarks.interactionDetails}</p>
                        <div className="recommendation">
                        <h4>Our Recommendations</h4> 
                        <p className='recommendations-detail'>{remarks.recommendations}</p>
                        </div>
                         <div className="remarks_from_team">
                         <h4>
                          Our Team Remarks
                            </h4>
                        <p>{remarks.teamMemberRemarks}</p>
                         </div>
                       
                    </div>
                ))}
            </div>
            <button className="view-more-button" onClick={toggleRemarks}>
                {showAllRemarks ? 'View Less' : 'View More'}
            </button>
        </div>
    );
};

export default Remarks;

