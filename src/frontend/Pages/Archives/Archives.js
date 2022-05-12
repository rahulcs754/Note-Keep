import styles from "./Archives.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArchiveNote } from "frontend/Component";
import { useAuthData } from "frontend/Context";
export const Archives = () => {
  const navigate = useNavigate();

  const {
    userAuth: { archives },
    DispatchUserAuth,
  } = useAuthData();

  // Check user is login or not
  useEffect(() => {
    if (!localStorage.getItem("rsnote_encodedToken")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="f-m ml-l mt-s">Archives List</div>
      <div className={`${styles.note_slider} scrollbar `} id="style-3">
        {archives.length !== 0 &&
          archives.map((note, index) => {
            return (
              <ArchiveNote
                {...note}
                dispatchUserData={DispatchUserAuth}
                key={index}
              />
            );
          })}
      </div>
      {archives.length === 0 && (
        <div className="text-center">
          <h2>You have not archived the note yet</h2>
        </div>
      )}
    </>
  );
};
