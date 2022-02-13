import React from "react";
import {Link} from  'react-router-dom';

function PreMain(props) {
  return(
    <section className="pre-main">
      <h3 className="pre-main__title">{props.title}</h3>
      <form
        className={`pre-main__form pre-main__form_type_${props.name}`}
        name={props.name}
        onSubmit={props.onSubmit}
        noValidate>
        {props.children}
        <button type="submit" className="pre-main__subButton">{props.submitText}</button>
			</form>
      {props.reg ?
        <div className="sign-in">
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in" className="sign-in__link buttons">Войти</Link>
        </div> : ''
      }
    </section>
  )
}

export default PreMain;
