import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Реєстрація
      </NavLink>
      <NavLink className={css.link} to="/login">
        Увійти
      </NavLink>
    </div>
  );
}
