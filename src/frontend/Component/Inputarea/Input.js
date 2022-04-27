import styles from "./Input.module.css";
import { VscSymbolColor } from "react-icons/vsc";
import { VscTag } from "react-icons/vsc";
import { VscSave } from "react-icons/vsc";
import { VscDiffRemoved } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineTag } from "react-icons/md";
import { BsExclamationLg } from "react-icons/bs";
import { useState } from "react";
import { Priority } from "../Priority/Priority";
import { Tags } from "../Tags/Tags";
import { Colors } from "../Colors/Colors";

export const Input = () => {
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

  return (
    <div className={styles.note_input_box}>
      <div className={styles.input_header}>
        <input type="text" placeholder="Enter Title" />
      </div>
      <div className={styles.input_body}>
        <textarea placeholder="Enter Note"></textarea>
      </div>
      <div className={` ${styles.input_footer} flex flex-row space_between`}>
        <div className={`flex flex-row input_cursor ${styles.left_footer}`}>
          <MdOutlineTag size={22} onClick={setTagHandler} className="pointer" />
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
          <VscSave size={22} className="pointer" />
          <VscChromeClose size={22} className="pointer" />
        </div>
      </div>

      {popup.tags ? <Tags isSet={setTagHandler} /> : null}
      {popup.priority ? <Priority isSet={setPriorityHandler} /> : null}
      {popup.colors ? <Colors isSet={setColorHandler} /> : null}
    </div>
  );
};
