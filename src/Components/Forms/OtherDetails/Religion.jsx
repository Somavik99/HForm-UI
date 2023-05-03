import { useState } from "react"


const Religion = () => {

const [RValue, setRValue] = useState("")

const handleRValue = (e)=>{
setRValue(e.target.value)
}

  return (
    <div >
       <select name="" id="" defaultValue={RValue}   style={{ marginLeft: "8px", width: "250px", height: "35px" }} onChange={handleRValue} >
        <option  disabled >Enter Religion</option>
                <option value="">Hindu</option>
                <option value="">Muslim</option>
                <option value="">Other</option>
            </select>
    </div>
  )
}

export default Religion
