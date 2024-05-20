import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AdminCreate =()=>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()


    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSaveChanges = async ()=>{
        const newAdmin = {name,lastName,email,password}
        await actions.newAdmin(newAdmin)
        navigate("/admin")

    }


    return(
        <div className="text-center">
            <div  className="card text-left">
            <div className="card-body">
                <h1>Please enter a new Admin</h1>
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
                    <h5>Password: </h5>
                    <input 
                        type="password"
                        placeholder="enter a password"
                        onChange={(e)=> setPassword(e.target.value)}
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