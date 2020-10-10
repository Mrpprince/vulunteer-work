import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../logo.png'
const UserHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    return (
        <div>
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
                        <br/>
                        <p style={{marginTop:"18px",fontWeight:"600"}}>{isLoggedIn.name}</p>

                    </div>
                </div>
            </nav>

        </div>
    </div>
    );
};

export default UserHeader;