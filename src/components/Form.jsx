/* eslint-disable react/prop-types */
import Card from "./Card"
import "../styles/form.css"

export default function Form({ generalInfo, handleGeneral}){

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
                <Card>
                    <section id="education">
                        <h2>Education</h2>
                        <label htmlFor="school-name">School Name: </label>
                        <input type="text" id="school-name" />
                        
                        <label htmlFor="study-title">Title of Study: </label>
                        <input type="text" id="study-title" />
                        
                        <label htmlFor="study-date">Date of Study: </label>
                        <input type="date" id="study-date" />
                    </section>
                </Card>
                <Card>
                    <section id="experience">
                        <h2>Experience</h2>
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
                </Card>
            </form>
        </div>
    )
}