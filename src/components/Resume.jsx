/* eslint-disable react/prop-types */
import "../styles/resume.css"

function Education({ info }){
    if(info.length > 0){
        return(
            <div id="edu-div">
                <h2>Education</h2>
                {info.map(eduObj=>{
                    return (
                       <>
                            <div className="mini-divider"></div>
                            <div key={"edu-resume" + eduObj.id} className="education-row">                 
                                <p className="start-end-date">{eduObj["study-date-start"]}-{eduObj["study-date-end"]}</p>
                                <h3 className="school-name">{eduObj["school-name"]}</h3>
                                <p className="study-title">{eduObj["study-title"]}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        )
    } else {
        return null
    }   
}

function Work({ info }){
    if(info.length > 0){
        return (
            <div id="work-div">
                <h2>Work Experience</h2>
                {info.map(workObj=>{
                    return (
                        <>
                            <div className="mini-divider"></div>
                            <div key={"work-resume" + workObj.id} className="work-row">                 
                                <p className="start-end-date">{workObj["work-date-start"]}-{workObj["work-date-end"]}</p>
                                <h3 className="company-name">{workObj["company-name"]}</h3>
                                <h4 className="position-title">{workObj["position-title"]}</h4>
                                <p className="responsibilities">{workObj["responsibilities"]}</p>
                            </div>
                        </>
                    )
                })}
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
                    <h3>{generalInfo.location}</h3>
                </div>     
            </div>  
            <div id="resume-body">
                <Education info={educationInfo} />
                <div className="divider"></div>
                <Work info={workInfo} />
            </div>
        </div>
    )
}