import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setShowFailure, setShowSuccess } from "../redux/app/appActions";

const Notifications = () => {
  const { success, failure } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: false,
    });

    if (success.show) {
      Toast.fire({
        icon: "success",
        title: success.message,
        didClose: () => {
          dispatch(setShowSuccess(false));
        },
      });
    }
    if (failure.show) {
      Toast.fire({
        icon: "error",
        title: failure.message,
        didClose: () => {
          dispatch(setShowFailure(false));
        },
      });
    }
  }, [success, failure]);

  return <></>;
};

export default Notifications;
