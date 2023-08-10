import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Login</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className='m-0' placeholder="Enter username" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className='m-0' placeholder="Enter your full name" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-between">
                                    <Link to="/forgetPassword">Forgot Password?</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login