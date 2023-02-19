import React from "react";
import { useNavigate } from "react-router-dom";

export const Start = (props) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = ``
        console.log(props.userExists)

        if (props.userExists) {
            path = `/upload`; 
            console.log("redirecting to upload");
        } else {
            path = `/screening`;
            console.log("redirecting to screening");
        }
        navigate(path);
    }

    return (
        <div className="start">
            <div className="startCard">
                <h1 className="title">mindscape</h1>
                <p>unlock your potential</p>
                <button className="continue" onClick={routeChange}>CONTINUE</button>
            </div>
        </div>
        
        
    );
}