import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Review = ({serviceId, serviceName}) => {
    console.log(serviceId);
    
     const{user} = useContext(AuthContext);

     const handleReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'not registered';
        const rate = form.rate.value;
        const comment = form.comment.value;
        const photo = form.photo.value;
        const _id = form._id.value;

        const review = {
            service: _id,
            serviceName : serviceName,
            serviceRating: rate,
            user : name,
            email, photo, comment
        }
        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Review Added. Thank You!")
                form.reset();
            }
        })
        .catch(err => console.log(err));
     }
    return (
       <form onSubmit={handleReview} className='lg:max-w-screen-lg mx-auto'>
        <h2 className='text-3xl text-center mb-8'>Add a review for <span className='font-bold text-4xl text-blue-800 '>"{serviceName}"</span></h2>
        <div className='flex flex-col gap-3 text-center'>
        <input name='name' type="text" placeholder="Your name" className="font-semibold input input-bordered input-primary w-full max-w-sm" />
        <input name='rate' type="text" placeholder="Rate The Service" className="font-semibold input input-bordered input-primary w-full max-w-sm" />
        <input name='email' type="email" placeholder="Your email" defaultValue={user?.email} className="font-semibold input input-bordered input-primary w-full max-w-sm" readOnly />
        <input name='photo' type="text" placeholder="Photo URL" className="font-semibold input input-bordered input-primary w-full max-w-sm" />
        <input name='_id' type="text" placeholder="Service name" defaultValue={serviceId} className="font-semibold input input-bordered input-primary w-full max-w-sm" readOnly />
        <textarea name='comment' className="textarea textarea-primary" placeholder="Your Comments"></textarea>
       
       
        <input className="btn btn-primary max-w-sm mx-auto" type="submit" value="Add Review" />

        </div>

       </form>
    );
};

export default Review;