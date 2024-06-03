import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const CraftmanOrders = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCraftmanOrders();
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    actions.updateOrderStatus(orderId, newStatus)
  };

  return (
    <div className="container text-center mt-5">
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
              <div className="mt-3">
                <button onClick={() => handleStatusChange(order.id, "En espera")} className="btn btn-warning">En espera</button>
                <button onClick={() => handleStatusChange(order.id, "Pago rechazado")} className="btn btn-danger">Pago rechazado</button>
                <button onClick={() => handleStatusChange(order.id, "En camino")} className="btn btn-primary">En camino</button>
                <button onClick={() => handleStatusChange(order.id, "Entregado")} className="btn btn-success ml-2">Entregado</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};