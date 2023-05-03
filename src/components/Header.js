import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  function mobileOpenClose() {
    let menu = document.querySelector("#mobile_overlay");
    let body = document.querySelector("body");
    if (menu.style.width === "100%") {
      menu.style.width = "0";
      body.style.overflow = "visible";
    } else {
      menu.style.width = "100%";
      body.style.overflow = "hidden";
    }
  }

  return (
    <header>
      <div id="desktop_header">
        <h1>Sustainable Web</h1>
        <nav>
          <ul>
            <li><NavLink to="/sustainable-web/" end className="nav_tab">Forside</NavLink></li>
            <li><NavLink to="/sustainable-web/sustainability-og-accessibility" className="nav_tab">Bæredygtighed & Accessibility</NavLink></li>
            <li><NavLink to="/sustainable-web/companies" className="nav_tab">Virksomheder</NavLink></li>
          </ul>
        </nav>
      </div>
      <div id="mobile_header">
        <FontAwesomeIcon icon={faBars} id="open_button" onClick={mobileOpenClose} />
      </div>
      <div id="mobile_overlay">
        <FontAwesomeIcon icon={faXmark} id="close_button" onClick={mobileOpenClose} />
        <div id="overlay_content">
          <ul>
            <li>
              <Link to="/sustainable-web/" onClick={mobileOpenClose}>Forside</Link>
            </li>
            <li>
              <Link to="/sustainable-web/sustainability-og-accessibility" onClick={mobileOpenClose}>Bæredygtighed & Accessibility</Link>
            </li>
            <li><Link to="/sustainable-web/companies" onClick={mobileOpenClose}>Virksomheder</Link></li>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Header;
