import React, { useContext, useEffect, useState } from 'react';
import './PaginationStyle.css'

import Product from './Product';
import { AuthContext } from './Context And firebase/UserContext';
const Productonteiner = () => {
    const {user} = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [count ,setCount]= useState(0)
    const [page ,setPage]= useState(0)
    const [size ,setSize]= useState(10)
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.result)
                setCount(data.count)
            })
    }, [page ,size])
    const pages = Math.ceil(count/size)
    const handleDelateUser = user => {
        const agree = window.confirm(`Are you Want to delate this ${user.title}`)
        if (agree) {
            fetch(`http://localhost:5000/product/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('user deleted successfully')
                        const remainingUser = products.filter(usr => usr._id !== user._id)
                        setProducts(remainingUser)
                    }
                })
        }
    }
    const handleAddTOrders = order =>{
        const information = {
            category : order.category,
            stock : order.stock,
            price : order.price,
            img : order.img,
            name : order.name,
            email : user.email,
        }
        fetch('http://localhost:5000/orders',{
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify(information)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert(`Successfully Added ${order.name}`)
            }
        })

    }
    return (
        <div className=' mx-auto'>
            <h1 className='mb-10 p-6 text-6xl'>Available Product is {products.length} Pics , Enjoy !!!</h1>
            <div className="divider divider-accent mb-10 text-2xl">Products</div>
            <div className=' grid grid-cols-3 gap-7'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleDelateUser={handleDelateUser}
                        handleAddTOrders={handleAddTOrders}
                    ></Product>)
                }
            </div>
            {/* pagination */}
            <div className='pagination'>
                {
                    [...Array(pages).keys()].map(index =><button
                    key={index}
                    className={page===index && 'selected'}
                    onClick={()=>setPage(index)}
                    >{index+1}</button>)
                }
                <select onChange={event=>setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Productonteiner;