export interface IToastContext {
  addToast: (value: string, type: ToastType) => void;
  removeToast: (id: number) => void;
}

export interface IToast {
  id: number;
  value: string;
  type: ToastType;
}

export type ToastType = "success" | "error";
