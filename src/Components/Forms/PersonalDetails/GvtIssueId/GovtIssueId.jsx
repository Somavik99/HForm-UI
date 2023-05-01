import "./GovtIssuedId.css"

const GovtIssueId = () => {
  return (
    <div className="GovtContainer">
      <select   style={{width:"180px", height:"30px", marginLeft:"20px"}}>
        <option value="" disabled  selected >ID Type</option>
        <option value="Adhaar" itemType="Adhaar" >
          Adhaar Card
        </option>
        <option value="Pan" id="Pan">
          Pan Card
        </option>
      </select>
      <input type="text" placeholder="Enter Govt. ID" style={{width:"250px", height:"30px",margin:"8px"}} />
    </div>
  );
};

export default GovtIssueId;
