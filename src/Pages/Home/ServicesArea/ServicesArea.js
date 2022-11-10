import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesArea = () => {
    const [services, setServices] = useState([]);
    // const services = useLoaderData();
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
             setServices(data);
             console.log(data)
        })
    },[])

    return (
        <div className='lg:max-w-screen-lg mx-auto'>
            <h1 className='text-4xl font-semibold text-center mb-6'>Our Services</h1>
            {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            <div className='text-center mt-16'>
                <Link to='/services'><button className="btn btn-outline btn-primary btn-wide">See All Services</button></Link>
            </div>
        </div>
    );
  
};
export default ServicesArea;