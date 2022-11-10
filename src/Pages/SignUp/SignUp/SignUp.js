import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const {createUser, signUpWithGoogle} = useContext(AuthContext)
    const handleSignUp = (event) =>{
        event.preventDefault();

        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            
        })
        .catch(error => console.log(error))

    }

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = ()=>{
        signUpWithGoogle(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200 lg:max-w-screen-lg mx-auto">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent">Sign Up With Google</button>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p>Already have an account ? <Link to='/login' className='font-semibold text-orange-500'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;