import React from "react";

function PreMain(props) {
  return(
    <main>
      <section className="preMain">
        <h3 className="preMain__title">{props.title}</h3>
        <form
          className={`preMain__form preMain__form_type_${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
          noValidate>
          {props.children}
          <button type="submit" className="">{props.submitText}</button>
				</form>
      </section>
    </main>
  )
}

export default PreMain;
