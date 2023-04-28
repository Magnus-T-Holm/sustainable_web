import React from "react";
import { NavHashLink } from 'react-router-hash-link';

const Aside = () => {
  return (
    <aside>
      <ul>
        <li><NavHashLink to="/sustainable-web/#home">Hjem</NavHashLink></li>
        <li><NavHashLink to="/sustainable-web/#about">Om mig</NavHashLink></li>
        <li><NavHashLink to="/sustainable-web/#projects">Projekter</NavHashLink></li>
      </ul>
    </aside>
  );
};

export default Aside;
