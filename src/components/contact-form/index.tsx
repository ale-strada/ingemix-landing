export function ContactForm(){
    return <form className="contacto-form">
        <input className="contacto-form_input" placeholder="NOMRE Y APELLIDO" type="text" />
        <input className="contacto-form_input" placeholder="CELULAR" type="text" />
        <input className="contacto-form_input" placeholder="E-MAIL" type="text" />
        <textarea className="contacto-form_textarea" placeholder="DEJE SU CONSULTA" name="mensaje" id="" cols={30} rows={10}></textarea>
        <button className="contacto-form_button">ENVIAR</button>
    </form>
}