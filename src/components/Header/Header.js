import React from "react";
import logoPic from '../../images/logo.svg';

function Header() {
	return(
		<header className="header">
		    <img className="header__logo" src={logoPic} alt="Логотип Mesto" />
		</header>
	);
}

export default Header;
