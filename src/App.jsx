import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import Resume from './components/Resume';

function App() {

  let [generalInfo, setGeneralInfo] = useState({name:"John Smith",email:"hisname@yahoo.com",phone:"808-555-1414"});
  let [educationInfo, setEducationInfo] = useState([])
  let [workInfo, setWorkInfo] = useState([])

  const handleGeneral = (target, input)=>{
      let newGeneral = {...generalInfo}
      newGeneral[target] = input
      setGeneralInfo(newGeneral)
  }

  const handleEducation = (target, id, input)=>{
    let newEducation = educationInfo.map((eduObj)=>{
      if(id === eduObj.id){
        let newEduObj = {...eduObj}
        newEduObj[target] = input
        return newEduObj
      } else {
        return {...eduObj}
      }
    })
    setEducationInfo(newEducation)
  }

  const handleNewEducation = (newId)=>{
    
    const newEducation = [...educationInfo,{
      id:newId,
      "school-name":"",
      "study-title":"",
      "study-date-start":"",
      "study-date-end":""  
    }]
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
      educationInfo={educationInfo} handleEducation={handleEducation} handleNewEducation={handleNewEducation}
      workInfo={workInfo} handleWork={handleWork}/>
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo} />
    </>
    
    
  )
}

export default App
