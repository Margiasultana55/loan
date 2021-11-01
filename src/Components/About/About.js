import React from 'react';
import { Carousel } from 'react-bootstrap';
import about from '../../img/about.png'
import about1 from '../../img/about1.png'
import about2 from '../../img/about2.png'
import about3 from '../../img/about3.png'
import aboutt from '../../img/aboutt.png'
import './About.css'
const About = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={about}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <div className=''>
                            <h1 >Control</h1>
                            <p >Get total control of your business travel spend, knowing travellers will be guided to book the most cost effective option, every time.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 banner "
                        src={aboutt}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <div className=''>
                            <h1 >Control</h1>
                            <p className=' '>Get total control of your business travel spend, knowing travellers will be guided to book the most cost effective option, every time.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>


            <div className="container overflow-hidden mt-5 mb-5">
                <div className="row gx-5">
                    <div className="col col-lg-6">
                        <div className="p-3 border bg-light">

                            <img className='img-fluid' src={about1} alt='' />
                        </div>
                    </div>
                    <div className="col  col-lg-6">
                        <div className="p-3 border bg-light">
                            <h4>Travel Policy</h4>
                            <p>Manage booking behaviour by setting rules and limits to encourage travellers to book in-budget.

                                Our simple traffic light system guides users towards choices you want them to make.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-color p-5 mb-5 mt-5'>
                <div className="container overflow-hidden">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-4 border bg-light mt-2">
                                <h1 className='text-center text-primary'>95%</h1>
                                <p>Achieved 95% compliance within the first 3 months of Carluccio’s and Click Travel’s partnership in travel spend against budget.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4 border bg-light mt-2">
                                <h1 className='text-center text-primary'>+ 15%</h1>
                                <p>“Overall travel policy compliance has increased by 15% and we have saved 21% annually in travel spend against budget”</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="p-4 border bg-light mt-2">
                                <h1 className='text-center text-primary'>95%</h1>
                                <p>“Since launch, 98% of bookings have been made online and 95% of all bookings have been made within our travel policy.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <h3 className='text-center text-primary mt-5 mb-4'>Get flexible with in-built travel policy features</h3>
            <hr className="w-25 mx-auto mb-5 text-primary " />
            <div className="container overflow-hidden mt-5 mb-5">
                <div className="row gx-5">
                    <div className="col col-lg-6">
                        <div className="p-3 border bg-light ">

                            <img className='img-fluid' src={about2} alt='' />
                        </div>
                    </div>
                    <div className="col col-lg-6 ">
                        <div className="p-3 border bg-light">
                            <h4>Traffic light system</h4>
                            <p>Search results appears as red (out of policy), amber (in policy) or green (in policy and preferred).</p>
                        </div>
                        <div className="p-3 border bg-light mt-2">
                            <h4>Unlimited travel policies</h4>
                            <p>Define unlimited travel policies for different groups of people within your organisation.</p>
                        </div>
                        <div className="p-3 border bg-light mt-2">
                            <h4>Dynamic travel policy</h4>
                            <p>Give bookers a % tolerance, allowing for bookings within a set % of the cheapest option.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container overflow-hidden mt-5 mb-5">
                <div className="row gx-5">
                    <div className="col col-lg-6 ">
                        <div className="p-3 border bg-light">

                            <img className='img-fluid' src={about3} alt='' />
                        </div>
                    </div>
                    <div className="col col-lg-6 col-sm-12 ">
                        <div className="p-3 border bg-light">
                            <h4>Approvals</h4>
                            <p>Control costs by requiring approval based on your travel policy or who’s booking.

                                For bookings made out of policy, you can add a step of approval to help control booking behaviours and drive cost savings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;