import "./GovtIssuedId.css";
import Select from "react-select";
import { useState } from "react";

const GovtIssueId = ({ register, required,onHandleSubmit }) => {
  const [InitialValue, setInitialValue] = useState(null);

  const options = [
    { value: "Adhaar", label: "Adhaar Card" , message:"Enter 12 digit Adhaar number"},
    { value: "Pan", label: "Pan Card" ,message:"Enter Pan number"},
  ];

  return (
    <form className="GovtContainer" onSubmit={onHandleSubmit}>
      <Select
        options={options}
        defaultValue={InitialValue}
        placeholder="ID Type"
        {...register("Select", {
          required,
        })}
        onChange={() => setInitialValue(InitialValue)}
      />
      <input
        type="text"
        name="Govt"
        placeholder="Enter Govt. ID"
        style={{ width: "250px", height: "30px", margin: "8px" }}
        {...register("Govt", {
          required,
        })}
      />
      {/* {errors.Govt == InitialValue && <div>Enter 12 digit Adhaar number</div>}
      {errors.Govt == InitialValue && <div>Enter the Pan number</div>} */}
    </form>
  );
};

export default GovtIssueId;
