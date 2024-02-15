// src/components/Alert.jsx

import "./Alert.css";
import clsx from "clsx";

const className = clsx(
  "first",
  10,
  undefined && "second",
  true && "third",
  false ? "fourth" : "fifth"
);
console.log(className); // "first 10 third fifth"

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        "alert",
        variant,
        outlined && "is-outlined",
        elevated && "is-elevated"
      )}
    >
      {children}
    </p>
  );
};
