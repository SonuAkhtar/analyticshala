import React, { useEffect, useState } from "react";

// Imported Component
import MenuDesk from "../MenuDesk/MenuDesk";
import MenuMobile from "../MenuMobile/MenuMobile";

// Imported CSS
import "./header.css";

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [burgerClick, setBurgerClick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <header className={`header ${headerScroll && "scroll"}`}>
        <nav>
          <a className="nav_logo" href="#">
            Riyaz
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

          <MenuMobile expand={menuClick} setExpand={setMenuClick} />
        </nav>
      </header>
      <MenuDesk show={menuClick} setShow={setMenuClick} />
    </>
  );
};

export default Header;
