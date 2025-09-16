import Swal from "sweetalert2";

export const ErrorPopup = (text: string) => Swal.fire({
    title: "Error",
    text: text || "An unexpected error occurred.",
    icon: "error",
});

export const SuccessPopup = (text: string) => Swal.fire({
    title: "Success",
    text,
    icon: "success",
});

export const WarningPopup = (text: string) => Swal.fire({
    title: "Warning",
    text,
    icon: "warning",
});