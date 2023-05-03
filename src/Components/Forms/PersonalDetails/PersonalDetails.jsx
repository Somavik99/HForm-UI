// import { useForm } from "react-hook-form";
import { useForm } from "react-hook-form";
import GovtIssueId from "./GvtIssueId/GovtIssueId";
import "./PersonalDetails.css";

const PersonalDetails = ({ register }) => {
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
         
              placeholder="Name"
              {...register("FName", { required:true })}
              style={{
                marginLeft: "8px",
                width: "250px",
                height: "30px",
                padding: "3px",
              }}
            />
{errors.FName?.type === "required"&& <p style={{color:"black"}}>{errors.name.message}</p> }
          </div>
          <div>
            <span>
              Date Of Birth or Age<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
          
              placeholder="DD/MM/YYYY or Age"
              {...register("DobA", { required:true, valueAsNumber: true })}
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>
              Sex<span style={{ color: "red" }}>*</span>:
            </span>
            <input
              type="text"
             
              placeholder="Sex"
              {...register("sex", { required:true })}
              style={{ marginLeft: "8px", width: "250px", height: "30px" }}
            />
          </div>
          <div>
            <span>Mobile:</span>
            <input
              type="text"
        
              placeholder="Mobile No."
              {...register("mobile", {
                required:true,
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
            <GovtIssueId register={register}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
