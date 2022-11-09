import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesArea = () => {

    const services = useLoaderData();
    
    return (
        <div>
            <h1>Users number : {services.length}</h1>
        </div>
    );
};

export default ServicesArea;