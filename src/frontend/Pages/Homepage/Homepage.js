import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Box, NoteSlider, Filter } from "frontend/Component";
export const Homepage = () => {
  const navigate = useNavigate();

  // Check user is login or not
  useEffect(() => {
    if (!localStorage.getItem("rsnote_encodedToken")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Nav />
      <Box />
      <NoteSlider />
      <Filter />
    </>
  );
};
