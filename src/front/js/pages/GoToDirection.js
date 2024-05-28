import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const GoToDirection =()=>{
    const { store, actions } = useContext(Context)
    const [newAddress, setNewAddress] = useState("")

    const buyer = store.allBuyers.find(item => item.id === store.currentBuyerId)

    const handleAddressChange = (e) => {
        setNewAddress(e.target.value);
    };

    const handleAddressSubmit = () => {
        actions.addNewAddress(newAddress);
        setNewAddress("");
    };

    return(
        <div className="container">
            <h1>Previously provides an address</h1>
            {buyer && buyer.addresses ? (
                <div>
                    <ul>
                        {buyer.addresses.map((address, index) => (
                            <li key={index}>{address}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No previous addresses found.</p>
            )}
            <h2>Enter a New Address</h2>
            <input
                type="text"
                value={newAddress}
                onChange={handleAddressChange}
            />
            <button onClick={handleAddressSubmit}>Submit</button>
        </div>
    )
}