import styles from "./Filter.module.css";
import { VscFilter } from "react-icons/vsc";
import { useState } from "react";
import { useFilter } from "frontend/Context";
export const Filter = () => {
  const [showFilterlist, setShowFilterList] = useState(false);
  const { filterState, filterDispatch } = useFilter();
  const showHandler = () => {
    setShowFilterList((prev) => !prev);
  };

  const labelHandler = (e) => {
    filterDispatch({ type: "SET_LABEL", payload: e.target.value });
  };

  const dateHandler = (e) => {
    filterDispatch({ type: "SORT_BY_DATE", payload: e.target.value });
  };

  const priorityHandler = (e) => {
    filterDispatch({ type: "SET_PRIORITY", payload: e.target.value });
  };

  const { sortByDate, priorityFilter, labelFilter } = filterState;

  return (
    <>
      <div className={styles.filter_icon_box}>
        <VscFilter className={styles.filter_icon} onClick={showHandler} />
      </div>
      {showFilterlist ? (
        <div className={styles.filter_list}>
          <select
            className={styles.select_option}
            value={labelFilter}
            onChange={labelHandler}
          >
            <option>Select Tag</option>
            <option>Home</option>
            <option>Work</option>
            <option>Exercise</option>
            <option>Other</option>
          </select>
          <select
            className={styles.select_option}
            value={sortByDate}
            onChange={dateHandler}
          >
            <option>Select Date Wise</option>
            <option>Old Date</option>
            <option>New Date</option>
          </select>
          <select
            className={styles.select_option}
            value={priorityFilter}
            onChange={priorityHandler}
          >
            <option>Select Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className={styles.clear_button_box}>
            <button
              className={styles.clear_button}
              onClick={(e) =>
                filterDispatch({
                  type: "CLEAR_ALL",
                  payload: "",
                })
              }
            >
              Clear All Filter
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
