/* eslint-disable react/prop-types */
import { useState } from "react"
import Card from "./Card"
import "../styles/form.css"

function Education({ educationInfo, handleEducation, expand, selectedId }){
    if(expand){
        return(
            <>
                <label htmlFor="school-name">School Name</label>
                <input value={educationInfo[selectedId]["school-name"]} onChange={(e)=>handleEducation("school-name",e.target.value)} type="text" id="school-name" />
                
                <label htmlFor="study-title">Title of Study</label>
                <input value={educationInfo[selectedId]["study-title"]} onChange={(e)=>handleEducation("study-title",e.target.value)} type="text" id="study-title" />
                
                <label htmlFor="study-date-start">Start Date</label>
                <input value={educationInfo[selectedId]["study-date-start"]} onChange={(e)=>handleEducation("study-date-start",e.target.value)} type="text" id="study-date-start" />

                <label htmlFor="study-date-end">End Date</label>
                <input value={educationInfo[selectedId]["study-date-end"]} onChange={(e)=>handleEducation("study-date-end",e.target.value)} type="text" id="study-date-start" />
            </>
        )
        
    }else{
        return null
    }
}

function Work({ workInfo, handleWork, expand }){
    if(expand){
        return(
            <>
                <label htmlFor="company-name">Company Name: </label>
                <input value={workInfo["company-name"]} onChange={(e)=>{handleWork("company-name",e.target.value)}} type="text" id="company-name" />
                
                <label htmlFor="position-title">Position Title: </label>
                <input value={workInfo["position-title"]} onChange={(e)=>{handleWork("position-title",e.target.value)}} type="text" id="position-title" />

                <label htmlFor="responsibilities">Responsibilities: </label>
                <input value={workInfo["responsibilities"]} onChange={(e)=>{handleWork("responsibilities",e.target.value)}} type="text" id="responsibilities" />
                
                <label htmlFor="work-date-start">Start Date</label>
                <input value={workInfo["work-date-start"]} onChange={(e)=>{handleWork("work-date-start",e.target.value)}} type="text" id="work-date-start" />

                <label htmlFor="work-date-end">End Date</label>
                <input value={workInfo["work-date-end"]} onChange={(e)=>{handleWork("work-date-end",e.target.value)}} type="text" id="work-date-end" />
            </>
        )
    } else{
        return null
    }
}

export default function Form({ generalInfo, handleGeneral, educationInfo,
     handleEducation, workInfo, handleWork, selectedId }){

    let [expanded, setExpanded] = useState({edu:false,work:false})

    const handleExpand = (section)=>{
        let newExpand = {...expanded}
        newExpand[section] = true
        setExpanded(newExpand)
    }

    return (
        <div className="form-container">
            
            <form action="POST">
                <Card>
                    <section id="general">
                        <h2>General Info</h2>
                        <label htmlFor="name">Full Name: </label>
                        <input value={generalInfo.name} type="text" id="name" onChange={(e)=>handleGeneral("name",e.target.value)} />
                        
                        <label htmlFor="email">Email: </label>
                        <input value={generalInfo.email} type="email" id="email" onChange={(e)=>handleGeneral("email",e.target.value)} />
                        
                        <label htmlFor="phone">Phone Number: </label>
                        <input value={generalInfo.phone} type="phone" id="phone" onChange={(e)=>handleGeneral("phone",e.target.value)} />
                    </section>
                </Card>
                <Card onClick={()=>handleExpand("edu")}>
                    <section id="education">
                        <h2>Education</h2>
                        <Education educationInfo={educationInfo}
     handleEducation={handleEducation} expand={expanded.edu} selectedId={selectedId.edu} />
                    </section>
                </Card>
                <Card onClick={()=>handleExpand("work")}>
                    <section id="experience">
                        <h2>Work Experience</h2>
                        <Work workInfo={workInfo} handleWork={handleWork} expand={expanded.work} />
                    </section>
                </Card>
            </form>
        </div>
    )
}