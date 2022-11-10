import React, { useEffect, useState } from 'react';
import img1 from '../../../Images/img1.jpg';
import img2 from '../../../Images/img2.jpg';
import img3 from '../../../Images/img3.jpg';
import img4 from '../../../Images/img4.jpg';
import css from './Banner.css';

const Banner = () => {

    return (
        <div className="carousel w-full lg:max-w-screen-lg mx-auto my-16">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img w-full h-4/5'><img src={img1} alt='' className="w-full" /></div>
                <div className="absolute left-5 top-1/4 ml-6">
                    <h1 className='text-5xl text-white'>
                        Turning Your <br />
                        <span className='text-5xl'>Vision</span><br />
                        Into Reality
                    </h1>
                </div>

                <div className="absolute  left-5 top-3/4">
                    <p className='text-2xl text-white'><i>
                        capturing the moments of today that will wow your hearts tomorrow</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img w-full h-4/5'><img src={img2} alt='' className="w-full" /></div>
                <div className="absolute left-5 top-1/4 ml-6">
                    <h1 className='text-5xl text-white'>
                        Turning Your <br />
                        <span className='text-5xl'>Vision</span><br />
                        Into Reality
                    </h1>
                </div>

                <div className="absolute  left-5 top-3/4">
                    <p className='text-2xl text-white'><i>
                        capturing the moments of today that will wow your hearts tomorrow</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img w-full h-4/5'><img src={img3} alt='' className="w-full" /></div>
                <div className="absolute left-5 top-1/4 ml-6">
                    <h1 className='text-5xl text-white'>
                        Turning Your <br />
                        <span className='text-5xl'>Vision</span><br />
                        Into Reality
                    </h1>
                </div>

                <div className="absolute  left-5 top-3/4">
                    <p className='text-2xl text-white'><i>
                        capturing the moments of today that will wow your hearts tomorrow</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img w-full h-4/5'><img src={img4} alt='' className="w-full" /></div>
                <div className="absolute left-5 top-1/4 ml-6">
                    <h1 className='text-5xl text-white'>
                        Turning Your <br />
                        <span className='text-5xl'>Vision</span><br />
                        Into Reality
                    </h1>
                </div>

                <div className="absolute  left-5 top-3/4">
                    <p className='text-2xl text-white'><i>
                        capturing the moments of today that will wow your hearts tomorrow</i></p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;