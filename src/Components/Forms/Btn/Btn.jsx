import "./Btn.css"

const Btn = ({onHandleSubmit}) => {
  return (
    <div className="btn_Class" onSubmit={onHandleSubmit}>
      <span >
        <button className="Cancel">CANCEL</button>
      </span>
      <span>
        <button type="submit" className="submit" >SUBMIT</button>
      </span>
    </div>
  );
};

export default Btn;
