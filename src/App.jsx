import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import Resume from './components/Resume';

function App() {

  let [generalInfo, setGeneralInfo] = useState({name:"John Smith",email:"hisname@yahoo.com",phone:"808-555-1414", location: "My, House"});
  let [educationInfo, setEducationInfo] = useState([
      {id:0,"school-name":"Business University", "study-title": "Business", "study-date-start":"03/2002","study-date-end":"present"},
      {id:1,"school-name":"Big Business State", "study-title": "Art", "study-date-start":"10/2007","study-date-end":"05/2010"}
    ])
  let [workInfo, setWorkInfo] = useState([
    {id:0, "company-name":"Big Company", "position-title": "Janitor", "responsibilities":"Mopping all 100 floors of Big Company every day", "work-date-start": "12/2001", "work-date-end": "present"}
  ])
  let [selectedId, setSelectedId] = useState({edu:-1,work:-1})

  const handleGeneral = (target, input)=>{
      let newGeneral = {...generalInfo}
      newGeneral[target] = input
      setGeneralInfo(newGeneral)
  }

  const handleEducation = (target = "", input = "")=>{
    
    let newEducation = educationInfo.map((eduObj)=>{
      
      if(selectedId.edu === eduObj.id){
        let eduCopy
        if(target === ""){
          eduCopy = {id:eduObj.id,"school-name":"", "study-title": "", "study-date-start":"","study-date-end":""}
        }else{
          eduCopy = {...eduObj}
          eduCopy[target] = input
        }
        
        return eduCopy
      }
      return ({...eduObj})
    })
   
    setEducationInfo(newEducation)
  }

  const handleWork = (target = "", input = '')=>{
     
    let newWork = workInfo.map((workObj)=>{
      
      if(selectedId.work === workObj.id){
        let workCopy
        if(target === ""){
          workCopy = {id:workObj.id, "company-name":"", "position-title": "", "responsibilities":"", "work-date-start": "", "work-date-end": ""}
        }else {
          workCopy = {...workObj}
          workCopy[target] = input
        }
        
        return workCopy
      }
      return ({...workObj})
    })
   
    setWorkInfo(newWork)
  }

  const handleIdSelected = (section, id) => {
    
    let newSelectedId = {...selectedId}
    newSelectedId[section] = id
    
    setSelectedId(newSelectedId)
  }

  const handleDeleteInfo = (section, id) => {
    if(confirm("Are you sure you want to delete this?")){
      let newInfo
      if(section === 'edu'){
        newInfo = educationInfo.filter((obj) => obj.id !== id)
        setEducationInfo(newInfo)
      } else if(section === 'work'){
        newInfo = workInfo.filter((obj) => obj.id !== id)
        setWorkInfo(newInfo)
      }
    }
  }

  const handleNewInfo = (section) => {
    let idList
    let newObj
    let newObjArray
    let newId = 0
    if(section === 'edu'){
      idList = educationInfo.map(obj =>{
        return obj.id
      })
      console.log(idList)
      while(idList.indexOf(newId) > -1){
        newId++
      }
      newObj = {id:newId,"school-name":"", "study-title": "", "study-date-start":"","study-date-end":""}
      newObjArray = [...educationInfo, newObj]
      setEducationInfo(newObjArray)
      
    } else if(section === 'work'){
      idList = workInfo.map(obj =>{
        return obj.id
      })
      while(idList.indexOf(newId) > -1){
        newId++
      }
      newObj = {id:newId, "company-name":"", "position-title": "", "responsibilities":"", "work-date-start": "", "work-date-end": ""}
      newObjArray = [...workInfo, newObj]
      setWorkInfo(newObjArray)
    }
    let newSelection = {...selectedId}
    newSelection[section] = newId
    setSelectedId(newSelection)
  }

  return (
    <>
      <Form generalInfo={generalInfo} handleGeneral={handleGeneral}
      educationInfo={educationInfo} handleEducation={handleEducation}
      workInfo={workInfo} handleWork={handleWork} selectedId={selectedId}
      handleIdSelected={handleIdSelected} handleDeleteInfo={handleDeleteInfo}
      handleNewInfo={handleNewInfo} />
      <Resume generalInfo={generalInfo} educationInfo={educationInfo} workInfo={workInfo} />
    </>
    
    
  )
}

export default App
