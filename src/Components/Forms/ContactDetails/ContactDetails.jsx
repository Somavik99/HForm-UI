import "./ContactDetails.css";

const ContactDetails = ({ register,}) => {
  return (
    <div >
      <div>
        <div style={{ textDecorationLine: "underline" }}>
          <h3>Contact Details</h3>
        </div>
        <div className="ContactDetails_container">
          <div>
            <span>Guardian Details:</span>
            <input
              type="text"
              name="gName"
              placeholder="Name"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
              {...register("gName", {
                required:true,
              })}
            />
          </div>
          <div>
            <span>Email:</span>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
              {...register("email", { required:true })}
            />
          </div>
          <div>
            <span>Emergency Contact Number:</span>
            <input
              type="text"
              name="EmerGencyContact"
              placeholder="Emergency Contact No."
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
              {...register("EmerGencyContact", { required:true })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
