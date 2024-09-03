import React, { useState } from "react";

// imported Data
import { menuDeskData } from "../../../appData";

// imported CSS
import "./menuDesk.css";

const MenuDesk = ({ show, setShow }) => {
  const [menuItem, setMenuItem] = useState("four");

  const handleMenuClick = (val) => {
    setMenuItem(val);
    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  return (
    <div className={`menuDesk_container ${show && "show"}`}>
      <div className={`menuDesk_circle ${menuItem}`}>
        {menuDeskData.map((item, i) => (
          <div
            key={i}
            className={`menuDesk_stripe ${item.class}`}
            onClick={() => {
              handleMenuClick(item.class);
            }}
          >
            <div className="menuDesk_dot">
              <i
                className={`far fa-dot-circle ${
                  menuItem == item.class && "active"
                }`}
              />
            </div>
            <a
              href={item.href}
              className={`menuDesk_text ${menuItem == item.class && "active"}`}
            >
              <span className="number">{item.number}</span>
              <span className="name">{item.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDesk;
