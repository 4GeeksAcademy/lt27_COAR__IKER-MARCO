import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import { Hero_admin } from "../component/hero_admin.js";



export const Category =()=>{
    const { store, actions } = useContext(Context);
    const Navigate = useNavigate()

    const handleClick =()=>{
        actions.authFalse()
    }

    const handleDelete =(id)=>{
        actions.deleteCategory(id)
    }

    const handleEdit =(id)=>{
        Navigate("/edit/" + id)
        actions.authFalse()
    }
    
    return(
        <>
            <Hero_admin />
            <div className="text-center">
                <h1>Category</h1>
                <Link to={"/create"}>
                <button onClick={handleClick} >Create New</button>
                </Link>
                {store.allCategory.map((element)=> (
                    
                    <div key={element.id} className="card" style={{"width": "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <button onClick={()=>handleEdit(element.id)} >Edit</button>
                            <button onClick={()=> handleDelete(element.id)} >Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        
        </>
    )
}
