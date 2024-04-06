import React from 'react';
import image from '../images/shoes.htm'
const Product = ({product ,handleDelateUser ,handleAddTOrders}) => {
    // const produxt = 
        const {img, name ,price,seller ,category }= product
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product?.img ? img : image} alt="Shoes"/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {seller}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{name}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline p-4 bg-teal-900 text-white">Price : ${price}</div>
                        <div className="badge badge-outline p-4 bg-teal-900 text-white">{category}</div>
                        <div onClick={()=>handleAddTOrders(product)} className="badge badge-outline p-4 bg-teal-950 text-orange-400"><button>Add to Orders</button></div>
                        <div onClick={()=>handleDelateUser(product)} className="badge badge-outline p-4 bg-teal-900 text-red-400"><button>Delete</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;