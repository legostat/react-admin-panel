import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ListIcon from "@mui/icons-material/List";

import avatar from "../../assets/avatar.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__search">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="navbar__item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="navbar__item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="navbar__item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="navbar__item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="navbar__item">
            <ListIcon className="icon" />
          </div>
          <div className="navbar__item">
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
