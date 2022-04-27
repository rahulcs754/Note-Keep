import styles from "./Filter.module.css";
import { VscFilter } from "react-icons/vsc";
import { useState } from "react";

export const Filter = () => {
  const [showFilterlist, setShowFilterList] = useState(false);
  const showHandler = () => {
    setShowFilterList((prev) => !prev);
  };
  return (
    <>
      <div className={styles.filter_icon_box}>
        <VscFilter className={styles.filter_icon} onClick={showHandler} />
      </div>
      {showFilterlist ? (
        <div className={styles.filter_list}>
          <select className={styles.select_option}>
            <option>Select Tag</option>
            <option>Home</option>
            <option>Work</option>
            <option>Other</option>
          </select>
          <select className={styles.select_option}>
            <option>Select Date Wise</option>
            <option>Old Date</option>
            <option>New Date</option>
          </select>
          <select className={styles.select_option}>
            <option>Select Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className={styles.clear_button_box}>
            <button className={styles.clear_button}>Clear All Filter</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
