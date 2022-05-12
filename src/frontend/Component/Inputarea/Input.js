import styles from "./Input.module.css";
import { VscSymbolColor, VscChromeClose, VscSave } from "react-icons/vsc";

import { MdOutlineTag } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { useState } from "react";
import { Priority } from "../Priority/Priority";
import { Tags } from "../Tags/Tags";
import { Colors } from "../Colors/Colors";

import { Editor } from "../Editor/Editor";
import { useAuthData } from "../../Context/AuthContext";
import { addNotes, updateNote } from "frontend/Services";

export const Input = () => {
  const {
    userAuth: { notes },
    DispatchUserAuth,
    note,
    setNote,
    intialNotes,
  } = useAuthData();

  const [popup, Setpopup] = useState({
    tags: false,
    priority: false,
    colors: false,
  });

  const setTagHandler = () => {
    Setpopup((prev) => ({ ...prev, tags: !prev.tags }));
  };

  const setPriorityHandler = () => {
    Setpopup((prev) => ({ ...prev, priority: !prev.priority }));
  };

  const setColorHandler = () => {
    Setpopup((prev) => ({ ...prev, colors: !prev.colors }));
  };

  function saveHandler(e) {
    e.preventDefault();

    const find = notes.some((item) => item._id === note._id);
    if (find) {
      console.log("update karo eskp");
      updateNote(note, DispatchUserAuth);
      setNote(intialNotes);
    } else {
      addNotes(note, DispatchUserAuth);
      setNote(intialNotes);
    }
  }
  const { title, description, isEdited } = note;

  return (
    <div className={styles.note_input_box}>
      <form onSubmit={saveHandler}>
        <div className={styles.input_header}>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) =>
              setNote((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </div>
        <div className={styles.input_body}>
          <Editor
            value={description}
            setValue={(e) => setNote((prev) => ({ ...prev, description: e }))}
          />
        </div>
        <div className={` ${styles.input_footer} flex flex-row space_between`}>
          <div className={`flex flex-row input_cursor ${styles.left_footer}`}>
            <MdOutlineTag
              size={22}
              onClick={setTagHandler}
              className="pointer"
            />
            <VscSymbolColor
              size={22}
              onClick={setColorHandler}
              className="pointer"
            />

            <BsExclamationLg
              size={19}
              onClick={setPriorityHandler}
              className="pointer"
            />
          </div>
          <div className={`flex flex-row ${styles.right_footer}`}>
            <button type="submit">
              <VscSave size={22} className="pointer" />
            </button>
            {title.length > 0 ? (
              <VscChromeClose
                size={22}
                className="pointer"
                onClick={(prev) => setNote(intialNotes)}
              />
            ) : null}
          </div>
        </div>
      </form>

      {popup.tags ? (
        <Tags isSet={setTagHandler} currentNote={note} setNote={setNote} />
      ) : null}
      {popup.priority ? (
        <Priority
          currentNote={note}
          isSet={setPriorityHandler}
          setNote={setNote}
        />
      ) : null}
      {popup.colors ? (
        <Colors currentNote={note} isSet={setColorHandler} setNote={setNote} />
      ) : null}
    </div>
  );
};
