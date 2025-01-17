import React, { useContext } from "react";
import "../../styles/expaises.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useLocation } from 'react-router-dom'

export default function Destination() {
    let { state } = useLocation();
    const { country, city, imagenCentral, data } = state
    const { isLoggedIn } = useContext(Context);
    const navigate = useNavigate();

    const handleAddActivity = (item) => {
        if (isLoggedIn) {
            navigate('/viajes', { state: item })
        } else {
            navigate("/login")
        }
    };
    return (
        <div>
            <div className="container-fluid mx-auto p-2">
                <div className="d-flex justify-content-center">
                    <div className="position-relative" style={{ width: "80%", height: "250px" }}>
                        <img id="destination" src={imagenCentral} className="img-fluid rounded rounded-3 shadow" style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                        <div className="overlay"></div>
                        <p className="destinationDetail text-center fs-1 fw-bold my-3 text-white position-absolute top-50 start-50 translate-middle text-nowrap">{city}, {country}</p>
                    </div>
                </div>
            </div>



            <div className="activity-list d-flex flex-column align-items-center">
                {data.map((item, index) => {
                    return (
                        <div className="activity-card" style={{ width: "80%", height: "170px" }}>
                            <div className="image-container">
                                <img src={item.pictures[0] || 'https://firebasestorage.googleapis.com/v0/b/trippy-proyecto.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(14).png?alt=media&token=2703929a-4977-498e-91de-0ab70b68d609'} alt="img activity" className="rounded-top" 
                                onError={(e) => { 
                                    e.target.onerror = null; // Evita bucles infinitos
                                    e.target.src = 'https://firebasestorage.googleapis.com/v0/b/trippy-proyecto.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(14).png?alt=media&token=2703929a-4977-498e-91de-0ab70b68d609'; // Imagen por defecto
                                }} 
                                />
                            </div>
                            <div className="description px-3 py-2 flex-column" style={{maxWidth: "700px"}}>
                            <h3 className="text-truncate pt-1" style={{ maxWidth: "500px" }}>{item.name}</h3>
                            <p style={{ margin: 0, whiteSpace: "normal" }}>
                            {item.shortDescription}</p>
                            </div>

                          
                                {/* <button className="btn fondoAzul shadow rounded-0 rounded-end" style={{ width: "7%" }} onClick={() => handleAddActivity({ name: 'Flyboard en Cancun' })}>
                                    <Link to="/login" className="link" style={{ height: "100%" }}></Link>
                                </button> */}
                          
                        </div>



                    )
                })}
            </div>
        </div>
    )
}