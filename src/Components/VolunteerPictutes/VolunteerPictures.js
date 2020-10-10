import React from 'react';
import {  useHistory } from 'react-router-dom';

const VolunteerPictures = ({ VolunteerData }) => {
    let history = useHistory();
    const handleRegistration = () => {
        history.push(`/registration/${VolunteerData.id}`);
    }
    return (
        <div className="col-md-3" onClick={handleRegistration}>


            <img style={{ height: "300px", cursor: "pointer" }}  src={require(`../../images/${VolunteerData.image}`)} alt="" />


            <div style={{ backgroundColor: "lightgary" }}>
                <h4 style={{
                    width: "200px", marginLeft: "40px",

                }}>{VolunteerData.name}</h4>
            </div>
        </div>
    );
};

export default VolunteerPictures;