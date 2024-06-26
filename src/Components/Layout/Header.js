import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context And firebase/UserContext';

const Header = () => {
    const {user ,logOut} = useContext(AuthContext)
    const handleLogOut =()=>{
        logOut().then(()=>{
            //logOut Successfully
        })
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Shopping</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/orders'>Orders</Link>
                    </li>
                    {user?.email ? 
                    <li onClick={handleLogOut}> <Link to=''>Logout</Link></li> 
                    :
                    <li> <Link to='/login'>Login</Link></li> }
                </ul>
            </div>
        </div>
    );
};

export default Header;