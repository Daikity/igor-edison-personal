'use client'

import LogoText from "./LogoText";
import "./scss/top-menu.scss";

export default function TopMenu() {
  return (
    <div className="top-menu">
      <div className="header__container">
        <LogoText size="m" />
        <ul className="flex">
          <li className="transition-all cursor-pointer py-8 px-6 hover:bg-blue-800">Experience</li>
          <li className="transition-all cursor-pointer py-8 px-6 hover:bg-blue-800">Work</li>
          <li className="transition-all cursor-pointer py-8 px-6 hover:bg-blue-800">Photography</li>
          <li className="transition-all cursor-pointer py-8 px-6 hover:bg-blue-800">Contact</li>
        </ul>
      </div>
    </div>
  );
}
