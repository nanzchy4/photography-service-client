import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesArea = () => {

    const services = useLoaderData();

    return (
        <div className='lg:max-w-screen-lg mx-auto'>
            <h1 className='text-4xl font-semibold text-center mb-6'>Our Services</h1>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
  
};
export default ServicesArea;