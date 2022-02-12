import React from "react";
import PreMain from "../PreMain/PreMain";

function Register(props) {
  return(
    <PreMain
      name="register"
      title="Регистрация"
      submitText="Зарегистрироваться"
      //onSubmit={handleSubmit}
      reg={true}
    >
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
            className="pre-main__input pre-main__input_type_mail"
            name="mail"
          />
          <span className="pre-maim__input-error mail-input-error"></span>
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
            className="pre-main__input pre-main__input_type_password"
            name="password"
          />
          <span className="pre-main__input-error password-input-error"></span>
        </div>
      </>
    </PreMain>
  )
}

export default Register;
