import React from 'react';
import help from '../../help.png'

const MyWork = (props) => {
    const { name, title, _id, } = props.data;
    console.log(props.data);
    const handleDelete = (id) => {

        fetch(`https://guarded-chamber-83757.herokuapp.com/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                }
            })

    }
    return (
        <div>
           
            <div>
                <div className="card" style={{ width: "20rem", margin: "30px", height: "12rem", marginTop: "10px", boxShadow: "5px 5px 5px" }}>


                    <div className="col">
                        <div className="row">

                            <div className="col-md-6">
                                <img className="img-fluid" style={{ marginTop: "10px" }} src={help} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h6 style={{ fontWeight: "600", marginTop: "10px" }}>{name}</h6>
                                <p>{title}</p>

                                <button className="btn btn-secondary" onClick={() => handleDelete(_id)}>Cancel</button>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MyWork;