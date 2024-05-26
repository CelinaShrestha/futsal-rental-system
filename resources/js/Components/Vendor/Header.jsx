import React, { Children, useState } from "react";
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
            <div className="height ">
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
                                        Welcome Back! {user.user.firstName}
                                    </div>
                                </MenuItem>
                            )}
                            <hr />
                        </Menu>

                        <Menu>
                            <MenuItem
                                icon={<RiHome4Line />}
                                href={route("vendor.dashboard")}
                                active={route().current("vendor.dashboard")}
                            >
                                Dashboard
                            </MenuItem>

                            <SubMenu
                                defaultOpen
                                label={"Courts"}
                                icon={<RiFootballLine />}
                            >
                                <MenuItem
                                    icon={<RiListUnordered />}
                                    href={route("vendor.futsal-listings")}
                                    active={route().current(
                                        "vendor.futsal-listings"
                                    )}
                                >
                                    Courts
                                </MenuItem>
                                <MenuItem
                                    icon={<GoUnverified />}
                                    href={route("futsal-listings.create")}
                                    active={route().current(
                                        "futsal-listings.create"
                                    )}
                                >
                                    Add Court
                                </MenuItem>
                            </SubMenu>
                            {/* <SubMenu
                            defaultOpen
                            label={"Vendors"}
                            icon={<RiTeamLine />}
                        >
                            <MenuItem icon={<RiUserFollowLine />}>
                                Add Vendor
                            </MenuItem>
                            <MenuItem
                                icon={<RiListUnordered />}
                                href={route("vendors.show")}
                                active={route().current("vendors.show")}
                            >
                                Vendor List
                            </MenuItem>
                        </SubMenu> */}
                            <SubMenu
                                defaultOpen
                                label={"Customers"}
                                icon={<RiAccountCircleLine />}
                            >
                                <MenuItem
                                    icon={<RiListUnordered />}
                                    href={route("vendor.customer-bookings")}
                                    active={route().current(
                                        "vendor.customer-bookings"
                                    )}
                                >
                                    Customer Bookings
                                </MenuItem>
                                <MenuItem
                                    icon={<RiListUnordered />}
                                    href={route("vendor.refund")}
                                    active={route().current("vendor.refund")}
                                >
                                    Refund Request
                                </MenuItem>
                            </SubMenu>
                            <SubMenu
                                defaultOpen
                                label={"Settings"}
                                icon={<RiSettings3Line />}
                            >
                                <MenuItem icon={<RiProfileLine />}>
                                    <Link href={route("vendor.profile.edit")}>
                                        Profile
                                    </Link>
                                </MenuItem>
                                <MenuItem icon={<RiLogoutBoxLine />}>
                                    <Link
                                        href={route("vendor.logout")}
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
        </div>
    );
}

export default Header;
