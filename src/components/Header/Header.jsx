import { useState } from "react";

// import Component
import MenuDesk from "../MenuDesk/MenuDesk";
import MenuMobile from "../MenuMobile/MenuMobile";

// import CSS
import "./header.css";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <>
      <header className="header">
        <nav>
          <a className="nav_logo" href="#">
            AnalyticShala
          </a>

          <div
            className={`ham_wrapper ${menuClick && "active"}`}
            onClick={() => setMenuClick(!menuClick)}
          >
            <div className="ham_icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        <MenuMobile expand={menuClick} setExpand={setMenuClick} />
      </header>
      <MenuDesk show={menuClick} setShow={setMenuClick} />
    </>
  );
};

export default Header;
