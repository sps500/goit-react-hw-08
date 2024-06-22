import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { IoHome } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <IoHome style={{ fontSize: 40 }} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <RiContactsBook3Fill style={{ fontSize: 40 }} />
        </NavLink>
      )}
    </nav>
  );
}
