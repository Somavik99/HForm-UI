import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";



const Forms = () => {
  return (
    <>
      <div className="Personal" >
        <PersonalDetails />
      </div>
      <div className="Contact">
        <ContactDetails />
      </div>
      <div className="Address">
        <Address />
      </div>
    </>
  );
};

export default Forms;
