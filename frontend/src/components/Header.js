import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import BurgerBtn from './BurgerBtn';

function Header({ isLoggedIn, email, onSignout }) {
  const [isNavBarOpen, setNavBarState] = useState(false);

  function toggleBurgerMenu() {
    setNavBarState(!isNavBarOpen);
  }

  function handleSignout() {
    onSignout();
    setNavBarState(false);
  }

  return (
    <header className='header'>
      <Link
        className='logo'
        to='/'
        aria-label='Логотип'
      />
      <NavBar
        isLoggedIn={isLoggedIn}
        isOpen={isNavBarOpen}
        email={email}
        onSignout={handleSignout}
      />

      {isLoggedIn && (
        <BurgerBtn
          onClick={toggleBurgerMenu}
          isOpen={isNavBarOpen}
        />
      )}
    </header>
  );
}

export default Header;
