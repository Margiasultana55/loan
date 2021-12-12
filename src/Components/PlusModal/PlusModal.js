import React, { useState } from 'react';
import useAuth from '../../hook/useAuth'
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const PlusModal = ({ open, handleClose }) => {
    const { user } = useAuth();
    const initialInfo = { clientName: user?.displayName, email: user?.email }
    const [loanInfo, setLoanInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...loanInfo };
        newInfo[field] = value;
        setLoanInfo(newInfo);
        console.log(loanInfo);
    }

    const handleBookSubmit = e => {
        //collect data
        const appoinment = {
            ...loanInfo,

        }
        //send data to server
        fetch('https://limitless-sierra-06258.herokuapp.com/loans', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                if (data.insertedId) {
                    alert('Registered successfully');
                    handleClose();
                }

            })



        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography style={{ color: 'rgb(10, 155, 212)', marginTop: '10px', marginBottom: '10px', marginLeft: '9px' }}>
                        Register For Loan.
                    </Typography>
                    <form onSubmit={handleBookSubmit}>
                        <TextField
                            label="email"
                            sx={{ m: 1, width: '90%' }}
                            id="outlined-size-small"
                            name="email"

                            onBlur={handleOnBlur}
                            defaultValue={user?.email}
                            size="small"
                        />
                        <TextField
                            label="name"
                            sx={{ m: 1, width: '90%' }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={user?.displayName}
                            size="small"
                        />
                        <TextField
                            label="adress"
                            sx={{ m: 1, width: '90%' }}
                            id="outlined-size-small"
                            name="adress"
                            onBlur={handleOnBlur}
                            size="small"
                        />

                        <TextField
                            label="PAN number"
                            sx={{ m: 1, width: '90%' }}
                            id="outlined-size-small"
                            name="PAN"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField
                            label=" loan amount"
                            sx={{ m: 1, width: '90%' }}
                            id="outlined-size-small"
                            name="loan"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <TextField

                            label="year"
                            name='year'
                            sx={{ m: 1, width: '90%' }}
                            id="outlined-size-small"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <Button type="submit" variant="contained" sx={{ m: 1 }}>submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>

    );
};

export default PlusModal;