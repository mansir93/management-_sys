import { RiCustomerService2Line } from "react-icons/ri";
import { BsFillBagFill } from "react-icons/bs";
import { CgList } from "react-icons/cg";
import { BiTransferAlt } from "react-icons/bi";
import { FaHouseUser } from "react-icons/fa";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaChartPie, FaBars } from "react-icons/fa";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SidebarNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isMenuActive = (menuPath) => {
    return location.pathname === menuPath;
  };
  const style = {
    backgroundColor: "white",
    color: "blue",
  };

  return (
    <div>
      <Sidebar collapsed={collapsed}>
        <Menu iconShape="square">
          <div className="flex flex-col gap-4 text-white bg-blue-900 h-screen">
            <MenuItem
              className="hover:text-blue-500"
              icon={<FaBars />}
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            ></MenuItem>
            <MenuItem
              className="hover:text-blue-500"
              icon={<FaChartPie size={30} />}
              component={<NavLink to="/" />}
              style={isMenuActive("/") ? style : null}
            >
              Dashboard
            </MenuItem>
            <SubMenu
              className="hover:text-blue-500"
              label={"Front Desk"}
              icon={"i"}
            >
              <div className="bg-blue-300">
                <MenuItem
                  className="hover:text-blue-500"
                  icon={<FaChartPie size={30} />}
                  component={<NavLink to="/Reservations" />}
                  style={isMenuActive("/Reservations") ? style : null}
                >
                  Reservation
                </MenuItem>
                <MenuItem
                  className="hover:text-blue-500"
                  icon={<FaChartPie size={30} />}
                  component={<NavLink to="/Checks" />}
                  style={isMenuActive("/Checks") ? style : null}
                >
                  Check-in/Check-out
                </MenuItem>
                <MenuItem
                  className="hover:text-blue-500"
                  icon={<FaChartPie size={30} />}
                  component={<NavLink to="/Guest" />}
                  style={isMenuActive("/Guest") ? style : null}
                >
                  Guest Profiles{" "}
                </MenuItem>
                <MenuItem
                  className="hover:text-blue-500"
                  icon={<FaChartPie size={30} />}
                  component={<NavLink to="/Room" />}
                  style={isMenuActive("/Room") ? style : null}
                >
                  Room and Facilities
                </MenuItem>
              </div>
            </SubMenu>
            {/*  */}
            <SubMenu className="hover:text-blue-500" label={"POS"} icon={"i"}>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Tableside Ordering
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Menu Management
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Kitchen Integration
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Billing and Payment
              </MenuItem>
            </SubMenu>
            {/*  */}
            <SubMenu
              className="hover:text-blue-500"
              label={"Inventory"}
              icon={"i"}
            >
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Stock
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Supplier
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Purchase Orders
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Recipe and Costing
              </MenuItem>
            </SubMenu>
            {/*  */}
            <SubMenu
              className="hover:text-blue-500"
              label={"HR and Payroll"}
              icon={"i"}
            >
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Employee Records
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Shift Scheduling and Attendance
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Leave Management
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Payroll Processing
              </MenuItem>
            </SubMenu>
            {/*  */}
            <SubMenu
              className="hover:text-blue-500"
              label={"Financial"}
              icon={"i"}
            >
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                General Ledger{" "}
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Accounts Payable and Receivable
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Budgeting and Forecasting
              </MenuItem>
              <MenuItem
                className="hover:text-blue-500"
                icon={<FaChartPie size={30} />}
                component={<NavLink to="/" />}
                style={isMenuActive("/") ? style : null}
              >
                Financial Reporting
              </MenuItem>
            </SubMenu>
          </div>
        </Menu>
      </Sidebar>

      {/* Sidebar */}
    </div>
  );
};

export default SidebarNav;
