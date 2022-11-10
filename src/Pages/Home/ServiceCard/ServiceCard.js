import React from 'react';


const ServiceCard = ({ service }) => {

    const { title, rating, details, img } = service;
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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>

        </div>
        </div>
    );
};

export default ServiceCard;