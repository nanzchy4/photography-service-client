import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {logIn} = useContext(AuthContext);


    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.error(error))
    }
    return (

        <div className="hero min-h-screen bg-base-200 lg:max-w-screen-lg mx-auto">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <button className="btn btn-outline btn-accent">Login With Google</button>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p>Not registered? <Link to='/signup' className='font-semibold text-orange-500'>Sign Up</Link></p>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;