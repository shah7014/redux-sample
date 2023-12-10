import { TOGGLE_MOBILE_DRAWER } from "./appActions";

const initialState = { isMobileDrawerOpen: false };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MOBILE_DRAWER: {
      return {
        ...state,
        isMobileDrawerOpen: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
