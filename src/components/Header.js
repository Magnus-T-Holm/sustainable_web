import React from "react";
import { NavHashLink } from 'react-router-hash-link';
import $ from "jquery";
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

  $(function () {
    let current_page = window.location.pathname;
    $('#desktop_header nav ul li a').each(function () {
      let $this = $(this);
      if ($this.attr('href').indexOf(current_page) !== -1) {
        $this.addClass('current_page');
      }
    })
  })

  return (
    <header>
      <div id="desktop_header">
        <h1>Sustainable Web</h1>
        <nav>
          <ul>
            <li><a href="/sustainable-web" className="nav_tab">Home</a></li>
            <li><a href="#" className="nav_tab">test</a></li>
            <li><a href="#" className="nav_tab">test2</a></li>
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
              <NavHashLink to="/sustainable-web/#home" onClick={mobileOpenClose}>Hjem</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/sustainable-web/#about" onClick={mobileOpenClose}>Om mig</NavHashLink>
            </li>
            <li>
              <NavHashLink to="/sustainable-web/#projects" onClick={mobileOpenClose}>Projekter</NavHashLink>
            </li>
          </ul>
        </div>
      </div>
    </header >
  );
};

export default Header;
