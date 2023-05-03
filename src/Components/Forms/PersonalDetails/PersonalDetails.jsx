// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import GovtIssueId from "./GvtIssueId/GovtIssueId";
import "./PersonalDetails.css";

const PersonalDetails = ({ register, required }) => {
  const {formState: {errors}} = useForm()
  return (
    <div className="PersonalContainer">
      <div>
        <div style={{ textDecorationLine: "underline" }}>
          <h3>Personal Details</h3>
        </div>
        <div className="PersonalDetails">
          <div>
            <span>
              Name<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register("FirstName", { required })}
              style={{
                marginLeft: "8px",
                width: "250px",
                height: "30px",
                padding: "3px",
              }}
            />
{errors.FirstName && <span style={{color:"red"}}>Name required</span> }
          </div>
          <div>
            <span>
              Date Of Birth or Age<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
              name="DobA"
              placeholder="DD/MM/YYYY or Age"
              {...register("DobA", { required, valueAsNumber: true })}
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>
              Sex<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
              name="sex"
              placeholder="Sex"
              {...register("sex", { required })}
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>Mobile:</span>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile No."
              {...register("mobile", {
                required,
                valueAsNumber: true,
                maxLength: {
                  value: 10,
                },
              })}
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div className="Govt">
            <span>
              Govt. Issued ID or Age<span style={{ color: "red" }}>*</span>:
            </span>
            <GovtIssueId register={register} required />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
