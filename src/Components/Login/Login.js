import React, { useContext } from 'react';
import googleIcon from '../../google.png'
import { Row, Col } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from '../firebase.config';
import LoginRegHeader from '../LoginRegHeader/LoginRegHeader';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    let history=useHistory();
    let location= useLocation();
    let { from } = location.state || { from: { pathname: "/registration" } };
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handlerGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            console.log(result)
            const { email,displayName} = result.user;
            const newUser={
                email:email,
                name:displayName
            }
            setIsLoggedIn(newUser); 
            history.replace(from);
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <div>
            <LoginRegHeader></LoginRegHeader>
            <div class="card" style={{ width: '25rem', height: "300px", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", boxShadow: "5px 5px 5px 5px" }}>
                <div class="card-body">
                    <h5 class="card-title" style={{ marginTop: "80px", marginLeft: "110px", fontWeight: "700" }}>Login With </h5>
                    <br />
                    <div className="container">
                        <Row className="d-flex align-items-center loginWithstyle mb-3" onClick={handlerGoogleSignIn} style={{ cursor: "pointer", border: "1px solid lightgray", borderRadius: "20px", height: "40px" }}>
                            <Col xs={3}>
                                <img src={googleIcon} style={{ width: "30px", height: "30px" }} alt="" width="45px" />
                            </Col>
                            <Col>
                                <h5>Continue with Google</h5>
                            </Col>
                        </Row>
                        <div >
                            <p style={{ display: "inline" }}>Don't have any account?</p>
                            <a href="#">Create an account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;