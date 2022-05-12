import { toast } from "react-toastify";
import axios from "axios";

export const addNotes = async (note, DispatchUserAuth) => {
  try {
    const {
      data: { notes },
      status,
    } = await axios.post(
      "/api/notes",
      { note },
      {
        headers: {
          authorization: localStorage.getItem("rsnote_encodedToken"),
        },
      }
    );
    if (status === 200 || status === 201) {
      DispatchUserAuth({ type: "SET_NOTES", payload: notes });
      toast.success("Note saved successfully");
    }
  } catch (error) {
    toast.warning("Oops something went wrong");
  }
};

export const removeNotes = async (note, DispatchUserAuth) => {
  try {
    const {
      data: { notes },
      status,
    } = await axios.delete(`/api/notes/${note._id}`, {
      headers: {
        authorization: localStorage.getItem("rsnote_encodedToken"),
      },
    });
    if (status === 200 || status === 201) {
      DispatchUserAuth({ type: "SET_NOTES", payload: notes });
      DispatchUserAuth({ type: "UPDATE_TRASH", payload: note });
      toast.success("Note Moved Into Trash");
    }
  } catch (error) {
    toast.warning("Oops something went wrong");
  }
};

export const updateNote = async (note, DispatchUserAuth) => {
  try {
    const {
      status,
      data: { notes },
    } = await axios.post(
      `/api/notes/${note._id}`,
      { note },
      {
        headers: { authorization: localStorage.getItem("rsnote_encodedToken") },
      }
    );

    if (status === 201) {
      toast.success("Note Updated Successfully");
      DispatchUserAuth({ type: "SET_NOTES", payload: notes });
    }
  } catch (error) {
    toast.warning("Couldn't Update Note");
  }
};

export const addArchives = async (note, DispatchUserAuth) => {
  try {
    const {
      data: { archives, notes },
      status,
    } = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note },
      {
        headers: { authorization: localStorage.getItem("rsnote_encodedToken") },
      }
    );
    if (status === 201) {
      DispatchUserAuth({ type: "SET_ARCHIVES", payload: archives });
      DispatchUserAuth({ type: "SET_NOTES", payload: notes });
      toast.success("Note Archived Successfully");
    }
  } catch (error) {
    toast.warning("Oops something went wrong");
  }
};

export const restoreArchivedNote = async (note, DispatchUserAuth) => {
  try {
    const {
      data: { archives, notes },
      status,
    } = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: { authorization: localStorage.getItem("rsnote_encodedToken") },
      }
    );
    if (status === 200) {
      DispatchUserAuth({ type: "SET_ARCHIVES", payload: archives });
      DispatchUserAuth({ type: "SET_NOTES", payload: notes });
      toast.success("Re-archive Note Successfully");
    }
  } catch (error) {
    toast.warning("Oops something went wrong");
  }
};

export const deleteArchivedNote = async (note, DispatchUserAuth) => {
  try {
    const {
      data: { archives },
      status,
    } = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: { authorization: localStorage.getItem("rsnote_encodedToken") },
    });
    if (status === 200) {
      DispatchUserAuth({ type: "UPDATE_TRASH", payload: note });
      DispatchUserAuth({ type: "SET_ARCHIVES", payload: archives });

      toast.success("Note Deleted from Archive");
    }
  } catch (error) {
    toast.warning("Oops something went wrong");
  }
};
