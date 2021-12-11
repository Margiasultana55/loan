import React from 'react';

const Emi = (props) => {

    const { year, prin } = props;
    // console.log(props);
    let month = year * 12;
    let interest = 0.007417;
    let top = Math.pow((1 + interest), month);
    let bottom = top - 1;
    let ratio = top / bottom;
    let emi = prin * interest * ratio;

    console.log(top);
    console.log(bottom);
    console.log(emi);
    return (
        <div>

            <h3 style={{ color: 'white', marginTop: '4rem' }}> <span style={{ color: 'rgb(25, 219, 209)' }}>EMI: </span> {emi.toFixed(0)}</h3>
        </div>
    );
};

export default Emi;