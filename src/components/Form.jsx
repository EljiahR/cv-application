
/* eslint-disable react/prop-types */
export default function Form({ sectionName = "general-info", info = [{name:"name",type:"text"},
{name:"email",type:"text"},{name:"phone number",type:"phone"}] }){

    const inputs = info.map(obj=>{
        return (
            <>
                <label htmlFor={obj.name}>{obj.name}</label>
                <input key={obj.name} type={obj.type} id={obj.name}></input>
            </>
        
        )
    })
    return (
        <section id={sectionName}>
            {inputs}
        </section>
    )
}