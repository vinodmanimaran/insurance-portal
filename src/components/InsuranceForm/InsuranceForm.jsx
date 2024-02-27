import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import './InsuranceForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InsuranceForm = ({open ,onClose}) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    company: '',
    diseaseName: '',
    aadharFile: null,
    insuranceFile: null,
    reportFiles: [],
  });


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.age || !formData.gender || !formData.company || !formData.diseaseName) {
        toast.error('Please fill out all required fields');
        return;
      }
  
      try {
       setFormData() 
      } catch (error) {
        
      }
    // Handle form submission
    console.log('Form submitted');
    console.log(formData);
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleReportFilesChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files,
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} style={{border:"1px solid red"}}>
        <DialogTitle className='title-form'>Update your Insurance Application</DialogTitle>
        <DialogContent className='insurance_form'>
        <label htmlFor="name">Enter your Name</label>
  <input type="text" name="name" id="name" placeholder="Name" value={formData.name} onChange={handleChange} />
  
  <label htmlFor="age">Enter your age</label>
  <input type="text" name="age" id="age" placeholder="Age" value={formData.age} onChange={handleChange} />
  
  <label htmlFor="gender">Select Gender</label>
  <select name="gender" id="gender" value={formData.gender} onChange={handleChange}>
    <option value="" disabled hidden>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  
  <label htmlFor="aadharFile">Upload your Aadhar</label>
  <input type="file" accept=".pdf,.jpg,.png" name="aadharFile" id="aadharFile" onChange={handleFileChange} />
  
  <label htmlFor="company">Select Company</label>
  <select name="company" id="company" onChange={handleChange} value={formData.company}>
    <option value="" disabled hidden>Select Company</option>
    <option value="company1">Company 1</option>
    <option value="company2">Company 2</option>
    <option value="company3">Company 3</option>
  </select>
  
  <label htmlFor="insuranceFile">Upload your insurance docs</label>
  <input type="file" accept=".pdf,.jpg,.png" name="insuranceFile" id="insuranceFile" onChange={handleFileChange} />
  
  <label htmlFor="diseaseName">Enter Disease Name</label>
  <input type="text" name="diseaseName" id="diseaseName" placeholder="Disease Name" onChange={handleChange} value={formData.diseaseName} />
 
  <label htmlFor="reportFiles">Disease Reports and Prescription Docs</label>
  <input type="file" accept=".pdf,.jpg,.png" name="reportFiles" id="reportFiles" multiple onChange={handleReportFilesChange} />

</DialogContent>

        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer/>
    </div>
  );
};

export default InsuranceForm;
