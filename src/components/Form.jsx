import { useState } from "react"


export default function Form(){

    let [generalInfo, setGeneralInfo] = useState({name:"fdsa",email:"",phone:""});

    const handleGeneral = (target, input)=>{
        let newGeneral = {...generalInfo}
        newGeneral[target] = input
        setGeneralInfo(newGeneral)
    }


    return (
        <>
            <form action="POST">
                <section id="general">
                    <label htmlFor="name">Name: </label>
                    <input value={generalInfo.name} type="text" id="name" onChange={(e)=>handleGeneral("name",e.target.value)} />
                    
                    <label htmlFor="email">Email: </label>
                    <input value={generalInfo.email} type="email" id="email" onChange={(e)=>handleGeneral("email",e.target.value)} />
                    
                    <label htmlFor="phone">Phone Number: </label>
                    <input value={generalInfo.phone} type="phone" id="phone" onChange={(e)=>handleGeneral("phone",e.target.value)} />
                </section>
                <section id="education">
                    <label htmlFor="school-name">School Name: </label>
                    <input type="text" id="school-name" />
                    
                    <label htmlFor="study-title">Title of Study: </label>
                    <input type="text" id="study-title" />
                    
                    <label htmlFor="study-date">Date of Study: </label>
                    <input type="date" id="study-date" />
                </section>
                <section id="practical">
                <label htmlFor="company-name">Company Name: </label>
                    <input type="text" id="company-name" />
                    
                    <label htmlFor="position-title">Position Title: </label>
                    <input type="text" id="position-title" />

                    <label htmlFor="responsibilities">Responsibilities: </label>
                    <input type="text" id="responsibilities" />
                    
                    <label htmlFor="start-date">Start Date: </label>
                    <input type="date" id="start-date" />

                    <label htmlFor="end-date">End Date: </label>
                    <input type="date" id="end-date" />
                </section>
                <button type="button" id="submit">Submit</button>
            </form>
            <div id="result">
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Phone Number: {generalInfo.phone}</p>
                
            </div>
        </>
    )
}