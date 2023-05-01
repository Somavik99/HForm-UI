import "./GovtIssuedId.css"

const GovtIssueId = () => {
  return (
    <div>
      <select placeholder="ID Type">
        <option value="Adhaar" itemType="Adhaar">
          Adhaar Card
        </option>
        <option value="Pan" id="Pan">
          Pan Card
        </option>
      </select>
      <input type="text" placeholder="Enter Govt. ID" />
    </div>
  );
};

export default GovtIssueId;
