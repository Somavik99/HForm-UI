import { useForm } from "react-hook-form";
import "./GovtIssuedId.css";
import Select from "react-select";
import { useState } from "react";

const GovtIssueId = () => {
  const [InitialValue, setInitialValue] = useState(null);
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      select: "",
    },
  });

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
      />
      <input
        type="text"
        name="Govt"
        placeholder="Enter Govt. ID"
        style={{ width: "250px", height: "30px", margin: "8px" }}
        {...register("Govt",{
          required:true
        })}
      />
      {errors.name==={options} && <p>Enter 12 digit Adhaar number</p>}
      {errors.name=== {options} && <p>Enter the Pan number</p>}
    </div>
  );
};

export default GovtIssueId;
