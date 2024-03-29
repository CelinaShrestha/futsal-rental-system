import React from "react";
import classNames from "classnames";

const Pill = ({
  children,
  width = "w-fit",
  variant = "primary",
  ...rest
}) => {
  const pillClasses = classNames("pill", {
    "pill-primary": variant === "primary",
    "pill-secondary": variant === "secondary",
    "pill-success": variant === "success",
    "pill-error": variant === "error",
    "pill-warning": variant === "warning",
    "pill-accent": variant === "accent",
    [width]: width !== "block",
  });
  return (
    <div className={pillClasses} {...rest}>
      {children}
    </div>
  );
};

export default Pill;