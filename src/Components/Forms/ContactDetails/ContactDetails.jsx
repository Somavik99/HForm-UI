import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <div>
      <div>
        <div style={{ textDecorationLine: "underline" }}>
          <h3>Contact Details</h3>
        </div>
        <div className="ContactDetails_container">
          <div>
            <span>Guardian Details:</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>Email:</span>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>Emergency Contact Number:</span>
            <input
              type="text"
              name="name"
              placeholder="Emergency Contact No."
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
