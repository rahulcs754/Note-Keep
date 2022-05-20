import styles from "./Trashnote.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TrashNote } from "frontend/Component";
import { useAuthData } from "frontend/Context";
export const Trashnote = () => {
  const navigate = useNavigate();
  const {
    userAuth: { trash },
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
      <div className="f-m ml-l mt-s">Trash Not List</div>
      <div className={`${styles.note_slider} scrollbar `} id="style-3">
        {trash.length !== 0 &&
          trash.map((note, index) => {
            return (
              <TrashNote
                {...note}
                dispatchUserData={DispatchUserAuth}
                key={index}
              />
            );
          })}
      </div>
      {trash.length === 0 && (
        <div className="text-center">
          <h2>You have not any note </h2>
        </div>
      )}
    </>
  );
};
