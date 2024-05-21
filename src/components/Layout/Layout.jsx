import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import s from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <h2 className={s.title}>Phone Book App</h2>
        <p className={s.text}>test@gmail.com</p>
        <Navbar />
      </header>
      <main>
        <div className={s.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
