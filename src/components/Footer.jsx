import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo-white.png"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="full">
                                <div className="logo_footer">
                                    <a href="#"><img width="210" src={logo} alt="#" /></a>
                                </div>
                                <div className="information_f">
                                    <p><strong>ADDRESS:</strong> Kathmandu,Nepal</p>
                                    <p><strong>TELEPHONE:</strong> +977-9840953995</p>
                                    <p><strong>EMAIL:</strong> roshannyaupane01@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="widget_menu">
                                                <h3>Menu</h3>
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/products">Prducts</Link></li>
                                                    <li><Link tp="/">Testimonial</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="widget_menu">
                                                <h3>Account</h3>
                                                <ul>
                                                    <li><Link href="/login">Login</Link></li>
                                                    <li><Link href="/register">Register</Link></li>
                                                    <li><Link href="#">Facebok</Link></li>
                                                    <li><Link href="#">Twitter</Link></li>
                                                    <li><Link href="#">Instagram</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="widget_menu">
                                        <h3>Newsletter</h3>
                                        <div className="information_f">
                                            <p>Subscribe by our newsletter and get update protidin.</p>
                                        </div>
                                        <div className="form_sub">
                                            <form>
                                                <fieldset>
                                                    <div className="field">
                                                        <input type="email" placeholder="Enter Your Mail" name="email" />
                                                        <input type="submit" value="Subscribe" />
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer