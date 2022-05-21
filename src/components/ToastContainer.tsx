import { IToast } from "../types";
import Toast from "./Toast";

interface Props {
  toasts: IToast[];
}

const ToastContainer = ({ toasts }: Props) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((props) => (
        <Toast key={props.id} {...props} />
      ))}
    </div>
  );
};

export default ToastContainer;
