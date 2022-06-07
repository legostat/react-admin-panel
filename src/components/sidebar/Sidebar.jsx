import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <span className="sidebar__logo">admin panel</span>
      </div>
      <div className="sidebar__center">
        <ul className="sidebar__nav">
          <h3 className="sidebar__nav-title">main</h3>
          <li className="sidebar__nav-item">
            <DashboardIcon className="icon" />
            <span className="title">Dashboard</span>
          </li>
          <h3 className="sidebar__nav-title">lists</h3>
          <li className="sidebar__nav-item">
            <PersonIcon className="icon" />
            <span className="title">Users</span>
          </li>
          <li className="sidebar__nav-item">
            <StoreIcon className="icon" />
            <span className="title">Products</span>
          </li>
          <li className="sidebar__nav-item">
            <CreditCardIcon className="icon" />
            <span className="title">Orders</span>
          </li>
          <li className="sidebar__nav-item">
            <LocalShippingIcon className="icon" />
            <span className="title">Delivery</span>
          </li>
          <h3 className="sidebar__nav-title">useful</h3>
          <li className="sidebar__nav-item">
            <InsertChartIcon className="icon" />
            <span className="title">Stats</span>
          </li>
          <li className="sidebar__nav-item">
            <NotificationsNoneIcon className="icon" />
            <span className="title">Notifications</span>
          </li>
          <h3 className="sidebar__nav-title">service</h3>
          <li className="sidebar__nav-item">
            <MonitorHeartIcon className="icon" />
            <span className="title">System Health</span>
          </li>
          <li className="sidebar__nav-item">
            <StickyNote2Icon className="icon" />
            <span className="title">Logs</span>
          </li>
          <li className="sidebar__nav-item">
            <SettingsIcon className="icon" />
            <span className="title">Settings</span>
          </li>
          <h3 className="sidebar__nav-title">user</h3>
          <li className="sidebar__nav-item">
            <AccountBoxIcon className="icon" />
            <span className="title">Profile</span>
          </li>
          <li className="sidebar__nav-item">
            <LogoutIcon className="icon" />
            <span className="title">Logout</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__bottom">
        <button className="color-option"></button>
        <button className="color-option"></button>
      </div>
    </div>
  );
};

export default Sidebar;
