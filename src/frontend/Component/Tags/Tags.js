import styles from "./Tags.module.css";
export const Tags = ({ isSet, setNote }) => {
  const clickHandler = (e) => {
    setNote((prev) => ({ ...prev, label: e.target.value }));
    isSet();
  };

  return (
    <div className="modal playlistmodel">
      <div className={`modal-content ${styles.modal_s} `}>
        <div className="modal-header text-center">
          <h3 className="modal-header-title">Choose Tags</h3>
          <span className="modal-close" onClick={isSet}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <ul className="list">
            <li className="list-item-stacked">
              <input
                name="label"
                type="radio"
                value="Home"
                onClick={clickHandler}
              />
              Home
            </li>
            <li className="list-item-stacked">
              <input
                name="label"
                type="radio"
                value="Work"
                onClick={clickHandler}
              />
              Work
            </li>
            <li className="list-item-stacked">
              <input
                name="label"
                type="radio"
                value="Exercise"
                onClick={clickHandler}
              />
              Exercise
            </li>

            <li className="list-item-stacked">
              <input
                name="label"
                type="radio"
                value="Other"
                onClick={clickHandler}
              />
              Other
            </li>
          </ul>
        </div>
        <div className="modal-footer text-center"></div>
      </div>
    </div>
  );
};
