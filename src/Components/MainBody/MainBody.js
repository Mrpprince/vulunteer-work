import React from 'react';
import VolunteerData from './Volunteer'
import Header from '../Header/Header'
import VolunteerPictures from '../VolunteerPictutes/VolunteerPictures';
const MainBody = () => {
    return (
        <div className="container">
            <div >
                <Header></Header>
            </div>
            <div style={{ marginTop: "100px" }} className="row">
                {
                    VolunteerData.map(VolunteerData => <VolunteerPictures key={VolunteerData.id} VolunteerData={VolunteerData} ></VolunteerPictures>)
                }
            </div>
        </div>
    );
};

export default MainBody;