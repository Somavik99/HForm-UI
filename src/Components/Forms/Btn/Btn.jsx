import "./Btn.css"

const Btn = () => {
  return (
    <div className="btn_Class" >
      <span >
        <input type="button" className="Cancel" value="CANCEL" />
      </span>
      <span>
        <input type="submit" className="submit" value="SUBMIT"/>
      </span>
    </div>
  );
};

export default Btn;
