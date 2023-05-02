import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import OtherDetails from "./OtherDetails/OtherDetails";
import Btn from "./Btn/Btn";
import { useForm } from "react-hook-form";

const Forms = () => {
  const {handleSubmit} = useForm()

const onSubmit = (data)=>{
  console.log(data)
}

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
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
