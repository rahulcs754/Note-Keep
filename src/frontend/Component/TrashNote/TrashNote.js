import styles from "./TrashNote.module.css";
import { VscTrash } from "react-icons/vsc";
import { MdMoreHoriz } from "react-icons/md";
import { useAuthData } from "frontend/Context";
import { toast } from "react-toastify";
export const TrashNote = ({
  _id,
  title,
  description,
  label,
  timestamp,
  isEdited,
  color,
  priority,
  dispatchUserData,
}) => {
  const { setNote } = useAuthData();

  const currNote = {
    _id,
    title,
    description,
    label,
    timestamp,
    color,
    isEdited,
    priority,
  };

  const deleteHandler = () => {
    dispatchUserData({ type: "REMOVE_FROM_TRASH", payload: _id });
    toast.success("Deleted Note Successfully");
  };

  return (
    <div
      className={`card ${styles.card_reset}`}
      key={_id}
      style={{ backgroundColor: color }}
    >
      <div className="card-header flex flex-row align-item">
        <div className={`${styles.card_title} text_ellipsis`}>{title}</div>
        <span className={`${styles.remove_icon} pointer`}>
          <MdMoreHoriz className={styles.menu_icons} />
          <div className={`flex flex-row ${styles.monu_show}`}>
            <VscTrash onClick={deleteHandler} size={28} />
          </div>
        </span>
      </div>
      <div
        className={` ${styles.card_info}`}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      ></div>
      <div className={`${styles.card_footer_reset} card-footer`}>
        <div className={`${styles.tag_show}`}>{label}</div>
        <div>Date : {timestamp}</div>
      </div>
    </div>
  );
};
