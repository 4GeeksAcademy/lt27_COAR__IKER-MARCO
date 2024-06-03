import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Hero_craftman = () => {
    const { store } = useContext(Context);

    return (
        <div className="hero bg-success p-2 text-dark bg-opacity-50">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>Hello {store.currentCraftmanAddress} <span className="d-block"></span></h1>                            <p className="mb-4">
                                From here you can manage your products, orders, and customers. You can also view reports and change your account settings. If you have any questions or need help, please contact us.
                            </p>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>

    );
}
