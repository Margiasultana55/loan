import React from 'react';
import support from '../../img/support.png';
import support1 from '../../img/support1.jpg';
import person from '../../img/person.png';
import user from '../../img/user.png';
import admin from '../../img/admin.png';
import about from '../../img/about.png';

import './Support.css';
import { Carousel } from 'react-bootstrap';


const Support = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={support}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <div className=''>
                            <h1 >Let’s start by determining who you are and what you do</h1>
                            <p >Whether you’re an administrator, user, or simply want to learn more about SAP Concur products, our experts are ready to answer your questions.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 banner "
                        src={about}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <div className=''>
                            <h1 >Let’s start by determining who you are and what you do</h1>
                            <p >Whether you’re an administrator, user, or simply want to learn more about SAP Concur products, our experts are ready to answer your questions.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>



            <h3 className='text-center text-primary mt-5 mb-4'>Get flexible with in-built travel policy features</h3>
            <hr className="w-25 mx-auto mb-5 text-primary " />
            <div className="container overflow-hidden mt-5 mb-5">
                <div className="row gx-5">
                    <div className="col col-lg-6">
                        <div className="p-3 border bg-light ">

                            <img className='img-fluid' src={support1} alt='' />
                        </div>
                    </div>
                    <div className="col col-lg-6 ">
                        <div className="p-3 border bg-light">
                            <h4>With tourism Concur, you have access to support services and expert advice provided Support, cloud editions.</h4>
                            <p>Tourism.com helps you safeguard your mission-critical processes for faster issue resolution with a guaranteed corrective action plan provided for severe incidents that is unmatched in the industry. Additionally, SAP ESCE offers a rich set of support deliverables, knowledge transfer assets, training materials, and best practices to avoid or resolve issues quickly and to learn about innovation opportunities.</p>
                        </div>


                    </div>
                </div>
            </div>
            <div className='bg-color p-5 mb-5 mt-5'>
                <div className="container overflow-hidden">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-4 border support bg-light mt-2">
                                <img className='img fluid imgg' src={admin} alt="" />
                                <h5 className='text-center text-primary'>Administrators</h5>
                                <p>Achieved 95% compliance within the first 3 months of Carluccio’s and Click Travel’s partnership in travel spend against budget.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4 border support bg-light mt-2">
                                <img className='img fluid imgg' src={user} alt="" />
                                <h5 className='text-center text-primary'>Users</h5>
                                <p>Choose this option if you use our system but don’t oversee it. Users won’t see “Administrator” on their dashboard.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4 border support bg-light mt-2">
                                <img className='img fluid imgg' src={person} alt="" />
                                <h5 className='text-center text-primary'>Product interest</h5>
                                <p>Choose this if you’re not an SAP Concur customer, but you’d like to learn more about our products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;