import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";

export const Buyer =()=>{
    const { store, actions } = useContext(Context);
    const Navigate = useNavigate()

    const handleEdit =(id)=>{
        Navigate("/buyer/edit/" + id)
    }

    const handleDelete =(id)=>{
        actions.deleteBuyer(id)
    }


    return(
        <div>
            <h1>Buyers Availables</h1>
            {store.allBuyers.map((element)=> {
                return(
                    <div key={element.id} className="card m-3" style={{"width":"20rem", "border":"2px solid black"}}>
                        <img src={rigoImage} className="card-img-top my-2" style={{"border":"2px solid black"}} alt="picture-buyer" />
                        <div className="card-body">
                        <h3 className="card-title">{element.name}</h3>
                        <h5 className="card-title">{element.lastName}</h5>
                        <p className="card-text">Email: {element.email}</p>
                        <p className="card-text">Address: {element.address}</p>
                        <p className="card-text">Active: {element.is_active ? 'Yes' : 'No'}</p>
                        <p className="card-text">ID: {element.id}</p>
                        <button onClick={()=>handleEdit(element.id)} className="btn btn-primary">Edit</button>
                        <button onClick={()=>handleDelete(element.id)} className="btn btn-danger mx-1">Delete</button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}