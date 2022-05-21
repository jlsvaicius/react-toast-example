import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";

const useToast = () => {
  const { addToast, removeToast } = useContext(ToastContext);

  const success = (value: string) => {
    addToast(value, "success");
  };

  const error = (value: string) => {
    addToast(value, "error");
  };

  return { success, error, remove: removeToast };
};

export default useToast;
