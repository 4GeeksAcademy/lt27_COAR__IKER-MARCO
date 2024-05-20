import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

export const AdminEdit =()=>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const { id } = useParams()
    const admin = store.allAdmins.find(admin => admin.id === parseInt(id))

    const[name, setName] = useState(admin ? admin.name: "")
    const[lastName, setLastName] = useState(admin ? admin.lastName: "")
    const[email, setEmail] = useState(admin ? admin.email: "")
    const[password, setPassword] = useState(admin ? admin.password: "")

    if (!admin) {
        return <p>No data available</p>
    }

    const handleSaveChanges = async (id)=>{
        const updatedAdmin = {...admin, name, lastName, email, password}
        await actions.updateAdmin(updatedAdmin, id)
        navigate("/admin")
    }

    return(
        <div className="text-center">
            <h1>please choose the field to edit</h1>
            <form>
                <div className="m-3">
                    <h5>Name:</h5>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}   
                    />
                    
                </div>
                <div className="m-3">
                    <h5>Last Name:</h5>
                    <input 
                        type="text" 
                        Value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                        />                    
                </div>
                <div className="m-3">
                    <h5>Email:</h5>
                    <input 
                        style={{"width":"300px"}} 
                        type="text" 
                        defaultValue={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div className="m-3">
                    <h5>Password:</h5>
                    <input
                        type="password" 
                        placeholder="password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-success" onClick={()=>handleSaveChanges(admin.id)}>
                    Save Changes
                </button>
            </form>
        </div>
    )
}