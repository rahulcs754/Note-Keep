import styles from "./Note.module.css";
export const Note = () => {
  return (
    <div className={`card ${styles.card_reset}`}>
      <div className="card-header">
        <div className="card-title">Title note</div>
      </div>
      <div className="card-info">
        <p>note description</p>
      </div>
      <div className={`${styles.card_footer_reset} card-footer`}>
        <div>Tag</div> <div>Date : 2022-04-26</div>
      </div>
    </div>
  );
};
