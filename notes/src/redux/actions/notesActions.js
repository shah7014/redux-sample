export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNoteAction = (newNote) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  };
};

export const deleteNoteAction = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};
