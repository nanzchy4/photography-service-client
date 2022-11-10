import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from '../../Home/ServiceCard/ServiceCard';

const Services = () => {
    useTitle('Services');
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

export default Services;