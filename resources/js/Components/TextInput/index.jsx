import { forwardRef, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Icon from "@/Components/Icon";

export default forwardRef(function TextInput(
    {
        type = "text",
        className,
        isFocused = false,
        name,
        label,
        icon,
        iconClickHandler,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    const [showPassword, setShowPassword] = useState(false);
    const toggleIcon = showPassword ? "eye-slash" : "eye";

    const togglePasswordVisiblity = () => {
        setShowPassword((prev) => !prev);
    };

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const inputFieldClasses = classNames({
        // invalid: hasError,
        "with-icon": icon,
    });

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>

            <div className="form-control">
                <input
                    {...props}
                    type={
                        type === "password"
                            ? showPassword
                                ? "text"
                                : "password"
                            : type
                    }
                    className={inputFieldClasses}
                    ref={input}
                />
                {type === "password" && (
                    <span
                        className="icon-container"
                        onClick={togglePasswordVisiblity}
                    >
                        <button className="icon-btn" type="button">
                            <Icon icon={toggleIcon} size={20} />
                        </button>
                    </span>
                )}
                {icon && type !== "password" && (
                    <span className="icon-container" onClick={iconClickHandler}>
                        <button className="icon-btn" type="button">
                            <Icon icon={icon} size={20} />
                        </button>
                    </span>
                )}
            </div>
        </div>
    );

    /* // <input
        //     {...props}
        //     type={type}
        //     className={
        //         'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        //         className
        //     }
        //     ref={input}
        // /> */
});
