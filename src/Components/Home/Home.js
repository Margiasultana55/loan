import React from 'react';
import bgg from '../../img/bgg.jpg'
import Plus from '../Plus/Plus';

const Home = () => {
    return (
        <div id="home" style={{
            backgroundImage: `url(${bgg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            height: "110vh",
            marginBottom: 0
        }}>


        </div>
    );
};

export default Home;