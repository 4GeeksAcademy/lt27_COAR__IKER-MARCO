import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const OrdersView = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.currentBuyerId) {
            navigate("/home");
        } else {
            actions.getOrders();
        }
    }, [store.currentBuyerId]);

    return (
        <div className="container">
            <h1>Your Orders</h1>
            {store.orders.length === 0 ? (
                <h3>No orders found</h3>
            ) : (
                store.orders.map((order, index) => (
                    <div className="card mb-2" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">Order ID: {order.id}</h5>
                            <p className="card-text">
                                Total Price: ${order.total_price}<br />
                                Shipping Address: {order.shipping_address}<br />
                                Status: {order.status}<br />
                                Created At: {new Date(order.created_at).toLocaleString()}<br />
                                Updated At: {new Date(order.updated_at).toLocaleString()}
                            </p>
                            <h6>Items:</h6>
                            <ul>
                                {order.orderProduct.map(item => (
                                    <li key={item.id}>
                                        {item.product.name} - Quantity: {item.quantity} - Price: ${item.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};