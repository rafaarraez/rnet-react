import React from 'react'

function Contact() {
    return (
            <div className="ui container segment">
                <h1 className="header">Contactanos</h1>
                <div className="ui raised very padded text container basic segment">
                    <form className="ui equal width form">
                        <div className="ui success message">
                            <div className="header">Exito!</div>
                            <p>Muchas gracias por su mensaje. Nos pondremos en
                                contacto a traves del correo electronico que usted proporciono</p>
                        </div>
                        <div className="field">
                            <div className="ui error message">
                                <div className="header">Campo requerido</div>
                                <p>Debe ingresar su nombre</p>
                            </div>
                            <div className="ui error message">
                                <div className="header">Campo requerido</div>
                                <p>Debe ingresar su correo electronico</p>
                            </div>
                            <div className="fields">
                                <div className="field required">
                                    <label htmlFor="name">Nombre</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="field required">
                                    <label htmlFor="email">Correo Electronico</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                            </div>
                        </div>
                        <div className="field required">
                            <div className="ui error message">
                                <div className="header">Campo requerido</div>
                                <p>Debe ingresar un mensaje</p>
                            </div>
                            <label htmlFor="message">Su Mensaje</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button className="ui fluid button">Enviar mensaje</button>
                    </form>
                </div>
            </div>
    )
}

export default Contact
