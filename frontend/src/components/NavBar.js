import { Routes, Route, NavLink } from "react-router-dom";

function NavBar({ isLoggedIn, isOpen, email, onSignout }) {
  return (
    <nav className={`${isLoggedIn && "nav"} ${isOpen && "nav_open"}`}>
      <ul className={`nav__list ${isLoggedIn && "nav__list_place_burger"}`}>
        {isLoggedIn && (
          <li>
            <span>{email}</span>
          </li>
        )}
        <li>
          <Routes>
            <Route
              path="/sign-in"
              element={
                <NavLink to="/sign-up" className="nav__link">
                  Регистрация
                </NavLink>
              }
            />
            <Route
              path="/sign-up"
              element={
                <NavLink to="/sign-in" className="nav__link">
                  Войти
                </NavLink>
              }
            />
            <Route
              exact
              path="/"
              element={
                <button className="nav__btn" type="button" onClick={onSignout}>
                  Выйти
                </button>
              }
            />
          </Routes>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
