import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const CartView = () => {
    const { store, actions } = useContext(Context);
    const total = store.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const navigate = useNavigate();

    const handleGoToDirection = async () => {
        await actions.Total(total);
        handleGoToPay();
    };

    const handleGoToPay = async () => {
        if (!store.currentBuyerId || !store.currentBuyerAddress) {
            console.error("Buyer ID or address is missing");
            alert("Please ensure you are logged in and have a valid address.");
            return;
        }

        const orderData = {
            buyer_id: store.currentBuyerId,
            total_price: total,
            shipping_address: store.currentBuyerAddress,
            items: store.cart.map(item => ({
                product_id: item.id,
                quantity: item.quantity, 
                price: item.price
            }))
        };

        console.log("Order data", orderData);

        const token = store.authToken || localStorage.getItem('authToken')

        try {
            const response = await fetch(process.env.BACKEND_URL + "/api/orders/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(orderData)
            });

            if (response.ok) {
                const order = await response.json();
                console.log("Order created", order);
                navigate("/paypalltest");
            } else {
                const errorData = await response.json();
                console.error("Error creating order:", errorData);
                alert(`Error creating order: ${errorData.error}`);
            }
        } catch (error) {
            console.error("Error creating order:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className="container">
            <h1>Your Cart</h1>
            <div className="container justify-content-between">
                {store.cart.length === 0 ? (
                    <h3>Shopping cart is empty</h3>
                ) : (
                    store.cart.map((item, index) => (
                        <div className="card mb-2" key={index}>
                            <div className="card-body d-flex justify-content-between">
                                <div>
                                    <p style={{ margin: "0px" }}>
                                        Name: <strong>{item.name}</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Category: <strong>{item.category}</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Price: <strong>{item.price}</strong>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Quantity: <strong>{item.quantity}</strong>
                                    </p>
                                    <button onClick={() => actions.incrementQuantity(item.id)} className="sum">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <button onClick={()=> actions.decrementQuantity(item.id)} className="subtract">
                                        <i class="fa-solid fa-minus">
                                    </i></button>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-close"
                                    aria-label="Close"
                                    onClick={() => actions.deleteFromCart(item.name)}
                                ></button>
                            </div>
                        </div>
                    ))
                )}
                <div style={{ border: "1px solid black" }} className="container">
                    {store.cart.map((item, index) => (
                        <div key={index}>
                            <p>Name: {item.name}
                                <br />
                                Price: {item.price}
                                <br />
                                Quantity: {item.quantity}</p>
                        </div>
                    ))}
                    <div className="text-center">
                        <h2>Total: {total}</h2>
                        <button onClick={handleGoToDirection} className="btn-danger">Go to Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};