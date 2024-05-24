import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import s from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/slice";

export const Layout = () => {
  const userName = useSelector(selectUserName);
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <h2 className={s.title}>Phone Book App</h2>
        {
          userName && <p className={s.text}>Welcome, {userName}</p>
        }
        <Navigation />
      </header>
      <main>
        <div className={s.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
