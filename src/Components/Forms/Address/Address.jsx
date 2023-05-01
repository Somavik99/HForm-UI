import "./Address.css";

const Address = () => {
  return (
    <div>
      <div style={{ textDecorationLine: "underline" }}>
        <h3>Address Details</h3>
      </div>
      <div className="AddressContainer">
        <div>
          <span>Address :</span>
          <input
            type="text"
            name="Address"
            placeholder="Enter Address"
            style={{ marginLeft: "8px", width: "250px", height: "30px" }}
          />
        </div>
        <div>
          <span>State:</span>
          <input
            type="text"
            name="state"
            placeholder="Enter State"
            style={{ marginLeft: "8px", width: "250px", height: "30px" }}
          />
        </div>
        <div>
          <span>City:</span>
          <input
            type="text"
            name="City"
            placeholder="Enter City or Village"
            style={{ marginLeft: "8px", width: "250px", height: "30px" }}
          />
        </div>
        <div>
          <span>Country:</span>
          <input
            type="text"
            name="Country"
            placeholder="Enter Country"
            style={{ marginLeft: "8px", width: "250px", height: "30px" }}
          />
        </div>
        <div>
          <span>Pin Code:</span>
          <input
            type="text"
            name="PinCode"
            placeholder="Enter Pin Code"
            style={{ marginLeft: "8px", width: "250px", height: "30px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
