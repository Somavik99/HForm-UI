import "./App.css";
import Forms from "./Components/Forms/Forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validation = yup
  .object({
    name: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

function App() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(validation),
  });

  return (
    <>
      <div className="App">
        <Forms register={register} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
