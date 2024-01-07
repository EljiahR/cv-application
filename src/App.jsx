import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import Resume from './components/Resume';

function App() {

  let [generalInfo, setGeneralInfo] = useState({name:"John Smith",email:"hisname@yahoo.com",phone:"808-555-1414"});
  let [educationInfo, setEducationInfo] = useState(
    [
      {id:0,"school-name":"Business University", "study-title": "Business", "study-date-start":"03/2002","study-date-end":"present"},
      {id:1,"school-name":"Big Business State", "study-title": "Art", "study-date-start":"10/2007","study-date-end":"05/2010"}
    ])
  let [workInfo, setWorkInfo] = useState({"company-name":"Big Company", "position-title": "Janitor", "responsibilities":"Mopping all 100 floors of Big Company every day", "work-date-start": "12/2001", "work-date-end": "present"})
  let [selectedId, setSelectedId] = useState({edu:-1,work:0})

  const handleGeneral = (target, input)=>{
      let newGeneral = {...generalInfo}
      newGeneral[target] = input
      setGeneralInfo(newGeneral)
  }

  const handleEducation = (target, input)=>{
    
    let newEducation = educationInfo.map((eduObj)=>{
      
      if(selectedId.edu === eduObj.id){
        let eduCopy = {...eduObj}
        eduCopy[target] = input
        return eduCopy
      }
      return ({...eduObj})
    })
   
    setEducationInfo(newEducation)
  }

  const handleWork = (target, input)=>{
     
    let newWork = workInfo.map((workObj)=>{
      
      if(selectedId.work === workObj.id){
        let eduCopy = {...workObj}
        eduCopy[target] = input
        return eduCopy
      }
      return ({...workObj})
    })
   
    setWorkInfo(newWork)
  }

  const handleIdSelected = (section, id) => {
    console.log(section, id)
    let newSelectedId = {...selectedId}
    newSelectedId[section] = id
    
    setSelectedId(newSelectedId)
  }

  return (
    <>
      <Form generalInfo={generalInfo} handleGeneral={handleGeneral}
      educationInfo={educationInfo} handleEducation={handleEducation}
      workInfo={workInfo} handleWork={handleWork} selectedId={selectedId}
      handleIdSelected={handleIdSelected} />
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo} />
    </>
    
    
  )
}

export default App
