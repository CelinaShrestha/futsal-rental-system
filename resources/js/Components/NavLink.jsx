import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 text-base font-medium leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? " text-primary-color"
                    : " text-text-light-2 hover:text-primary-color focus:text-primary-color focus:primary-color ") +
                className
            }
        >
            {children}
        </Link>
    );
}
