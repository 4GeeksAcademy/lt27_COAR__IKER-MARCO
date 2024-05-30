import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const GoToDirection =()=>{
    const { store, actions } = useContext(Context)
    const [newAddress, setNewAddress] = useState("")
    const navigate = useNavigate()

    const buyer = store.allBuyers.find(item => item.id === store.currentBuyerId)

    const handleAddressChange = (e) => {
        setNewAddress(e.target.value);
    };

    const handleAddressSubmit = async () => {
        await actions.addNewAddress(newAddress);
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
            <br />
            <button onClick={()=> navigate("/paypalltest")} className="my-5 btn btn-warning">Pay</button>
        </div>
    )
}