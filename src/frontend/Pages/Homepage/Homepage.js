import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, NoteSlider } from "frontend/Component";
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
      <Box />
      <NoteSlider />
    </>
  );
};
