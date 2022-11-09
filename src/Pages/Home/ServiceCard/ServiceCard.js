import React from 'react';
import img1 from '../../../Images/img1.jpg';
import img2 from '../../../Images/img2.jpg';

const ServiceCard = ({ service }) => {

    const { title, rating, details, img } = service;
    return (
        // <div className="card w-72 bg-base-100 shadow-xl">
        //     <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">Shoes!</h2>
        //         <p>If a dog chews shoes whose shoes does he choose?</p>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Buy Now</button>
        //         </div>
        //     </div>
        // </div>

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