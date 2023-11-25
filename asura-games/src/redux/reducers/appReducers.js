import { SET_MOBILE_MENU_OPEN } from "../actions/appActions";

const initialState = {
  isMobileMenuOpen: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_MENU_OPEN: {
      return {
        ...state,
        isMobileMenuOpen: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
