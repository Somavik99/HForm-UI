import BloodSelect from "./BloodSelect";
import MaritalSelect from "./MaritalSelect";
import "./OtherDetails.css"
import Religion from "./Religion";

const OtherDetails = ({register,required}) => {
  return (
    <div>
      <div style={{ textDecorationLine: "underline" }}>
        <h3>Other Details</h3>
      </div>
      <div className="OthDetails-container">
        <div >
            <span>Occupation :</span>
            <input type="text" placeholder="Enter Occupation"  style={{ marginLeft: "8px", width: "250px", height: "30px" }}/>
        </div>
        <div style={{display:"flex"}}>
            <span>Religion:</span>
           <Religion />
        </div>
        <div style={{display:"flex"}}>
            <span>Marital Status</span>
            <MaritalSelect/>
        </div>
        <div style={{display:"flex"}}>
            <span >Blood Group:</span>
<BloodSelect/>
        </div>
        <div>
            <span>Nationality:</span>
            <input type="text" name="Nation"  style={{ marginLeft: "8px", width: "250px", height: "30px" }}/>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
