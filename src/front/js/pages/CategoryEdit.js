import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate, useParams, useNavigate } from "react-router-dom";

export const CategoryEdit =()=>{
    const navigate = useNavigate()
    const { store, actions } = useContext(Context);
    const [inputChange, setInputChange] = useState('')
    const { id } = useParams()

    

    const handleEdit = async ()=>{
        if (id === undefined){
            console.error('id is undefined')
            return;
        }
        await actions.editCategory(inputChange, id)
        navigate("/category")
    }

    const handleInputChange =(e)=>{
        setInputChange(e.target.value)
    }


    return(
        <div className="text-center">
           <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Enter the new name</h5>
                    <input
                        type="text"
                        placeholder="Write something"
                        onChange={handleInputChange}
                    />
                    <button onClick={()=>handleEdit(id)} >Edit</button>
                    {store.auth == true ? <Navigate to={"/category"} /> : null}
                </div>
            </div>
        </div>
    )
}