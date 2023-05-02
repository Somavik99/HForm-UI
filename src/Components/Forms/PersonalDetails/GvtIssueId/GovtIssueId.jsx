import { useForm } from "react-hook-form";
import "./GovtIssuedId.css";
import Select from "react-select";
import { useState } from "react";

const GovtIssueId = () => {
  const [InitialValue, setInitialValue] = useState(null);
  const {
    register,
    formState: { errors },
  } = useForm();

  const options = [
    { value: "Adhaar", label: "Adhaar Card" },
    { value: "Pan", label: "Pan Card" },
  ];

  return (
    <div className="GovtContainer">
      <Select
        options={options}
        defaultValue={InitialValue}
        placeholder="ID Type"
        {...register("Select",{
          required: true,
          maxLength:{}
        })}
      />
      <input
        type="text"
        name="Govt"
        placeholder="Enter Govt. ID"
        style={{ width: "250px", height: "30px", margin: "8px" }}
        {...register("Govt",{
          required:true
        })}
        onChange={(e)=>setInitialValue(e.target.InitialValue)}
      />
      {errors.Govt == InitialValue && <div>Enter 12 digit Adhaar number</div>}
      {errors.Govt == InitialValue && <div>Enter the Pan number</div>}
    </div>
  );
};

export default GovtIssueId;
