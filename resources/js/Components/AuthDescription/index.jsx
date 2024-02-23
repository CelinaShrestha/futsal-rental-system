import classNames from "classnames";

const AuthDescription = ({ children, className }) => {
  const Authclasses = classNames("text-center", " mb-4", `${className || ""}`);
  return <div className={Authclasses}>{children}</div>;
};

export default AuthDescription;
