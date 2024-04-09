import React, { useContext, useEffect, useState } from 'react';
import Order from './Order';
import { AuthContext } from './Context And firebase/UserContext';

const Orders = () => {
    const {user ,logOut} = useContext(AuthContext)
    const [orders ,setOrders] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers :{
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>{
            if(res.status === 401 || res.status === 403){
                logOut()
            }
            return res.json()
        
        })
        .then(data => setOrders(data))
    },[user?.email])

    
    const handleDeleteOrders = order =>{
        const agree = window.confirm(`Are you Want to Delete ${order.name}`)
        if(agree){
            fetch(`http://localhost:5000/orders/${order._id}`,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount >0){
                    alert(`${order.name} Deleted Successfully`)
                    const remainingUser = orders.filter(ord =>ord._id !== order._id)
                    setOrders(remainingUser)
                }
            })
        }
    }
    return (
        <div className="overflow-x-auto">
            <h1 className=' text-4xl'>You Have now {orders.length} orders</h1>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name & Price</th>
                        <th>Cetagory & Stock</th>
                        <th>Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =><Order
                        key={order._id}
                        order={order}
                        handleDeleteOrders={handleDeleteOrders}
                        ></Order>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Orders;