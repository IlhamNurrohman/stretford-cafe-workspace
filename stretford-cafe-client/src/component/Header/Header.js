import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/icon/coffee 1.png";
import chat from "../../assets/icon/chat (1) 1.png";
import profile from "../../assets/img/image 39 (1).png";


export default function Header (props) {
        return (
            <header>
                <nav className="navbar navbar-expand-lg bg-white" style={{ borderButtom: "2px solid black" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> <img src={logo} alt="logo-icon" />Stretford Cafe</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mr-auto" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#"><Link style={{ textDecoration: "none" }} to="/">
                                        Home
                                    </Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">
                                        <Link style={{ textDecoration: "none" }} to="/product">
                                            Product
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page">
                                <Link style={{ textDecoration: "none" }} to="/payment">
                                    Your Cart
                                    </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link style={{ textDecoration: "none" }} to="/History">
                                        History
                                    </Link></a>
                                </li>
                            </ul>

                            {/* <div className="right-nav">
                                <span className="navbar-text"><a href="" style={{ textDecoration: "None" }}><Link style={{ textDecoration: "none" }} to="/Login">
                                    Login
                                </Link></a></span>
                                <a href="register.html"><button className="btn" style={{ background: "rgba(255, 186, 51, 1)", borderRadius: "50px", color: "rgba(106, 64, 41, 1)" }}>Sign Up</button></a>
                            </div> */}

                            <form className="d-flex">
                                <input
                                    type="search"
                                    placeholder="Search"
                                    style={{ borderRadius: "30px", marginTop: "-8px", width: "100%", height: "40px", marginRight: "10px", paddingLeft: "10px" }}
                                />
                            </form>
                            <div className="right-nav">
                                <button className="btn position-relative" type="submit"><img src={chat} alt=""/>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        1
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </button>
                                <span className="navbar-text">
                                    <Link to="/Profile">
                                    <img src={profile}
                                    style={{borderRadius: "100px", paddingLeft: "10%"}}/></Link></span>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>

        );
    }
