import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Class = (props) => {
    const [user, setUser] = useState([]);
    const [classInf, setClassInf] = useState([])

    const typeDict = {"VIS": "visual", "AUD": "auditory", "SOC": "social"};

    let classId, className = null;
    let baseURL = "http://4f39-68-65-175-64.ngrok.io/";
    let learnType = null;

    let currUrl =  window.location.href;
    classId = currUrl.substring(currUrl.lastIndexOf("/") + 1, currUrl.length);

    const fetchData  = () => {
        let classJson, sessionJson = null;

        fetch(`${baseURL}classes/${classId}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {return response.json()}) 
        .then((response) => {
            setClassInf(response);
        }
        );
    
        fetch(`${baseURL}sessions/${props.id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {return response.json()}) 
        .then((response) => {
            setUser(response);
        }
        );
    }

    useEffect(() => {
       fetchData()
    },[]);

    const goVisual  = () => {
        console.log(classInf);
        /*let navigate = useNavigate(); 
            let path = `/visual`
            navigate({pathname: path, image: classInf.mind_map});*/
    }
    

    const goAudio  = () => {
        let navigate = useNavigate(); 
            let path = `/audio`
            navigate(path);
    }

    const goSocial  = () => {
        let navigate = useNavigate(); 
            let path = `/social`
            navigate(path);
    }

    

    return (
        <div className="screening" id="class/:classId">
            <div className="screeningCard">
                <h1>{classInf.name}</h1>
                <h4 className="classDesc"> Based on our survey, you are a <span className="highlight">{typeDict[user.learning_pref]}</span> learner.</h4>
                <h4 className="classDesc"> Click on the <span className="highlight">green button</span> for our recommended learing experience.</h4>

                <div className="rowHolder">
                    <div className="row">
                        <div className="col">
                            <button className={`${(user.learning_pref === "VIS") ? "greenLearn" : "greyLearn"}`} onClick={goVisual}>Visual</button>
                        </div>
                        <div className="col">
                            <button className={`${(user.learning_pref === "AUD") ? "greenLearn" : "greyLearn"}`} onClick={goAudio}>Auditory</button>
                        </div>
                        <div className="col">
                            <button className={`${(user.learning_pref === "SOC") ? "greenLearn" : "greyLearn"}`} onClick={goSocial}>Social</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>

    );
}
