import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const GoToPay =()=>{
    const { store, actions } = useContext(Context)
    const [newAddress, setNewAddress] = useState("")

    const buyer = store.allBuyers.find

    return(
        <div>
            <h1>Previously provides an address</h1>
            {store.allBuyers.find(item => item.id === buyer.id)}
        </div>
    )
}