import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const GoToDirection =()=>{
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()

    return(
        <div className="container">
            <h1>Previously provides an address</h1>
            {store.currentBuyerAddress ? (
                <div>
                    <h3>Current Address:</h3>
                    <p>{store.currentBuyerAddress}</p>
                </div>
            ) : (
                <p>No address available</p>
            )}
            <h3>Enter a new address:</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="newAddress" className="form-label">New Address</label>
                    <input type="text" className="form-control" id="newAddress" />
                </div>
                <button onClick={()=> navigate("/paypalltest")} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}