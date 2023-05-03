import "./Btn.css";

const Btn = () => (
  <>
    <div className="btn_Class">
      <span>
        <button className="Cancel">CANCEL</button>
      </span>
      <span>
        <button type="submit" className="submit" >
          SUBMIT
        </button>
      </span>
    </div>
  </>
);

export default Btn;
