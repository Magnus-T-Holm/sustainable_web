import React from "react";
import { HashLink } from 'react-router-hash-link';

const Aside = ({ currentPage, sectionNames, sectionIds }) => {

  return (
    <aside>
      <ul>
        {sectionNames.map(function (section, i) {
          return <li key={i}><HashLink to={`${currentPage}#${sectionIds[i]}`} >{section}</HashLink></li>
        })}
      </ul>
    </aside>
  );
};

export default Aside;
