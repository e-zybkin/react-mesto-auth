import React from "react";
import logoPic from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  function handleHeaderLink() {
    switch (location.pathname) {
        case '/react-mesto-auth':
          return(
            <>
              <p className="header__elements">email@mail.com</p>
              <Link
                to="/sign-in"
                className="header__elements buttons"
              >Выйти</Link>
            </>

          );

        case '/sign-in':
          return(
            <Link
              to="/sign-up"
              className="header__elements buttons"
            >Зарегистрироваться</Link>
          );

        case '/sign-up':
          return(
            <Link
              to="/sign-in"
              className="header__elements buttons"
            >Войти</Link>
          );
      }
  }

	return(
		<header className="header">
		  <img className="header__logo" src={logoPic} alt="Логотип Mesto" />
      <>{handleHeaderLink()}</>
		</header>
	);
}

export default Header;
