import { useState } from 'react'
import Form from './components/Form'
import './App.css'
import Resume from './components/Resume';

function App() {

  let [generalInfo, setGeneralInfo] = useState({name:"fdsa",email:"",phone:""});

    const handleGeneral = (target, input)=>{
        let newGeneral = {...generalInfo}
        newGeneral[target] = input
        setGeneralInfo(newGeneral)
    }

  return (
    <>
      <Form generalInfo={generalInfo} handleGeneral={handleGeneral}/>
      <Resume generalInfo={generalInfo} />
    </>
    
    
  )
}

export default App
