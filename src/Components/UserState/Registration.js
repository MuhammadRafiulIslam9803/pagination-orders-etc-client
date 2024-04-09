import React, { useContext } from 'react';
import logo from '../../../src/images/login.svg'
import { Link ,useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context And firebase/UserContext';

const Registration = () => {
    const navigate = useNavigate()
    const {singUpUser} = useContext(AuthContext)

    const handleSingUp = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        singUpUser(email , password).then(result=>{
            const user = result.user;
            navigate('/login')
            alert('successfully register')
        })
        .catch(err=>console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col-2">
                    <div className="text-center lg:text-left">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingUp}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sing Up</button>
                            </div>
                            <div>
                                <Link to='/login' className="label-text-alt link link-hover">Alredy Have An Account?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;