import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const BuyerCreate =()=>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate() 

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [is_active, setIs_Active]= useState(false)

    const handleSaveChanges = async ()=>{
        const NewBuyer = {name, lastName, email, address, password, is_active}
        await actions.newBuyer(NewBuyer)
        navigate("/buyer")
    }

    return(
        <div>
            <div  className="card text-left">
            <div className="card-body">
                <h1>Please enter a new Buyer</h1>
            </div>
            <form>
                <div>
                    <h5>Name: </h5>
                    <input 
                        type="text"
                        placeholder="enter a name"
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div>
                    <h5>Last Name: </h5>
                    <input 
                        type="text"
                        placeholder="enter a Last Name"
                        onChange={(e)=> setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <h5>Email: </h5>
                    <input 
                        type="text"
                        placeholder="enter a Email"
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <h5>Address: </h5>
                    <input 
                        type="text"
                        placeholder="enter a Address"
                        onChange={(e)=> setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <h5>Password: </h5>
                    <input 
                        type="password"
                        placeholder="enter a password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <h5>Is Active: </h5>
                    <input 
                        type="checkbox"
                        placeholder="enter a 'true' or 'false'"
                        checked={is_active}
                        onChange={(e)=> setIs_Active(e.target.checked)}
                    />
                </div>
                <button type="button" className="btn btn-success m-3" onClick={handleSaveChanges}>
                    Save Changes
                </button>
            </form>
        </div>
        </div>
    )
}