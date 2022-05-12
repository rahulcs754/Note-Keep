import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./Editor.module.css";
export const Editor = ({ value, setValue }) => {
  const formats = [
    "bold",
    "italic",
    "strike",
    "list",
    "bullet",
    "indent",
    "link",
  ];

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "code"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
    ],
  };
  return (
    <div className={styles.editor_container}>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Take a note..."
        className={styles.editor_code}
        value={value}
        dangerouslySetInnerHTML={{ __html: value }}
        onChange={setValue}
      />
    </div>
  );
};
