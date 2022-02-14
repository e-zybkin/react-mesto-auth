import React, { useState } from "react";
import PreMain from "../PreMain/PreMain";
//import * as auth from "../../auth";
//import { useHistory } from 'react-router-dom';

function Register(props) {
  //const history = useHistory();
  const [formData, setFormData] = useState({
    mail: '',
    password: '',
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(formData);
    /*auth.register(formData.password, formData.mail)
    .then((res) => {
      history.push('/sign-in')
      //нужно придумать что-то, чтобы перед тем,
      //как отправлять пользователя на вход
      //вызывать попап с подтверждением, либо с ошибкой
      //
      //если результат положительный, то вызываем попап, внутрь
      //которого передаём функцию по перенаправлению пользователя
      //на вход, а параллельно с ней используем closeAllPopups

      /*if(res) {
        //попап({history.push('/sign-in')})
      } else {
        //попап с оповещением об ошибке
      }*/
    /*})
    .catch((err) => console.log('ОШИБКА: ', err))*/
  }

  return(
    <PreMain
      name="register"
      title="Регистрация"
      submitText="Зарегистрироваться"
      onSubmit={handleSubmit}
      reg={true}
    >
      <>
        <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            value={formData.mail || ''}
            onChange={handleChange}
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
            type="password"
            value={formData.password || ''}
            onChange={handleChange}
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
