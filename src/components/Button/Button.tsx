import { ReactNode } from "react";
import style from "./Button.module.css";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className={style["button"]}>
      <p className="text-system-white bold-2">{children}</p>
    </button>
  );
}
