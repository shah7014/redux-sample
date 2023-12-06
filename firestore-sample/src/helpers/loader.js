import Swal from "sweetalert2";

export const startLoading = () => {
  Swal.fire({
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
    willClose: () => {
      Swal.hideLoading();
    },
  });
};

export const hideLoading = () => {
  Swal.close();
};
