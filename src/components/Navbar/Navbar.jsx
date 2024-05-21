import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'


export const Navbar = () => {
  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};
