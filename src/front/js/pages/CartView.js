import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CartView = () => {
    const { store, actions } = useContext(Context)
    const total = store.cart.reduce((acc, item)=> acc + item.price, 0)

    return (
        <div className="container">
            <h1>Your Cart</h1>
            <div className="container justify-content-between">
                {store.cart.length === 0 ? (
                    <h3>shopping cart is empty</h3>
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
                <div style={{"border":"1px solid black"}} className="conteiner">
                    {store.cart.map((item, index)=> (
                        <div key={index}>
                            <p>Name: {item.name}
                            <br/>
                            Price: {item.price}</p>
                        </div>
                    ))}
                    <div className="text-center">
                        <h2>Total: {total}</h2>
                        <button className="btn-danger" >go to pay</button> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}