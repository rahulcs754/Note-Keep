import styles from "./Colors.module.css";
import { colorList } from "./colorList";
export const Colors = ({ note, isSet, setNote }) => {
  const clickHandler = (e) => {
    setNote((prev) => ({ ...prev, color: e.target.value }));
    isSet();
  };
  return (
    <div className="modal playlistmodel">
      <div className={` modal-content modal-s ${styles.modal_s}`}>
        <div className="modal-header text-center">
          <h3 className="modal-header-title">Choose Color</h3>
          <span className="modal-close" onClick={isSet}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <ul className={`${styles.colorlist} list`}>
            {colorList.map((colorn, index) => {
              return (
                <li key={index} className="list-item-stacked">
                  <input
                    name="color"
                    value={colorn}
                    type="radio"
                    onClick={clickHandler}
                  />
                  <div
                    className={styles.box_color}
                    style={{ backgroundColor: colorn }}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="modal-footer text-center"></div>
      </div>
    </div>
  );
};
