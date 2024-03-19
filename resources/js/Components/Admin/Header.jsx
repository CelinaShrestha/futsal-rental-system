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

function Header() {
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
                                    YOUR LOGO!..
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
                        </SubMenu>
                        <SubMenu
                            defaultOpen
                            label={"Courts"}
                            icon={<RiFootballLine />}
                        >
                            <MenuItem
                                icon={<RiListUnordered />}
                                // href={route("futsal-listings.show")}
                                // active={route().current("futsal-listings.show")}
                            >
                                Courts
                            </MenuItem>
                            <MenuItem icon={<RiListUnordered />}>
                                Booked List
                            </MenuItem>
                            <MenuItem icon={<GoUnverified />}>
                                Unverified
                            </MenuItem>
                        </SubMenu>
                        <SubMenu
                            defaultOpen
                            label={"Customers"}
                            icon={<RiAccountCircleLine />}
                        >
                            <MenuItem icon={<RiListUnordered />}>
                                Customer List
                            </MenuItem>
                        </SubMenu>
                        <SubMenu
                            defaultOpen
                            label={"Settings"}
                            icon={<RiSettings3Line />}
                        >
                            <MenuItem icon={<RiProfileLine />}>
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
