import { Routes, Route } from "react-router-dom";
import MockAPI from "../../mock-api";
import { Homepage, Login, Register, Archives, Trashnote } from "../Pages";
import { Privatepath } from "frontend/Component";

const Routespaths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route
        path="/homepage"
        element={
          <Privatepath>
            <Homepage />
          </Privatepath>
        }
      ></Route>
      <Route
        path="/Archives"
        element={
          <Privatepath>
            <Archives />
          </Privatepath>
        }
      ></Route>
      <Route
        path="/trash_note"
        element={
          <Privatepath>
            <Trashnote />
          </Privatepath>
        }
      ></Route>
      <Route path="/mock-api" element={<MockAPI />}></Route>
    </Routes>
  );
};

export default Routespaths;
