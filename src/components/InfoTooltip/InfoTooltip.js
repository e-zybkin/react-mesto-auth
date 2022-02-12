import React from "react";
import tick from '../../images/tick.svg'
import cross from '../../images/cross.svg'

function InfoTooltip(props) {
  return(
    <div className="popup popup_type_others">
      <div className="popup__content">
        <button type="button" /*onClick={props.onClose}*/ className="popup__close-btn buttons"></button>
        <img className="popup__info-pic" src={tick} alt="Галочка" />
        <h3 className="popup__title">Вы успешно зарегистрировались!</h3>
      </div>
    </div>
  )
}

export default InfoTooltip;