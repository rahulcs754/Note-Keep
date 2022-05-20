import styles from "./NoteSlider.module.css";
import { Note } from "../Note/Note";
import { useAuthData, useFilter } from "frontend/Context";
import { getFilterNotes } from "frontend/utils/Filter";

export const NoteSlider = () => {
  const {
    userAuth: { notes },
    DispatchUserAuth,
  } = useAuthData();
  const { filterState } = useFilter();

  const FilterNotes = getFilterNotes(filterState, notes);
  return (
    <div className={`${styles.note_slider} scrollbar `} id="style-3">
      {FilterNotes.map((note, index) => {
        return (
          <Note {...note} dispatchUserData={DispatchUserAuth} key={index} />
        );
      })}
    </div>
  );
};
