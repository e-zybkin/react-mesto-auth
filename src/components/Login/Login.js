import React from "react";
import PreMain from "../PreMain/PreMain";

function Login(props) {
  return(
    <PreMain>
      <>
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            //value={mail || ''}
            //onChange={handleMameChange}
            placeholder="Email"
            id="mail-input"
            className="preMain__input preMain__input_type_mail"
            name="mail"
          />

          <span className="preMail__input-error mail-input-error"></span>
        </div>

        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="200"
            type="text"
            //value={password || ''}
            //onChange={handlePasswordChange}
            placeholder="Пароль"
            id="password-input"
            className="preMain__input preMain__input_type_password"
            name="password"
          />
          <span className="preMain__input-error password-input-error"></span>
        </div>
      </>
    </PreMain>
  )
}

export default Login;
