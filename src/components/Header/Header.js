import React from "react";
import logoPic from '../../images/logo.svg';

function Header() {
	return(
		<header className="header">
		  <img className="header__logo" src={logoPic} alt="Логотип Mesto" />
      <p className="header__link">Войти</p>
		</header>
	);
}

export default Header;
