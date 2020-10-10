import React from 'react';
import logo from '../../logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="mt-3">
            <nav class="navbar navbar-expand-lg">
                <div className="container">
                    <a class="navbar-brand " href="#">
                        <img src={logo} alt="" />
                    </a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto  ">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Donation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Blog</a>
                            </li>
                        </ul>
                        <button className="btn btn-primary">Register</button>
                        <button className="btn btn-dark">Admin</button>
                    </div>
                </div>
            </nav>
            <h4 className="mt-5 " style={{ marginLeft: "460px", fontWeight: "700", paddingLeft:"20px" }}>I GROW BY HELPING PEOPLE IN NEED</h4>
            <div>
            <input style={{ marginLeft: "500px", padding: "5px",marginTop:"30px" }} placeholder="search" type="text" />
            <button className="btn btn-primary " style={{paddingLeft:"10px"}}>Search</button>
            </div>
        </div>
    );
};

export default Header;