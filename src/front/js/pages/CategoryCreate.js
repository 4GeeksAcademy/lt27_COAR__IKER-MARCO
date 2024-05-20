import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const CategoryCreate =()=>{
    const { store, actions } = useContext(Context);
    const [inputChange, setInputChange] = useState('')

    const handleClick =()=>{
        actions.addCategory(inputChange)
    }

    const handleChange =(e)=>{
        setInputChange(e.target.value)
    }

    return(
        <div  className="card text-center">
            <div className="card-body">
                <h1>Please enter a new category</h1>
            </div>
            <input
            className="mx-4"
            style={{"border":"2px solid black"}} 
            type="text"
            placeholder="Type the category here"
            onChange={handleChange}
            />
            <button onClick={handleClick} style={{"height":"35px"}} className=" btn-success my-2 mx-5" >add</button>
            {store.auth == true ? <Navigate to={"/category"} /> : null}
        </div>
    )
}