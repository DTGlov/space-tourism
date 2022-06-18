import React, { useState } from 'react';
import logo from '../../assets/images/shared/logo.svg';
import bars from '../../assets/images/shared/icon-hamburger.svg';
import './AppHeader.scss';
import Sidebar from '../Sidebar/Sidebar';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../utils/routes';

export default function AppHeader() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleShowNav = () => {
    setToggleNav(true);
  };
  return (
    <header>
      <nav className="nav">
        <figure className="nav__logo">
          <img src={logo} alt="page logo" />
        </figure>
        <ul className="nav__links">
          <li className="">
            <NavLink to={ROUTES.HOME}>
              <span>00</span> <span>HOME</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink to={ROUTES.DESTINATION}>
              <span>01</span> <span>DESTINATION</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink to={ROUTES.CREW}>
              <span>02</span> <span>CREW</span>
            </NavLink>
          </li>
          <li className="">
            <NavLink to={ROUTES.TECHNOLOGY}>
              <span>03</span> <span>TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
        <figure className="nav__bars" onClick={handleShowNav}>
          <img src={bars} alt="hamburger menu" />
        </figure>
      </nav>
      <Sidebar toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <div className="stroke"></div>
    </header>
  );
}
