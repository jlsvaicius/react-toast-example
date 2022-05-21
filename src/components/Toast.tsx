import { useEffect } from "react";
import useToast from "../hooks/useToast";
import { IToast } from "../types";

interface Props extends IToast {}

const Toast = ({ id, value, type }: Props) => {
  const { remove } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => remove(id), 3000);

    return () => clearTimeout(timer);
  }, [id, remove]);

  return (
    <div className={`toast toast--${type}`}>
      <span>{value}</span>
      <button onClick={() => remove(id)}>remove</button>
    </div>
  );
};

export default Toast;
