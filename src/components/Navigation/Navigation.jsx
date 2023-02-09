import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={s.navBar}>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.navLinks)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.navLinks)}
        to="/movies"
      >
        Find Your Movie
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.activeLink : s.navLinks)}
        to="/library"
      >
        Your Library
      </NavLink>
    </nav>
  );
}
