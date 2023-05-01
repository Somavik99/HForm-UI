import MaritalSelect from "./MaritalSelect";
import "./OtherDetails.css"
import Religion from "./Religion";

const OtherDetails = () => {
  return (
    <div>
      <div style={{ textDecorationLine: "underline" }}>
        <h3>Other Details</h3>
      </div>
      <div>
        <div>
            <span>Occupation :</span>
            <input type="text" placeholder="Enter Occupation" />
        </div>
        <div>
            <span>Religion:</span>
           <Religion/>
        </div>
        <div>
            <span>Marital Status</span>
            <MaritalSelect/>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
