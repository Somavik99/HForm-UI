import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import OtherDetails from "./OtherDetails/OtherDetails";
import Btn from "./Btn/Btn";

const Forms = ({ register, handleSubmit }) => {
  const onHandleSubmit = (data) => {
    console.log(data);
    // localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <form className="container" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="Personal">
        <PersonalDetails
          register={register}
          required
          onHandleSubmit={onHandleSubmit}
        />
      </div>
      <div className="Contact">
        <ContactDetails
          register={register}
          required
          onHandleSubmit={onHandleSubmit}
        />
      </div>
      <div className="Address">
        <Address register={register} required onHandleSubmit={onHandleSubmit} />
      </div>
      <div className="Address">
        <OtherDetails
          register={register}
          required
          onHandleSubmit={onHandleSubmit}
        />
      </div>
      <div style={{ float: "right" }}>
        <Btn onHandleSubmit={onHandleSubmit}/>
      </div>
    </form>
  );
};

export default Forms;
