import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";


export const BuyerEdit =()=>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const { id } = useParams()
    const buyer = store.allBuyers.find(buyer => buyer.id === parseInt(id))

    const[name, setName] = useState(buyer ? buyer.name:"")
    const[lastName, setLastName] = useState(buyer ? buyer.lastName:"")
    const[email, setEmail] = useState(buyer ? buyer.email:"")
    const[address, setAddress] = useState(buyer ? buyer.address:"")
    const[is_active, setIs_Active] = useState(buyer ? buyer.is_active:false)
    const[password, setPassword] = useState(buyer ? buyer.password:"")

    if(!buyer){
        return <p>No data available</p>
    }

    const handleSaveChanges = async (id)=>{
        const updateBuyer = {...buyer, name,lastName, email, address, is_active, password}
        await actions.updateBuyer(updateBuyer, id)
        navigate("/buyer")
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
                    <h5>address:</h5>
                    <input 
                        type="text" 
                        defaultValue={address}
                        onChange={(e)=> setAddress(e.target.value)}
                    />
                </div>
                <div className="m-3">
                    <h5>is_active:</h5>
                    <input 
                        type="checkbox" 
                        defaultValue={is_active}
                        onChange={(e)=> setIs_Active(e.target.checked)}
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
                <button type="button" className="btn btn-success" onClick={()=>handleSaveChanges(buyer.id)}>
                    Save Changes
                </button>
            </form>
        </div>
    )
}