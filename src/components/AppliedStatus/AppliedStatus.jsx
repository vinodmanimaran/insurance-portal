import React, { useState } from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Paper, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tooltip from '@mui/material/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import './AppliedStatus.css';
import InsuranceForm from '../InsuranceForm/InsuranceForm';


const AppliedStatus = () => {
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [openForm, setOpenForm] = useState(false);


    const handleViewDetails = (application) => {
        setSelectedApplication(application);
    };

    const handleCloseDetails = () => {
        setSelectedApplication(null);
    };

    const handleDelete = (id) => {
        setDeleteId(id);
    };

    const handleDeleteConfirmation = () => {
        setDeleteId(null);
        toast.success("Your Form deleted successfully");
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

   // Generate random insurance applications data with different application names
const insuranceApplications = [
  {
      id: 1,
      date: '2024-02-15',
      name: 'Life Insurance',
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
      name: 'Car Insurance',
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
      name: 'Travel Insurance',
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
      name: 'Home Insurance',
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
      name: 'Pet Insurance',
      disease: 'Cancer',
      status: 'Approved',
      documents: [
          { name: 'Aadhar Card', uploaded: true },
          { name: 'Insurance Documents', uploaded: true },
          { name: 'Medical Reports', uploaded: true }
      ]
  }
];


    return (

      <div className="container">
        <h3 className='applied_status-title'>My Applications</h3>
  <Grid spacing={5}>
           <InsuranceForm open={openForm} onClose={() => setOpenForm(false)} />
            {insuranceApplications.map((application) => (
                <Grid item xs={12} sm={6} md={4} key={application.id}>
                    <Card className='data-card' >

                        <CardContent className='content-card'> 
                            <Typography variant="h6" component="div" className='card-name'>
                                {application.name}
                            </Typography>
                           
                            <Typography variant="body2" color="textSecondary" className='card-status'>
                                Status: {getStatusIcon(application.status)}
                            </Typography>
                        </CardContent>
                        <CardActions className='action'>
                            <Button size="small" onClick={() => handleViewDetails(application)} className='view-details'>View Details</Button>

                            <IconButton  onClick={() =>setOpenForm(true)}>
  <EditIcon  />
</IconButton>
                            <IconButton onClick={() => handleDelete(application.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            <Dialog open={Boolean(selectedApplication)} onClose={handleCloseDetails} >
                {selectedApplication && (
                    <>
                        <DialogTitle>{selectedApplication.name}</DialogTitle>
                        <DialogContent className='view-details-box'>
                            <Typography className='view-details_text'>Date: {selectedApplication.date}</Typography>
                            <Typography>Disease: {selectedApplication.disease}</Typography>
                            <Typography>Status: {selectedApplication.status}</Typography>
                            <Typography>Documents:</Typography>
                            <ul>
                                {selectedApplication.documents.map((document, index) => (
                                    <li key={index}>{document.name}: {document.uploaded ? 'Uploaded' : 'Not Uploaded'}</li>
                                ))}
                            </ul>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDetails}>Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
            <Dialog open={Boolean(deleteId)} onClose={() => setDeleteId(null)}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <Typography>Are you sure you want to delete this Application?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteConfirmation}>Delete</Button>
                    <Button onClick={() => setDeleteId(null)}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Grid>
      </div>
      
    );
};

export default AppliedStatus;
