import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "../actions/notesActions";

const notesInitialState = {
  notes: [],
};

const notesReducer = (state = notesInitialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case DELETE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((n) => n.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

export default notesReducer;
