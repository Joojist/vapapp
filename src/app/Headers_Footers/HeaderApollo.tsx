"use client";
import React, { useState, useEffect } from "react";
import "../styles/Header.scss";

const Header: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="content-wrapper">
        <nav>
          <ul>
            <img
              src="Vapiano/Apollo-Grupi-logo.svg"
              alt="Apollo Group Logo"
              width="33.438"
              height="30.672"
              className="apollo_logo"
            />
            <li>
              <a href="#">Liitu Apollo klubiga</a>
            </li>
            <li>
              <a href="#">Apollo e-pood</a>
            </li>
            <li>
              <a href="#">Apollo kino</a>
            </li>
            <li>
              <a href="#">Blender</a>
            </li>
            <li>
              <a href="#">O’Learys</a>
            </li>
            <li>
              <a href="#">Apotheka</a>
            </li>
            <li>
              <a href="#">Apotheka beauty</a>
            </li>
            <li>
              <a href="#">Petcity</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
