import React, { useEffect, useState } from 'react';
import './Home.css'; 
import header from  '../../assets/insurance_/insurance-header.jpg';
import insurance from  '../../assets/insurance_/insurance.jpg';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import HealingIcon from '@mui/icons-material/Healing';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Applied from '../../assets/insurance_/applied.svg'
import Health from '../../assets/insurance_/health.jpg'
import FooterCTA from '../../assets/insurance_/insurance.jpg'
import InsuranceForm from '../../components/InsuranceForm/InsuranceForm.jsx';
import Status from '../../components/Status/Status.jsx';
import { useNavigate,Link } from 'react-router-dom';
import { Container, Paper, Button, Typography, TableContainer } from '@mui/material';
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel  } from '@mui/material';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import InsuranceContent from '../../components/Content/Content.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [formData, setFormData] = useState({      
        name: '',
        age: '',
        gender: '',
        aadharCard: null,
        insuranceCompany: '',
        insuranceDocs: null,
        diseaseName: '',
        diseaseReports: null
    });
    const [activeStep, setActiveStep] = useState(0);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [insuranceDocs, setInsuranceDocs] = useState(null);
    const navigate=useNavigate()
    const [orderBy, setOrderBy] = useState('id');
    const [deleteId, setDeleteId] = useState(null);

    const [openForm, setOpenForm] = useState(false);
    const [order, setOrder] = useState('asc');
    const handleDelete = (id) => {
        setDeleteId(id);
    };


   

    const insuranceApplications = [
        {
          id: 1,
          date: '2024-02-15',
          name: 'John Doe',
          disease: 'Heart Disease',
          status: 'Pending',
          documents: [
            { name: 'Aadhar Card', uploaded: true },
            { name: 'Insurance Documents', uploaded: true },
            { name: 'Medical Reports', uploaded: false }
          ]
        },
        {
          id: 2,
          date: '2024-02-14',
          name: 'Jane Smith',
          disease: 'Diabetes',
          status: 'Approved',
          documents: [
            { name: 'Aadhar Card', uploaded: true },
            { name: 'Insurance Documents', uploaded: true },
            { name: 'Medical Reports', uploaded: true }
          ]
        },
        {
          id: 3,
          date: '2024-02-13',
          name: 'Alice Johnson',
          disease: 'High Blood Pressure',
          status: 'Pending',
          documents: [
            { name: 'Aadhar Card', uploaded: true },
            { name: 'Insurance Documents', uploaded: false },
            { name: 'Medical Reports', uploaded: false }
          ]
        },
        {
          id: 4,
          date: '2024-02-12',
          name: 'Bob Williams',
          disease: 'Asthma',
          status: 'Denied',
          documents: [
            { name: 'Aadhar Card', uploaded: true },
            { name: 'Insurance Documents', uploaded: true },
            { name: 'Medical Reports', uploaded: true }
          ]
        },
        {
          id: 5,
          date: '2024-02-11',
          name: 'Emily Brown',
          disease: 'Cancer',
          status: 'Approved',
          documents: [
            { name: 'Aadhar Card', uploaded: true },
            { name: 'Insurance Documents', uploaded: true },
            { name: 'Medical Reports', uploaded: true }
          ]
        }
      ];
      

      const steps = ['Personal Information', 'Insurance Details', 'Health Information'];

      const handleEdit = (id) => {

      };
    
      const getStatusIcon = (status) => {
        let icon;
        let tooltipText;
    
        switch (status) {
            case 'Pending':
                icon = <ErrorIcon color="warning" />;
                tooltipText = 'Pending';
                break;
            case 'Approved':
                icon = <CheckCircleIcon color="success" />;
                tooltipText = 'Approved';
                break;
            case 'Denied':
                icon = <CancelIcon color="error" />;
                tooltipText = 'Denied';
                break;
            default:
                icon = null;
                tooltipText = 'Unknown Status';
        }
    
        return (
            <Tooltip title={tooltipText} arrow>
                {icon}
            </Tooltip>
        );
    };
    
      

      const handleDeleteConfirmation = () => {

        setDeleteId(null);

        toast.success("Your Form deleted successfully")
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSortRequest = (property) => {
        const isAscending = orderBy === property && order === 'asc';
        setOrder(isAscending ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const sortedApplications = [...insuranceApplications].sort((a, b) => {
        if (order === 'asc') {
            return a[orderBy] > b[orderBy] ? 1 : -1;
        } else {
            return a[orderBy] < b[orderBy] ? 1 : -1;
        }
    });


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const handleFileChange = (e) => {
        setInsuranceDocs(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.name || !formData.age || !formData.gender || !formData.aadharCard || !formData.insuranceCompany || !formData.insuranceDocs || !formData.diseaseName || !formData.diseaseReports) {
            toast.error('Please fill out all required fields');
            return;
        }
try{


}catch(e){
    console.log(e.response.data)
}        

    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <>
                        <div className="row">
                            <div className="col-xxl col-xl col-lg col-md">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder='Enter your name' value={formData.name} onChange={handleInputChange} />
                            </div>
                            <div className="col-xxl col-xl col-md col-lg">
                                <label htmlFor="age">Age:</label>
                                <input type="text" id="age" name="age" placeholder='Enter your age' value={formData.age} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl  col-xl col-md col-lg">
                                <label htmlFor="gender">Gender:</label>
                                <select id="gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                                    <option value="" className='gender'>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="col-xxl  col-xl col-md col-lg">
                                <label htmlFor="aadharCard">Upload Aadhar Card:</label>
                                <input type="file" id="aadharCard" name="aadharCard" placeholder='Upload your aadhar' onChange={handleFileChange} />
                            </div>
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="row">
                            <div className="col-xxl  col-xl col-md col-lg">
                                <label htmlFor="insuranceCompany">Insurance Company:</label>
                                <select id="insuranceCompany" name="insuranceCompany" value={formData.insuranceCompany} onChange={handleInputChange}>
                                    <option value="">Select insurance company</option>
                                    <option value="Company A">Company A</option>
                                    <option value="Company B">Company B</option>
                                    <option value="Company C">Company C</option>
                                </select>
                            </div>
                            <div className="col-xxl  col-xl col-md col-lg">
                                <label htmlFor="insuranceDocs">Upload Insurance Documents:</label>
                                <input type="file" id="insuranceDocs" name="insuranceDocs" onChange={handleFileChange} />
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="row">
                            <div className="col-xxl  col-xl col-md col-lg">
                                <label htmlFor="diseaseName">Disease Name:</label>
                                <input type="text" id="diseaseName" name="diseaseName" placeholder='Enter the disease name' value={formData.diseaseName} onChange={handleInputChange} />
                            </div>
                            <div className="col-xxl  col-xl col-md col-lg">
                                <label htmlFor="diseaseReports">Upload Disease Reports and Prescription Docs:</label>
                                <input type="file" id="diseaseReports" name="diseaseReports" placeholder='Upload the disease Reports and prescription docs' onChange={handleFileChange} />
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="banner" style={{ backgroundImage: `url(${header})` }}>
                        <div className="content_application_banner">
                            <h1>Protect What Matters Most</h1>
                            {/* <p>Find peace of mind knowing your assets are safeguarded. Explore our comprehensive insurance plans tailored to fit your needs.</p> */}
                        </div>
                    </div>
                </div>
                {/* <Link to="/myapplications">Check out your applications</Link> */}

<InsuranceContent/>


<div className="row">
    <div className="col-xxl-12 col-xl-12  col-lg-12 col-md-12 forms">
    <form onSubmit={handleSubmit} id="form-section">
  <Paper className='form-card' elevation={5} sx={{borderRadius:"20px",background:"#f8f8ff"}}>

<Stepper activeStep={activeStep} alternativeLabel  className='steps-label'>
   {steps.map((label) => (
       <Step key={label}>
           <StepLabel className='steps-label-text'><p>{label}</p></StepLabel>
       </Step>
   ))}
</Stepper>
<div>
   {activeStep === steps.length ? (
       <div>
           <div className="row">
               <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                   <img src={Applied} alt="" className='apply-image'/>


               </div>
               <div className="col-xxl-6 col-xl-6 col-md-6 col-lg-6">
               <h2 className='applied'>You are successfully applied for insurance</h2>

               </div>
           </div>
       </div>
   ) : (
       <div>
           {renderStepContent(activeStep)}
           <div className="button-group">
               <Button disabled={activeStep === 0} onClick={handleBack} >Back</Button>
               <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext} className='submit'> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
           </div>
       </div>
   )}
</div>
</Paper>

  </form>
    </div>
<div className="row">
<div className="col-xxl-12 col-xl-6  col-lg-6 col-md-6">

 {/* <div className="cta-footer">
  <div className="cta-footer-img">
    <img src={insurance} alt="Insurance" />
  </div>
  <h2>Get Covered Today</h2>
  <p >Protect yourself and your loved ones with comprehensive insurance coverage. Whether it's medical, dental, vision, or life insurance, we've got you covered.</p>
  <a href="#" className="cta-button">Learn More</a>
</div> */}

</div>
</div>

</div>
            
            </div>
        </>
    );
}

export default Home;
