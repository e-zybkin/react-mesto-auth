import React from "react";
import logoPic from '../../images/logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  }

  function handleHeaderLink() {
    switch (location.pathname) {
        case '/react-mesto-auth':
          return(
            <>
              <p className="header__elements">{props.email}</p>
              <button onClick={signOut} className="header__elements buttons">Выйти</button>
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
