import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../img/banner1.jpg';
import banner2 from '../../img/banner2.jpg';
import banner3 from '../../img/banner3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 banner "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h4 className='banner-text bw-bold'>Travel Smooth. With one platform to book, manage and report on all of your business travel, combining complete control with freedom of choice, business travel has never been smoother.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                        <h4 className='banner-text bw-bold'>Travel Smooth. With one platform to book, manage and report on all of your business travel, combining complete control with freedom of choice, business travel has never been smoother.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner "
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                        <h4 className='banner-text bw-bold'>Travel Smooth. With one platform to book, manage and report on all of your business travel, combining complete control with freedom of choice, business travel has never been smoother.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;