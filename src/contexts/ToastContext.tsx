import { createContext, useCallback, useState } from "react";
import ToastContainer from "../components/ToastContainer";
import type { IToastContext, IToast, ToastType } from "../types";

const defaultValue = {
  addToast: () => {},
  removeToast: () => {},
};

export const ToastContext = createContext<IToastContext>(defaultValue);

interface Props {
  children: React.ReactNode;
}

let id = 0;

const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  const addToast = useCallback(
    (value: string, type: ToastType) => {
      setToasts((toasts) => [...toasts, { id: id++, value, type }]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
