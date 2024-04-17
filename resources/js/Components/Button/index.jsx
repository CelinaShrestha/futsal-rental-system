import classNames from "classnames";

import Icon from "@/Components/Icon";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  width = "block",
  icon,
  disabled,
  className,

  ...props
}) => {
  const buttonClasses = classNames(
    "btn",
    {
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
      "btn-danger": variant === "danger",
      "btn-link": variant === "link",
      "btn-sm": size === "sm",
      "btn-md": size === "md",
      "btn-lg": size === "lg",
      [width]: width !== "block",
    },
    `${className || ""}`
  );

  let iconSize = 14;
  if (size === "lg") {
    iconSize = 16;
  } else if (size === "sm") {
    iconSize = 12;
  }

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && <Icon icon={icon} size={iconSize} />}
      {children}
    </button>
  );
};

export default Button;
