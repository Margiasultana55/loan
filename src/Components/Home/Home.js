import React from 'react';
import bgg from '../../img/bgg.jpg'
import './Home.css'

const Home = () => {
    return (
        <div id="home" >

            <div className='container typewriter ' >
                <h1 style={{ paddingTop: '14rem', color: 'white', textShadow: "2px 1px 5px rgb(10, 155, 212)" }}>Click The Plus Button <span style={{ color: 'rgb(10, 155, 212)', textShadow: "2px 1px 5px rgb(25, 219, 209)" }}>For Your Loan..</span></h1>
            </div>
        </div>
    );
};

export default Home;