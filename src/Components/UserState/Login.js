import React, { useContext } from 'react';
import logo from '../../images/login.svg'
import { Link ,useNavigate  } from 'react-router-dom';
import { AuthContext } from '../Context And firebase/UserContext';

const Login = () => {
    const {logInUser}=useContext(AuthContext)
    const navigate = useNavigate()

    const handelLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;

        console.log(email ,password)
        logInUser(email ,password).then(result=>{
            const user = result.user;
            const currentUser = {
                email : user.email
            }
            console.log(currentUser)
            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers :{
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(currentUser)
            })
            .then(res=> res.json())
            .then(data => {
                localStorage.setItem('token' , data.token)
                // alert(`${data.token} set in lc`)
                console.log(data)
                console.log(data.token)
            })

            navigate('/')
        })
        .catch(err =>console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col-2">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
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
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <Link to='/register' className="label-text-alt link link-hover">New to Here Please Register First?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;