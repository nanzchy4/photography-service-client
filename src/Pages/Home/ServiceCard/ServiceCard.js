import React from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({ service }) => {

    const { title, rating, details, img, price,_id } = service;
    return (
            <div className="card lg:card-side bg-base-100 shadow-xl lg:max-w-screen-sm mb-8">
            <figure><img src={img} alt="Album" className='h-60 w-96' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length>100?
                    <p>{details.slice(0,100)+ '...'}</p>
                    : <p>{details}</p>
                }
                <p className='text-2xl'>{price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allservices/${service._id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>

        </div>
        </div>
    );
};

export default ServiceCard;