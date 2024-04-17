import { useState } from "react";
import logo from "../../assets/logos/kick.png";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Header from "@/Components/Admin/Header";

export default function AdminLayout({ user, children }) {
    return (
        <div className="grid grid-cols-[20%_80%]">
            <div className="z-10">
                <Header user={user} />
            </div>

            <main>
                <div className="ml-4 ">{children}</div>
            </main>
        </div>
    );
}
