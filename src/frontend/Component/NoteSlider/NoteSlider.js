import styles from "./NoteSlider.module.css";
import { Note } from "../Note/Note";
import { Scrollbar } from "react-scrollbars-custom";
export const NoteSlider = () => {
  return (
    <div className={`${styles.note_slider} scrollbar `} id="style-3">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note /> <Note /> <Note /> <Note /> <Note /> <Note />
    </div>
  );
};
