import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import OtherDetails from "./OtherDetails/OtherDetails";
import Btn from "./Btn/Btn";

const Forms = () => {
  return (
    <form className="container">
      <div className="Personal">
        <PersonalDetails />
      </div>
      <div className="Contact">
        <ContactDetails />
      </div>
      <div className="Address">
        <Address />
      </div>
      <div className="Address">
        <OtherDetails />
      </div>
      <div style={{float:"right"}}>
        <Btn />
      </div>
    </form>
  );
};

export default Forms;
