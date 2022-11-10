import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Home/ServiceCard/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    

    return (

        <div className='lg:max-w-screen-lg mx-auto'>
            <h1 className='text-4xl font-semibold text-center mb-6'>Our Services</h1>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
    
        </div>
        // <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-screen-sm mb-8">
        //     <figure><img src={img} alt="Album" className='h-60 w-96' /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{title}</h2>
        //         {
        //             details.length > 100 ?
        //                 <p>{details.slice(0, 100) + '...'}</p>
        //                 : <p>{details}</p>
        //         }
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">See Details</button>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Services;