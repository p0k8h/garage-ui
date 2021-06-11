import { toast } from 'react-toastify';

export function SuccessToaster(m) {
  toast.success(m, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

export function ErrorToaster(m) {
  toast.error(m || "Error", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}
