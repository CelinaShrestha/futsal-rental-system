import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    RiHome4Line,
    RiTeamLine,
    RiCalendar2Line,
    RiFolder2Line,
    RiUserFollowLine,
    RiPlantLine,
    RiStackLine,
    RiUserUnfollowLine,
    RiFootballLine,
    RiListUnordered,
    RiSettings3Line,
    RiProfileLine,
    RiLogoutBoxLine,
    RiAccountCircleLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { GoUnverified } from "react-icons/go";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";

function Header({ user }) {
    console.log("user:", user.user.name);
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = () => {
        setToggled(!toggled);
    };

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div>
            <Sidebar
                className={`app ${toggled ? "toggled" : ""} sidebar`}
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                rootStyles={{
                    position: "fixed",
                    height: "100vh",
                    width: "300px",
                }}
            >
                <main>
                    <Menu>
                        {collapsed ? (
                            <MenuItem
                                icon={<FiChevronsRight />}
                                onClick={handleCollapsedChange}
                            ></MenuItem>
                        ) : (
                            <MenuItem
                                suffix={<FiChevronsLeft />}
                                onClick={handleCollapsedChange}
                            >
                                <div
                                    style={{
                                        padding: "9px",
                                        // textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontSize: 14,
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Welcome Back! {user.user.name}
                                </div>
                            </MenuItem>
                        )}
                        <hr />
                    </Menu>

                    <Menu>
                        <MenuItem
                            icon={<RiHome4Line />}
                            href={route("admin.dashboard")}
                            active={route().current("admin.dashboard")}
                        >
                            Dashboard
                        </MenuItem>
                        <SubMenu
                            defaultOpen
                            label={"Vendors"}
                            icon={<RiTeamLine />}
                        >
                            <MenuItem
                                icon={<RiUserFollowLine />}
                                href={route("admin.vendor.register")}
                                active={route().current(
                                    "admin.vendor.register"
                                )}
                            >
                                Add Vendor
                            </MenuItem>

                            <MenuItem
                                icon={<RiListUnordered />}
                                href={route("vendors.show")}
                                active={route().current("vendors.show")}
                            >
                                Vendor List
                            </MenuItem>
                        </SubMenu>
                        <SubMenu
                            defaultOpen
                            label={"Courts"}
                            icon={<RiFootballLine />}
                        >
                            <MenuItem
                                icon={<RiListUnordered />}
                                href={route("admin.courts.show")}
                                active={route().current("admin.courts.show")}
                            >
                                Courts
                            </MenuItem>
                            <MenuItem icon={<RiListUnordered />}>
                                Booked List
                            </MenuItem>
                            <MenuItem
                                icon={<GoUnverified />}
                                href={route("admin.courts.unverified")}
                                active={route().current(
                                    "admin.courts.unverified"
                                )}
                            >
                                Unverified
                            </MenuItem>
                        </SubMenu>
                        <SubMenu
                            defaultOpen
                            label={"Customers"}
                            icon={<RiAccountCircleLine />}
                        >
                            <MenuItem
                                icon={<RiListUnordered />}
                                href={route("customers.show")}
                                active={route().current("customers.show")}
                            >
                                Customer List
                            </MenuItem>
                        </SubMenu>
                        <SubMenu
                            defaultOpen
                            label={"Settings"}
                            icon={<RiSettings3Line />}
                        >
                            <MenuItem
                                icon={<RiProfileLine />}
                                href={route("vendor.profile.edit")}
                                active={route().current("vendor.profile.edit")}
                            >
                                Profile
                            </MenuItem>
                            <MenuItem icon={<RiLogoutBoxLine />}>
                                <Link
                                    href={route("admin.logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Link>
                            </MenuItem>
                        </SubMenu>
                    </Menu>
                </main>
            </Sidebar>
        </div>
    );
}

export default Header;
