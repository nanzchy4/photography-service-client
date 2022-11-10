import React, { useEffect, useState } from 'react';
import ReviewEntry from '../ReviewEntry';

const OtherReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])

    return (

            <div className='grid grid-cols-3 lg:max-w-screen-lg mx-auto'>
            {
                        reviews.map(review => <ReviewEntry key={review._id} review={review}></ReviewEntry>)
                    } 
            </div>                   
               
    );
};

export default OtherReviews;