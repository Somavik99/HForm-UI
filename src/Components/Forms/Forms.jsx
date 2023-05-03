import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import OtherDetails from "./OtherDetails/OtherDetails";
import Btn from "./Btn/Btn";
import { useForm } from "react-hook-form";

const Forms = ({ register, handleSubmit,required }) => {
  const {

    formState: { errors },
  } = useForm();
  const onHandleSubmit = (data) => {
    if (data) {
      console.log(data);
    } else {
      console.log(errors);
    }

    // localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <form className="container" onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="Personal">
        <PersonalDetails
          register={register}
          required={required}
         
        />
      </div>
      <div className="Contact">
        <ContactDetails
          register={register}
          required={required}
          onHandleSubmit={onHandleSubmit}
        />
      </div>
      <div className="Address">
        <Address register={register} required={required}  />
      </div>
      <div className="Address">
        <OtherDetails
          register={register}
          required={required}
          
        />
      </div>
      <div style={{ float: "right" }}>
        <Btn handleSubmit={handleSubmit} register={register}/>
      </div>
    </form>
  );
};

export default Forms;
