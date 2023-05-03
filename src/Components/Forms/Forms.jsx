import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import OtherDetails from "./OtherDetails/OtherDetails";
import Btn from "./Btn/Btn";





const Forms = ({register, handleSubmit}) => {


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
      <div className="Personal">
        <PersonalDetails register={register} required />
      </div>
      <div className="Contact">
        <ContactDetails register={register} required/>
      </div>
      <div className="Address">
        <Address register={register} required />
      </div>
      <div className="Address">
        <OtherDetails register={register} required/>
      </div>
      <div style={{ float: "right" }}>
        <Btn />
      </div>
    </form>
  );
};

export default Forms;
