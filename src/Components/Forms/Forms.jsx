import "./Forms.css";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import OtherDetails from "./OtherDetails/OtherDetails";
// import Btn from "./Btn/Btn";
import { useForm } from "react-hook-form";

const Forms = ({ register, handleSubmit }) => {
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
        <PersonalDetails register={register} />
      </div>
      <div className="Contact">
        <ContactDetails register={register} />
      </div>
      <div className="Address">
        <Address register={register} />
      </div>
      <div className="Address">
        <OtherDetails register={register} />
      </div>
      <div style={{ float: "right" }}>
        <div className="btn_Class">
          <span>
            <button className="Cancel">CANCEL</button>
          </span>
          <span>
            <button type="submit" className="submit">
              SUBMIT
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Forms;
