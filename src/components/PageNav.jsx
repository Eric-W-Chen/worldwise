import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    // Access our class name using the styles object that we import
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${styles.ctaLink} ${isActive ? "active" : ""}`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
