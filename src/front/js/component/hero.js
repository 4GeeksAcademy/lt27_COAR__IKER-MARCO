import React, { Component } from "react";
import placeholder from "../../img/placeholder.png";
import { Link } from "react-router-dom";



export const Hero = () => (
    <div className="hero bg-success p-2 text-dark bg-opacity-50">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5">
                    <div className="intro-excerpt">
                        <br />
                        <h1>COnectando ARtesanos <span clsas="d-block"><h3>Artesania en linea</h3></span></h1>
                        <br />
                        <p className="mb-4">
                            COAR es una plataforma de e-commerce diseñada para conectar a artesanos con clientes interesados en productos hechos a mano y artesanales. La plataforma permitirá a los artesanos crear perfiles, subir sus productos, gestionar inventarios y realizar ventas, mientras que los clientes podrán navegar, buscar y comprar productos únicos y personalizados directamente de los creadores.
                        </p>
                        <div className="row">    
                            <div className="col text-end">
                                <Link to="/shop">
                                    <button className="btn btn-outline-light">Shop</button>
                                </Link>
                            </div>
                            <div className="col">
                                <Link to="/about">
                                    <button className="btn btn-outline-light">About</button>
                                </Link>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                <div className="col-lg-7">

                </div>
            </div>
        </div>
    </div>
);
