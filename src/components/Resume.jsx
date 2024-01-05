/* eslint-disable react/prop-types */
import "../styles/resume.css"

function Education({ info }){
    if(info){
        return(
            <div>
                <h2>Education</h2>
                <div className="education-row">
                    
                    <p>{info["study-date-start"]}-{info["study-date-end"]}</p>
                    <h3>{info["school-name"]}</h3>
                    <p>{info["study-title"]}</p>

                </div>
            </div>
        )
    } else {
        return null
    }   
}

function Work({ info }){
    if(info.length > 0){
        return (
            <div>
                <h2>Work Experience</h2>
            </div>
        )
    } else{
        return null
    }
    
}

export default function Resume({ generalInfo, educationInfo, workInfo }){
    
    

    

    return(
        <div id="resume">
            <div id="resume-head">
                <h1>{generalInfo.name}</h1>
                <div id="head-info">
                    <h3>{generalInfo.email}</h3>
                    <h3>{generalInfo.phone}</h3>
                </div>     
            </div>   
            <Education info={educationInfo} />
            <Work info={workInfo} />
        </div>
    )
}