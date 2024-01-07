import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import Resume from './components/Resume';

function App() {

  let [generalInfo, setGeneralInfo] = useState({name:"John Smith",email:"hisname@yahoo.com",phone:"808-555-1414"});
  let [educationInfo, setEducationInfo] = useState([{id:0,"school-name":"Business University", "study-title": "Business", "study-date-start":"03/2002","study-date-end":"present"}])
  let [workInfo, setWorkInfo] = useState({"company-name":"Big Company", "position-title": "Janitor", "responsibilities":"Mopping all 100 floors of Big Company every day", "work-date-start": "12/2001", "work-date-end": "present"})
  let [selectedId, setSelectedId] = useState({edu:0,work:0})

  const handleGeneral = (target, input)=>{
      let newGeneral = {...generalInfo}
      newGeneral[target] = input
      setGeneralInfo(newGeneral)
  }

  const handleEducation = (target, input)=>{
    
    let newEducation = educationInfo.map(eduObj=>{
      
      if(selectedId.edu === eduObj.id){
        let eduCopy = {...eduObj}
        eduCopy[target] = input
        return eduCopy
      }
      return ({...eduObj})
    })
    console.log(newEducation)
    setEducationInfo(newEducation)
  }

  const handleWork = (target, input)=>{
    let newWork = {...workInfo}
    newWork[target] = input
    setWorkInfo(newWork)
  }

  return (
    <>
      <Form generalInfo={generalInfo} handleGeneral={handleGeneral}
      educationInfo={educationInfo} handleEducation={handleEducation}
      workInfo={workInfo} handleWork={handleWork} selectedId={selectedId}/>
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo} />
    </>
    
    
  )
}

export default App
