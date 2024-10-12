import React, { useState, useContext, useEffect } from "react"; // Importa useState
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";


const Register = () => {
    const { store, actions } = useContext(Context);


    const [user, setUser] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (store.token) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="rounded shadow-lg p-4 bg-dark" style={{ width: '450px' }}>
                    <h1 className="text-center text-light">Register</h1>
                    <div className="mb-3">
                        <label className="form-label text-light">Full Name</label>
                        <input
                            className="form-control"
                            onChange={(event) => setUser({
                                ...user,
                                name: event.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Username</label>
                        <input
                            className="form-control"
                            onChange={(event) => setUser({
                                ...user,
                                userName: event.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Email address</label>
                        <input
                            type="email"
                            placeholder="email@example.co"
                            className="form-control"
                            onChange={(event) => setUser({
                                ...user,
                                email: event.target.value
                            })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Password</label>
                        <div className="d-flex">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                onChange={(event) => setUser({
                                    ...user,
                                    password: event.target.value
                                })}
                            />
                            <button className="btn btn-dark ms-1" style={{ width: '60px' }}
                                onClick={() => setShowPassword(!showPassword)}
                            >{showPassword ? (<i class="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Confirm Password</label>
                        <div className="d-flex">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                onChange={(event) => setUser({
                                    ...user,
                                    passwordConfirm: event.target.value
                                })}
                            />
                            <button className="btn btn-dark ms-1" style={{ width: '60px' }}
                                onClick={() => setShowPassword(!showPassword)}
                            >{showPassword ? (<i class="fa-solid fa-eye"></i>) : (<i className="fa-solid fa-eye-slash"></i>)}</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-light">Phone Number</label>
                        <input
                            className="form-control"
                            onChange={(event) => setUser({
                                ...user,
                                number: event.target.value
                            })}
                        />
                    </div>
                    <label className="form-label text-light">More information about you</label>
                    <div className="form-floating mb-3">
                        <textarea
                            className="form-control"
                            style={{ height: '100px' }}
                            onChange={(event) => setUser({
                                ...user,
                                more_Info: event.target.value
                            })}
                        ></textarea>
                    </div>
                    <button
                        onClick={() => console.log(user)}
                        className="btn btn-primary w-100 mt-2"
                    >
                        Register
                    </button>
                </div>
            </div >
        </>
    );
};

export default Register;