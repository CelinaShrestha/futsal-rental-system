import { useState } from "react";
import logo from "../../assets/logos/kick.png";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Header from "@/Components/Vendor/Header";

export default function VendorLayout({ user, children }) {
    return (
        <div className="flex">
            <div>
                <Header />
            </div>

            <main>
                <div className="ml-9">{children}</div>
            </main>
        </div>
    );
}
