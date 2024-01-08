/* eslint-disable react/prop-types */
import { useState } from "react"
import Card from "./Card"
import "../styles/form.css"

function Education({ educationInfo, handleEducation, expand, selectedId, handleIdSelected, handleDeleteInfo, handleNewInfo }){
    if(expand && selectedId === -1){
        return (
            <>
                <ul>
                    {educationInfo.map((eduObj)=>{
                        return (
                            <li key={"edu" + eduObj.id}>
                                <button type="button" onClick={()=>handleDeleteInfo('edu', eduObj.id)} className='delete-btn'>X</button>
                                <p onClick={()=>{handleIdSelected('edu', eduObj.id)}}>{eduObj["school-name"]}</p>
                            </li>
                        )
                    })}
                </ul>
                <button type="button" className="add-btn" onClick={()=>handleNewInfo('edu')}>+</button>
            </>
        )
    }else if(expand && selectedId >= 0){
        return(
            <>
                <label htmlFor="school-name">School Name</label>
                <input value={educationInfo.find(obj => obj.id === selectedId)["school-name"]} onChange={(e)=>handleEducation("school-name",e.target.value)} type="text" id="school-name" />
                
                <label htmlFor="study-title">Title of Study</label>
                <input value={educationInfo.find(obj => obj.id === selectedId)["study-title"]} onChange={(e)=>handleEducation("study-title",e.target.value)} type="text" id="study-title" />
                
                <label htmlFor="study-date-start">Start Date</label>
                <input value={educationInfo.find(obj => obj.id === selectedId)["study-date-start"]} onChange={(e)=>handleEducation("study-date-start",e.target.value)} type="text" id="study-date-start" />

                <label htmlFor="study-date-end">End Date</label>
                <input value={educationInfo.find(obj => obj.id === selectedId)["study-date-end"]} onChange={(e)=>handleEducation("study-date-end",e.target.value)} type="text" id="study-date-start" />
                
                <div id="edu-options">
                    <button type="button" onClick={()=>{handleEducation()}}>Clear</button>
                    <button type="button" onClick={()=>handleIdSelected("edu",-1)}>Confirm</button>
                </div>
            </>
        )
        
    }else{
        return null
    }
}

function Work({ workInfo, handleWork, expand, selectedId, handleIdSelected, handleDeleteInfo, handleNewInfo  }){
    if(expand && selectedId === -1){
        return (
            <>
                <ul>
                    {workInfo.map((workObj)=>{
                        return (
                            <li key={"work" + workObj.id}>
                                <button type="button" onClick={()=>handleDeleteInfo('work', workObj.id)}>X</button>
                                <p onClick={()=>{handleIdSelected('work', workObj.id)}}>{workObj["company-name"]}</p>
                            </li>
                            
                        )
                    })}
                </ul>
                <button type="button" className="add-btn" onClick={()=>handleNewInfo('work')}>+</button>
            </>
        )
    } else if(expand && selectedId >= 0){
        return(
            <>
                <label htmlFor="company-name">Company Name: </label>
                <input value={workInfo.find(obj => obj.id === selectedId)["company-name"]} onChange={(e)=>{handleWork("company-name",e.target.value)}} type="text" id="company-name" />
                
                <label htmlFor="position-title">Position Title: </label>
                <input value={workInfo.find(obj => obj.id === selectedId)["position-title"]} onChange={(e)=>{handleWork("position-title",e.target.value)}} type="text" id="position-title" />

                <label htmlFor="responsibilities">Responsibilities: </label>
                <input value={workInfo.find(obj => obj.id === selectedId)["responsibilities"]} onChange={(e)=>{handleWork("responsibilities",e.target.value)}} type="text" id="responsibilities" />
                
                <label htmlFor="work-date-start">Start Date</label>
                <input value={workInfo.find(obj => obj.id === selectedId)["work-date-start"]} onChange={(e)=>{handleWork("work-date-start",e.target.value)}} type="text" id="work-date-start" />

                <label htmlFor="work-date-end">End Date</label>
                <input value={workInfo.find(obj => obj.id === selectedId)["work-date-end"]} onChange={(e)=>{handleWork("work-date-end",e.target.value)}} type="text" id="work-date-end" />

                <div id="work-options">
                    <button type="button" onClick={()=>{handleWork()}}>Clear</button>
                    <button type="button" onClick={()=>handleIdSelected("work",-1)}>Confirm</button>
                </div>
            </>
        )
    } else{
        return null
    }
}

export default function Form({ generalInfo, handleGeneral, educationInfo,
     handleEducation, workInfo, handleWork, selectedId, handleIdSelected, handleDeleteInfo,
     handleNewInfo }){

    let [expanded, setExpanded] = useState({edu:false,work:false})

    const handleExpand = (section)=>{
        let newExpand = {...expanded}
        newExpand[section] = !newExpand[section]
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
                
                <Card >
                    <section id="education">
                        <h2 onClick={()=>handleExpand("edu")}>Education</h2>
                        <Education educationInfo={educationInfo}
                        handleEducation={handleEducation} expand={expanded.edu} selectedId={selectedId.edu}
                        handleIdSelected={handleIdSelected} handleDeleteInfo={handleDeleteInfo}
                        handleNewInfo={handleNewInfo}/>
                    </section>
                </Card>
                <Card >
                    <section id="experience">
                        <h2 onClick={()=>handleExpand("work")}>Work Experience</h2>
                        <Work workInfo={workInfo} handleWork={handleWork} expand={expanded.work}
                        selectedId={selectedId.work} handleIdSelected={handleIdSelected} handleDeleteInfo={handleDeleteInfo}
                        handleNewInfo={handleNewInfo} />
                    </section>
                </Card>
            </form>
        </div>
    )
}