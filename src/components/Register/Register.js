import React from "react";

function Register(props) {
  return(
    <main>
      <section className="register">
        <h3 className=""></h3>
        <form
          //className={`popup__form popup__form_type_${props.name}`}
          //name={props.name}
          //onSubmit={props.onSubmit}
          noValidate
        >
          <div className="input-box">
          <input
            required
            minLength="2"
            maxLength="40"
            type="text"
            //value={name || ''}
            //onChange={handleNameChange}
            placeholder="Email"
            id="email-input"
            className="popup__input popup__input_type_name"
            name="name"
          />

          <span className="popup__input-error name-input-error"></span>
          </div>

          <div className="input-box">
            <input
              required
              minLength="2"
              maxLength="200"
              type="text"
              //value={description || ''}
              //onChange={handleDescriptionChange}
              placeholder="Статус"
              id="status-input"
              className="popup__input popup__input_type_status"
              name="status"
            />
            <span className="popup__input-error status-input-error"></span>
          </div>
          <button type="submit" className="">{/*props.submitText*/}</button>
				</form>
      </section>
    </main>
  )
}

export default Register;
