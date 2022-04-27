export const Priority = ({ isSet }) => {
  return (
    <div className="modal playlistmodel">
      <div className="modal-content modal-s">
        <div className="modal-header text-center">
          <h3 className="modal-header-title">Choose Priority</h3>
          <span className="modal-close" onClick={isSet}>
            ×
          </span>
        </div>
        <div className="modal-body">
          <ul className="list">
            <li className="list-item-stacked">
              <input name="checkbox" type="radio" />
              High
            </li>
            <li className="list-item-stacked">
              <input name="checkbox" type="radio" />
              Medium
            </li>
            <li className="list-item-stacked">
              <input name="checkbox" type="radio" />
              Low
            </li>
          </ul>
        </div>
        <div className="modal-footer text-center"></div>
      </div>
    </div>
  );
};
