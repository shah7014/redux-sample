import Swal from "sweetalert2";

export const startLoading = () => {
  Swal.fire({
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });
};

export const hideLoading = () => {
  Swal.hideLoading();
};
