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

  const handleEducation = (target, input)=>{
  
  }
  
  const handleWork = (target, input)=>{
  
  }

  return (
    <>
      <Form generalInfo={generalInfo} handleGeneral={handleGeneral}
      educationInfo={educationInfo} handleEducation={handleEducation}
      workInfo={workInfo} handleWork={handleWork}/>
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo} />
    </>
    
    
  )
}

export default App
