import GovtIssueId from "./GvtIssueId/GovtIssueId";
import "./PersonalDetails.css";
const PersonalDetails = () => {
  return (
    <div className="PersonalContainer">
      <div>
        <div style={{ textDecorationLine: "underline" }}>
          <h3>Personal Details</h3>
        </div>
        <div className="PersonalDetails">
          <div>
            <span>
              Name<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>
              Date Of Birth or Age<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
              name="DobA"
              placeholder="DD/MM/YYYY or Age"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>
              Sex<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>Mobile:</span>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div className="Govt">
            <span>
              Govt. Issued ID or Age<span style={{ color: "red" }}>*</span>:
            </span>
            <GovtIssueId />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
