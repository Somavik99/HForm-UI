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
            name="name"
            placeholder="Name"
            style={{ marginLeft: "8px", width: "250px", height: "22px" }}
          />
        </div>
        <div>
          <span>State:</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ marginLeft: "8px", width: "250px", height: "22px" }}
          />
        </div>
        <div>
          <span>City:</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ marginLeft: "8px", width: "250px", height: "22px" }}
          />
        </div>
        <div>
          <span>Country:</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ marginLeft: "8px", width: "250px", height: "22px" }}
          />
        </div>
        <div>
          <span>Pin Code:</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            style={{ marginLeft: "8px", width: "250px", height: "22px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
