export const SET_MOBILE_MENU_OPEN = "SET_MOBILE_MENU_OPEN";

export const setMobileMenuOpen = (isOpen) => {
  return {
    type: SET_MOBILE_MENU_OPEN,
    payload: isOpen,
  };
};
