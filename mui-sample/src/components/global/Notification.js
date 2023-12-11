import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setError, setSuccess } from "../../redux/app/appActions";

const Notification = () => {
  const { error, success, isLoading } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const handleSuccessClose = () => {
    dispatch(setSuccess(false));
  };
  const handleErrorClose = () => {
    dispatch(setError(false));
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" size={"200px"} />
      </Backdrop>

      {/* success toast */}
      <Snackbar
        open={success.open}
        autoHideDuration={3000}
        onClose={handleSuccessClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {success.message}
        </Alert>
      </Snackbar>

      {/* error toast */}
      <Snackbar
        open={error.open}
        autoHideDuration={3000}
        onClose={handleErrorClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success">{error.message}</Alert>
      </Snackbar>
    </>
  );
};

export default Notification;
