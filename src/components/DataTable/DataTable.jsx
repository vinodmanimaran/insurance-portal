import React ,{useState,useEffect} from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel,TableContainer, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Tooltip from '@mui/material/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InsuranceForm from '../InsuranceForm/InsuranceForm';
import { Button } from '@mui/material';

const DataTable = () => {
    const [orderBy, setOrderBy] = useState('id');
    const [order, setOrder] = useState('asc');
    const [deleteId, setDeleteId] = useState(null);
    const [openForm, setOpenForm] = useState(false);

    const handleDelete = (id) => {
        setDeleteId(id);
    };

    const handleDeleteConfirmation = () => {

        setDeleteId(null);

        toast.success("Your Form deleted successfully")
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


      const sortedApplications = [...insuranceApplications].sort((a, b) => {
        if (order === 'asc') {
            return a[orderBy] > b[orderBy] ? 1 : -1;
        } else {
            return a[orderBy] < b[orderBy] ? 1 : -1;
        }
    });
      
  return (
    <div>
            <InsuranceForm open={openForm} onClose={() => setOpenForm(false)} /> {/* Include the InsuranceForm component with open and onClose props */}
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

<div className="insurance-datas">
<div className="insurance-data">
   <h4 className='heading-form'>My Applications</h4>
  </div>
 <div className="data-table ">


<TableContainer >


<Table  >
    
            <TableHead>
                <TableRow>
                    <TableCell>
                        <TableSortLabel
                            active={orderBy === 'id'}
                            direction={order}
                            onClick={() => handleSortRequest('id')}
                        >
                            ID
                        </TableSortLabel>
                    </TableCell>
                    <TableCell>
                        <TableSortLabel
                            active={orderBy === 'date'}
                            direction={order}
                            onClick={() => handleSortRequest('date')}
                        >
                            Date
                        </TableSortLabel>
                    </TableCell>
                    <TableCell>
                        <TableSortLabel
                            active={orderBy === 'name'}
                            direction={order}
                            onClick={() => handleSortRequest('name')}
                        >
                            Name
                        </TableSortLabel>
                    </TableCell>
                    <TableCell>
                        <TableSortLabel
                            active={orderBy === 'disease'}
                            direction={order}
                            onClick={() => handleSortRequest('disease')}
                        >
                            Disease
                        </TableSortLabel>
                    </TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell className='action'>User actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {sortedApplications.map(application => (
                    <TableRow key={application.id}>
                        <TableCell className='data'>{application.id}</TableCell>
                        <TableCell className='data'>{application.date}</TableCell>
                        <TableCell className='data'>{application.name}</TableCell>
                        <TableCell className='data'>{application.disease}</TableCell>
                        <TableCell className='data'>
  <Link>{getStatusIcon(application.status)}</Link>
</TableCell>


                        <TableCell>
                            <div className=" row">
                                <IconButton className="icon-button col-xxl-6 col-xl-6  col-lg-6 col-md-6" onClick={() =>setOpenForm(true)}>
  <EditIcon className="icon edit-icon" />
</IconButton>
                                <IconButton className="icon-button col-xxl-6 col-xl-6  col-lg-6 col-md-6" onClick={() => handleDelete(application.id)}>
  <DeleteIcon className="icon delete-icon" />
</IconButton>
                            </div>
                       


            </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

</TableContainer>

 </div>
 
</div>
    </div>
  )
}

export default DataTable