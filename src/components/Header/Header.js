import React from "react";
import logoPic from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
	return(
		<header className="header">
		  <img className="header__logo" src={logoPic} alt="Логотип Mesto" />
      <Link to="/sign-in" className="header__link buttons">Войти</Link>
		</header>
	);
}

export default Header;
