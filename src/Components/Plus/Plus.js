
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import PlusModal from '../PlusModal/PlusModal';
const Plus = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);





    return (
        <>
            <div style={{ marginTop: '10rem', display: 'flex', justifyContent: 'flex-end', marginRight: '20px' }}>
                <Button onClick={handleOpen} variant="contained" className=' text-white  ' style={{ background: 'none', border: 'none', textShadow: '2px 7px 33px rgb(10, 155, 212)', }} ><i style={{ fontSize: '40px', marginBottom: '20px' }} className="fas fa-plus-circle"  ></i></Button>

            </div>
            <PlusModal
                open={open}
                handleClose={handleClose}
            >

            </PlusModal>


        </>
    );
};

export default Plus;