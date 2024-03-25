import Swal from "sweetalert2";

export function showApiError({ title, text }) {
  Swal.fire({
    title: title || "Error!",
    text: text || "Something went wrong.",
    icon: "error",
    confirmButtonText: "Cool",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });
}
