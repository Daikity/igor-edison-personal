'use client'

import { useEffect, useState } from "react";
import LogoText from "./LogoText";
import useScrollPosition from '@react-hook/window-scroll'
import "./scss/top-menu.scss";

export default function TopMenu() {

  const scrollY: number = useScrollPosition(60),
        [isFillBackground, setTsFillBackground] = useState<boolean>(false);

  useEffect(() => {
    scrollY > 80 ? setTsFillBackground(true) : setTsFillBackground(false);
  });

  return (
    <div className={`top-menu ${isFillBackground ? 'bg-black':'bg-transparent'}`}>
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
