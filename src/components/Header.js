import Logo from "../Images/Header/header-logo.png";
import Search from "../Images/Header/search.png";
import Notification from "../Images/Header/notification.png";
import User from "../Images/Header/user.png";
import Daymode from "../Images/Header/day-mode.png";
import Chat from "../Images/Header/chat.png";
import Setting from "../Images/Header/Component.png";
import "../css/header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="header-section">
          <div className="nav-container">
            <div className="logo-conatainer">
              <img src={Logo} alt="logo" width={231} height={61} />
            </div>
            <div className="search-bar-section">
              <input placeholder="Search" />
              <img src={Search} alt="Search" width={25} height={25} />
            </div>
          </div>
          <div className="nav-icon-section">
            <img src={Daymode} alt="Daymode" width={25} height={25} />
            <img src={Chat} alt="Chat" width={25} height={25} />
            <img src={Notification} alt="Notification" width={25} height={25} />
            <img src={Setting} alt="Setting" width={25} height={25} />
            <img src={User} alt="User" width={25} height={25} />
          </div>
        </div>
      </header>
    </>
  );
}
