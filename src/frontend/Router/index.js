import { Routes, Route } from "react-router-dom";
import MockAPI from "../../mock-api";
import { Homepage, Login, Register } from "../Pages";
const Routespaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/homepage" element={<Homepage />}></Route>
      <Route path="/mock-api" element={<MockAPI />}></Route>
    </Routes>
  );
};

export default Routespaths;
