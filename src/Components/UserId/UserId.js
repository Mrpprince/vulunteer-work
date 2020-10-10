import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import MyWork from '../MyWork/MyWork';
import UserHeader from '../UserHeader/UserHeader';

const UserId = () => {
    const[userId,setUserId]= useState([]);
    const [isLoggedIn, setIsLoggedIn]= useContext(UserContext);
    console.log(isLoggedIn);
    useEffect(() => {
        fetch('https://guarded-chamber-83757.herokuapp.com/userId?email='+isLoggedIn.email)
            .then(res => res.json())
            .then(data => {
              
                setUserId(data);                
            })

    }, []);
    return (
        <div>
            <div>
            <UserHeader></UserHeader>
            </div>
            <div className="row">
            {
               userId.map(data=> <MyWork data={data}></MyWork>)
           }
            </div>
        </div>
    );
};

export default UserId;