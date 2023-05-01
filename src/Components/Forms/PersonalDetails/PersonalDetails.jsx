import GovtIssueId from "./GvtIssueId/GovtIssueId";
import "./PersonalDetails.css"
const PersonalDetails = () => {
  return (
    <div>
        <div className="PersonalDetails">
      <div >
        <span>Name:</span>
        <input type="text" />
      </div>
      <div>
        <span>Date Of Birth or Age:</span>
        <input type="text" />
      </div>
      <div>
        <span>Sex:</span>
        <input type="text" />
      </div>
      <div>
        <span>Mobile:</span>
        <input type="text" />
      </div>
      <div>
        <span>Govt. Issued ID:</span>
        <GovtIssueId/>
      </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
