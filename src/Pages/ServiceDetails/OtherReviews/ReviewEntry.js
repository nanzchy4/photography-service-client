import React from 'react';

const ReviewEntry = ({ review }) => {
    const {photo, serviceName, serviceRating,user,comment } = review;
    return (
        <div className="card w-72 bg-base-100 shadow-xl bg-red-100">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Reviewed By: <span className='font-bold text-2xl text-blue-500'>{user}</span></h2>
                <p className='text-red-700 font-semibold text-2xl'>Rating: {serviceRating}</p>
                <p className=' font-semibold text-2xl'>Comment: {comment}</p>
            </div>
        </div>

    );
};

export default ReviewEntry;