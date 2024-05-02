import "../css/sidebar.css"
import Dashboard from "../Images/sidebar/dashboard.png";
import Adjusted from "../Images/sidebar/adjusted.png";
import customize from "../Images/sidebar/category.png";
import Filter from "../Images/sidebar/filter.png";
import Partner from "../Images/sidebar/partner.png";
import Help from "../Images/sidebar/help.png";
import Support from "../Images/sidebar/support.png";
import Category from "../Images/sidebar/category.png";
import Profile from "../Images/sidebar/profile.png";
export default function Sidebar() {
  return (
    <>
      <div className="side-bar-section">
        <img src={Dashboard} alt="Daymode" width={25} height={25} />
        <img src={customize} alt="Daymode" width={25} height={25} />
        <img src={Profile} alt="Daymode" width={25} height={25} />
        <img src={Filter} alt="Daymode" width={25} height={25} />
        <img src={Help} alt="Daymode" width={25} height={25} />
        <img src={Category} alt="Daymode" width={25} height={25} />
        <img src={Partner} alt="Daymode" width={25} height={25} />
        <img src={Support} alt="Daymode" width={25} height={25} />
        <img src={Adjusted} alt="Daymode" width={25} height={25} />
      </div>
    </>
  );
}
