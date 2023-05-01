import GovtIssueId from "./GvtIssueId/GovtIssueId";
import "./PersonalDetails.css";
const PersonalDetails = () => {
  return (
    <div className="PersonalContainer">
      <div>
        <div className="container" style={{ textDecorationLine: "underline" }}>
          <h3>Personal Details</h3>
        </div>
        <div className="PersonalDetails">
          <div>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              style={{ marginLeft: "8px", width: "200px", height: "22px" }}
            />
          </div>
          <div>
            <span>Date Of Birth or Age:</span>
            <input
              type="text"
              name="DobA"
              style={{ marginLeft: "8px", width: "200px", height: "22px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Sex:</span>
            <input
              type="text"
              name="sex"
              style={{ marginLeft: "8px", width: "200px", height: "22px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Mobile:</span>
            <input
              type="text"
              name="mobile"
              style={{ marginLeft: "8px", width: "200px", height: "22px" }}
            />
          </div>
          <div className="Govt">
            <span>Govt. Issued ID or Age:</span>
            <GovtIssueId />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
