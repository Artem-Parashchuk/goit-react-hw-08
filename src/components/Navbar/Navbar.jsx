import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserLoading } from "../../redux/auth/slice";
import { logoutThunk } from "../../redux/auth/operations";

export const Navbar = () => {
  const isLoggedIn = useSelector(selectUserLoading)
  const dispatch = useDispatch()
  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Phonebook</NavLink>
        {
          !isLoggedIn ? (
            <>
            <NavLink to='/login'>Login</NavLink> 
            <NavLink to='/register'>Register</NavLink> 
            </>
          ) : (
            <button onClick={() => dispatch(logoutThunk())} className={s.btn_logout}>Logout</button>
          )
        }
      </nav>
    </div>
  );
};
