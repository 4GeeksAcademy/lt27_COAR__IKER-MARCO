import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";

export const Admin =()=>{
    const { store, actions } = useContext(Context);
    const Navigate = useNavigate()

    
    const handleEditAd =(id)=>{
        Navigate("/admin/edit/" + id)
        actions.authFalse()
    }
    const handleClick =()=>{
        Navigate("/new")
    }

    const handleDelete =(id)=>{
        actions.deleteAdmin(id)
    }
    

    return(
        <div className=" text-center row flex-row flex-now">
            <h1>Admin</h1>
            <button onClick={handleClick} className="btn btn-dark">Create New</button>
            {store.allAdmins.map((element)=> {
                return(
                    <div key={element.id} className="card m-3" style={{"width":"20rem", "border":"2px solid black"}}>
                        <img src={rigoImage} className="card-img-top my-2" style={{"border":"2px solid black"}} alt="picture-admin" />
                        <div className="card-body">
                        <h3 className="card-title">{element.name}</h3>
                        <h5 className="card-title">{element.lastName}</h5>
                        <p className="card-text">Email: {element.email}</p>
                        <p className="card-text">ID: {element.id}</p>
                        <button onClick={()=>handleEditAd(element.id)} className="btn btn-primary">Edit</button>
                        <button onClick={()=>handleDelete(element.id)} className="btn btn-danger mx-1">Delete</button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}