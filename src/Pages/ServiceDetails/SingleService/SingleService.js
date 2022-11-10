import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleService = () => {
    const service = useLoaderData();
    console.log(service);
    const {img, details, price, rating, duration, title} = service[0];
    
    return (
        <div className="hero min-h-screen bg-base-200 lg:max-w-screen-lg mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{details}</p>
                    <p className='text-2xl font-semibold mb-4'>Price: {price}</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleService;