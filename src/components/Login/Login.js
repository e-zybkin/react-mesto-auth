import React, { useState } from "react";
import PreMain from "../PreMain/PreMain";
//import * as auth from '../../auth';
//import { useHistory } from 'react-router-dom';

function Login(props) {
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
    props.handleLogin(formData);
    setFormData({mail:'', password:''});
    /*auth.authorize(formData.password, formData.mail)
    .then((data) => {
      if (data.jwt){
        setFormData({mail:'', password:''});
        props.handleLogin();
        history.push('/react-mesto-auth');
      }
    })
    .catch((err) => console.log('ОШИБКА: ', err))*/
  }

  return(
    <PreMain
      name="login"
      title="Вход"
      submitText="Войти"
      onSubmit={handleSubmit}
      reg={false}
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
          <span className="pre-main__input-error mail-input-error"></span>
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

export default Login;
