import React from "react";
import { NavHashLink } from 'react-router-hash-link';

const Aside = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") == null) {
    localStorage.setItem("isDanish", "true")
  }

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }

  return (
    <aside>
      <ul>
        <li><NavHashLink to="/sustainable-web/#home" data-danish="Hjem" data-english="Home">{isDanish ? "Hjem" : "Home"}</NavHashLink></li>
        <li><NavHashLink to="/sustainable-web/#about" data-danish="Om mig" data-english="About">{isDanish ? "Om mig" : "About"}</NavHashLink></li>
        <li><NavHashLink to="/sustainable-web/#projects" data-danish="Projekter" data-english="Projects">{isDanish ? "Projekter" : "Projects"}</NavHashLink></li>
      </ul>
    </aside>
  );
};

export default Aside;
