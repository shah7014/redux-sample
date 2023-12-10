export const TOGGLE_MOBILE_DRAWER = "TOGGLE_MOBILE_DRAWER";

export const toggleMobileDrawer = (open) => {
  return {
    type: TOGGLE_MOBILE_DRAWER,
    payload: open,
  };
};
