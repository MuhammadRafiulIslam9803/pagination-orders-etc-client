import React from 'react';

const Order = ({ order ,handleDeleteOrders}) => {
    const { img, price, name, stock, category } = order
    return (
        <tr>
            <th>
            <button onClick={()=>handleDeleteOrders(order)} className="btn btn-outline btn-success"><small>Remove</small></button>
            {/* <button className="btn btn-outline btn-success">Success</button> */}

            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">Price :${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {category}
                <br />
                <span className="badge badge-ghost badge-sm">Stock :{stock}</span>
            </td>
            <td>{
                    price>300 ? 'Black' : 'White'
                }
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Order;