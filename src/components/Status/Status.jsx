import React from 'react';
import { Container, Paper, Button, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DoneIcon from '@mui/icons-material/Done';
import BlockIcon from '@mui/icons-material/Block';
import header from  '../../assets/insurance_/insurance-header.jpg';

import Statusimg from '../../assets/insurance_/status.svg';
import './Status.css';
import { useNavigate } from 'react-router-dom';
const Status = () => {
const navigate=useNavigate()

  const handleDelete = () => {
    // window.location.reload();
    navigate("/insurance")
}


const handleUpdate=()=>{
  navigate("/applyinsurance")
}

  return (
<>
<div className="row">
                    <div className="banner" style={{ backgroundImage: `url(${header})` }}>
                        <div className="content">
                            <h1>Protect What Matters Most</h1>
                            <p>Find peace of mind knowing your assets are safeguarded. Explore our comprehensive insurance plans tailored to fit your needs.</p>
                        </div>
                    </div>
                </div>

                <Container>



      <Paper className='applicationstatus' elevation={5} sx={{background:"#f8f8ff"}}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <img src={Statusimg} alt='' className='status-img'/>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
            <div className="status-container">
              <div className="status-item">
                <CheckCircleIcon color="primary" className="status-icon" />
                <Typography variant="body1" className="status-text">Application Submitted</Typography>
              </div>
              <div className="status-item">
                <HourglassEmptyIcon color="primary" className="status-icon" />
                <Typography variant="body1" className="status-text">Under Review</Typography>
              </div>
              <div className="status-item">
                <DoneIcon color="primary" className="status-icon" />
                <Typography variant="body1" className="status-text">Approved</Typography>
              </div>
              <div className="status-item">
                <BlockIcon color="error" className="status-icon" />
                <Typography variant="body1" className="status-text">Denied</Typography>
              </div>
            </div>


<div className="content-box">
  Patient Details like name ,age ,
</div>

          </div>
        </div>
      </Paper>
    </Container>
</>

    
  );
};

export default Status;
