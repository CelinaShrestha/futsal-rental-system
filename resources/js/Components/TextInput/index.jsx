import { forwardRef, useEffect, useRef } from "react";
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
                    type={type}
                    className={inputFieldClasses}
                    ref={input}
                />
                {icon && (
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
