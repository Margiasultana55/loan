import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='fot' >
            <div style={{ color: 'white', paddingBottom: 1, marginTop: '3rem', marginBottom: '-40px' }}>
                <div>
                    <h4 className="mt-2 mb-4 pt-5"><i className="fab fa-facebook me-3"></i>
                        <i className="fab fa-twitter me-3"></i>
                        <i className="fab fa-youtube me-3"></i>
                        <i className="fab fa-instagram "></i></h4>
                </div>
                <div className=" container border-top text-center " style={{ color: 'rgb(25, 219, 209)' }}>
                    <p className="p-3">© 2000 - 2021 Banking.com,  All Rights Reserved</p>
                </div>

            </div>

        </div>
    );
};

export default Footer;