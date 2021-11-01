
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

const MyOrder = () => {
    const [order, setOrder] = useState();
    const location = useLocation();
    console.log(location.pathname);
    // const key = 
    const key = location.pathname.slice(8);
    console.log(key);


    useEffect(() => {
        fetch('https://murmuring-eyrie-31936.herokuapp.com/services')
            .then(res => res.json())
            .then(bookings => {

                const service = bookings.find(data => data.key === key);
                setOrder(service);

            });
    }, [key])

    // const { name, picture, price } = order;



    return (
        <div>
            <div>
                {/* <img className='pic' src={picture} alt="" height="300" width="300" />
                <h2 className=' text-center mt-5  text-primary '> {name} package.</h2>
                <h3>Price:{price}</h3> */}
            </div>
        </div>
    );
};

export default MyOrder;






























