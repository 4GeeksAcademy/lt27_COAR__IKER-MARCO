import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const BuyerCreate = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [is_active, setIs_Active] = useState(false)

    const handleSaveChanges = async () => {
        const NewBuyer = { name, lastName, email, address, password, is_active }
        await actions.newBuyer(NewBuyer)
        navigate("/login_buyer")
    }

    return (
        <>
            <div className="text-center mt-5">
                <div className="text-center mt-5">
                    <h1>Are you a New client? Please sign-up</h1>
                </div>
               


                <div className="text-start mt-5">
                    <div className="container">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAdress" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    name="address"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAgendaName" className="form-label">
                                    Lastname
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                    name="city"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputFullName" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputIsActive1" className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputLastname1"
                                    onChange={(e) => setAddress(e.target.value)}
                                    name="last_name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAdress" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    onChange={(e) => setPassword(e.target.value)}
                                    name="name"
                                />
                            </div>
                            <div className="col-1">
                                <label htmlFor="exampleInputAdress" className="form-label">
                                    Is active:
                                </label>
                                <input
                                    type="checkbox"
                                    className="form-control"
                                    checked={is_active}
                                    onChange={(e) => setIs_Active(e.target.checked)}
                                />
                            </div>




                            <div className="container text-center">
                                <div className="row">

                                    <div className="col">
                                        <button
                                            onClick={handleSaveChanges}
                                            className="btn btn-outline-success"
                                        >
                                            Create new profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        </>
    )
}

