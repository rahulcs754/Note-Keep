import styles from "./Box.module.css";
import { Input } from "../Inputarea/Input";
export const Box = () => {
  return (
    <div className={` flex flex-row margin-auto ${styles.box_section} `}>
      <Input />
    </div>
  );
};
