import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import classNames from "classnames";
import React from "react";
import AuthHeading from "@/Components/AuthHeading";

export default function Guest({ pageTitle, children, size }) {
    const authBodyClass = classNames({
        "auth-body-sm": size === "sm",
        "auth-body-lg": size === "lg",
    });

    return (
        // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        //     <div>
        //         <Link href="/">
        //             <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
        //         </Link>
        //     </div>

        //     <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        //         {children}
        //     </div>
        // </div>
        <div className="auth-page">
            <div className="auth-page-content">
                <div className="auth-form-section">
                    <AuthHeading title={pageTitle} />
                    <div className={authBodyClass}>{children}</div>
                </div>
            </div>
        </div>
    );
}
