import { useState } from "react"


const MaritalSelect = () => {

  const [MState,setMState] = useState("")

  return (
    <div>
      <select  style={{ marginLeft: "8px", width: "250px", height: "35px" }} >
        <option defaultValue={MState} disabled onChange={(e)=>setMState(e.target)} >Enter Marital Status</option>
        <option value="">Single</option>
        <option value="">Married</option>
        <option value="">Divorcee</option>
        <option value="">Widowed</option>
      </select>
    </div>
  )
}

export default MaritalSelect
