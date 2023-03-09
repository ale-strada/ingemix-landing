
import Swal from "sweetalert2";
import { Button, Form, Input, TextArea } from "./style";

export function ContactForm(){

    
    function handleSubmit(e:any){
        e.preventDefault()
        const contactoMensaje = {
            nombre:e.target.nombre.value,
            telefono:e.target.telefono.value,
            email:e.target.email.value,
            mensaje:e.target.mensaje.value,
        }
        console.log(contactoMensaje);
        
        if(contactoMensaje.nombre && contactoMensaje.telefono && contactoMensaje.email && contactoMensaje.mensaje){
            //aca hay q enviar el mensaje
            
            Swal.fire({
                title: "Su mensaje fue enviado",
                icon: "success",
                confirmButtonText: "ok",
            }).then(()=>{
                const myForm:any = document.getElementById('myform')
                myForm?.reset()
            }
            ); 
            }else{
            Swal.fire({
                title: "Por favor complete todos los campos del formulario para enviar un mensaje",
                icon: "error",
                confirmButtonText: "ok",
            });   
            
            }
            
    }

    return <Form id="myform" onSubmit={handleSubmit}>
        <Input name="nombre"  placeholder="NOMRE Y APELLIDO" type="text" />
        <Input name="telefono"  placeholder="CELULAR" type="tel" />
        <Input name="email"  placeholder="E-MAIL" type="email" />
        <TextArea  placeholder="DEJE SU CONSULTA" name="mensaje" id="" cols={30} rows={10}></TextArea>
        <Button type="submit" >ENVIAR</Button>
    </Form>
}