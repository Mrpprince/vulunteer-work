import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';
import VolunteerData from '../MainBody/Volunteer'
import LoginRegHeader from '../LoginRegHeader/LoginRegHeader';

const Registration = () => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    const history=useHistory();
    const { id } = useParams();
    const data = VolunteerData.find(data => data.id == id)
    const title=data.name;
    const handleRegistrationId=()=>{
        const volunteerInfo={...isLoggedIn,title}
        fetch(`https://guarded-chamber-83757.herokuapp.com/registrationId`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
          body:JSON.stringify(volunteerInfo)

        })
       history.push('/userIdInfo');
    }
    return (
        <div>
            <LoginRegHeader></LoginRegHeader>
            <div className="card" style={{ width: "25rem", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", padding: "30px",marginTop:"20px" }}>
                <div className="card-title">
                    <h3 style={{ fontWeight: "600" }}> Registration as Volunteer</h3>
                </div>
                <div className="card-body">
                    <form>
                        <input type="text" className="form-control" style={{ border: "none", borderBottom: "2px solid lightgray" }} placeholder="Full Name" name="fullname" value={isLoggedIn.name} />
                        <br />
                        <input type="text" className="form-control" style={{ border: "none", borderBottom: "2px solid lightgray" }}
                            value={isLoggedIn.email} name="email" placeholder="Username or Email" />
                        <br />
                       
                        <input type="text" style={{ border: "none", borderBottom: "2px solid lightgray" }} className="form-control" placeholder="Description" name="des" />
                        <br />
                        <input type="text" style={{ border: "none", borderBottom: "2px solid lightgray" }} className="form-control" value={data.name} name="Volunteer name"  />

                      
                     
                      <button  onClick={()=>handleRegistrationId()}  className='btn btn-primary' style={{ width: "250px", marginTop: "30px",marginLeft:"30px" }}  name="button">Registration</button>
                     
                  
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;