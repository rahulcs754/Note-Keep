import styles from "./Tags.module.css";
export const Tags = ({ isSet }) => {
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
              <input name="checkbox" type="checkbox" />
              Home
            </li>
            <li className="list-item-stacked">
              <input name="checkbox" type="checkbox" />
              Work
            </li>
            <li className="list-item-stacked">
              <input name="checkbox" type="checkbox" />
              Other
            </li>
          </ul>
        </div>
        <div className="modal-footer text-center"></div>
      </div>
    </div>
  );
};
