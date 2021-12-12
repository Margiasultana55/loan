import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import useAuth from '../../../hook/useAuth';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import bgg from '../../../img/bgg.jpg'
import Emi from '../Emi/Emi'

const Details = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [loanDetail, setLoanDetail] = useState([]);
    //get products
    useEffect(() => {

        fetch("https://limitless-sierra-06258.herokuapp.com/loans")
            .then(res => res.json())
            .then(data => {
                const service = data.filter(data => data._id === serviceId);

                setLoanDetail(service)
                console.log(service);
            })
            .catch(e => {
                console.log(e);
            })
    }, [serviceId])
    console.log(loanDetail);


    return (
        <div
        >

            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                {loanDetail.map((detail) => (<form key={detail._id} style={{ marginTop: '9rem', width: "30rem", backgroundColor: 'white', padding: '1rem', borderRadius: '22px', boxShadow: '2px 2px 18px  rgb(25, 219, 209)', color: 'black', }} >


                    <TextField

                        label="adress"
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        name="adress"
                        defaultValue={detail.adress}
                        disabled
                        size="small"
                    />

                    <TextField
                        label=" PAN number"
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        name="PAN"
                        defaultValue={detail.PAN}
                        disabled
                        size="small"
                    />
                    <TextField
                        label=" loan amount"
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        name="loan"
                        defaultValue={detail.loan}
                        disabled
                        size="small"
                    />
                    <TextField

                        label="year"
                        name='year'
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        defaultValue={detail.year}
                        disabled
                        size="small"
                    />
                    <TextField

                        label="interest-rate"
                        name='interest-rate'
                        sx={{ m: 1, width: '90%' }}
                        id="outlined-size-small"
                        defaultValue='8.9%'
                        disabled
                        size="small"
                    />

                </form>))

                }
            </Container>
            {
                loanDetail.map((emi) => (<Emi
                    prin={emi.loan}
                    year={emi.year}
                >

                </Emi>))
            }
        </div>

    );
};

export default Details;