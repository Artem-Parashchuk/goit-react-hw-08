import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLoading } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";

export const Navbar = () => {
  const isLogin = useSelector(selectUserLoading);
  const dispatch = useDispatch()

  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        {isLogin ? (
          <button className={s.btn_logout} onClick={() => dispatch(logoutThunk())}>LogOut</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </div>
  );
};
