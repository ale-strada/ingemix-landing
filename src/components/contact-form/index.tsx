import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`
const Input = styled.input`
    width: 100%;
    height: 50px;
    margin: 5px;
    border-radius: 15px;
    border: none;
    background-color: #e7e7e7;
    font-family: "Roboto";
    font-family: "Roboto";
    font-size: 20px;
    padding: 10px;
`
const TextArea = styled.textarea`
    width: 100%;
    height: 150px;
    margin: 5px;
    border-radius: 15px;
    border: none;
    background-color: #e7e7e7;
    font-family: "Roboto";
    font-size: 20px;
    padding: 10px;
`
const Button = styled.button`
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #888;
    font-family: "Roboto";
    font-size: 30px;
    margin-top: 20px;
`
export function ContactForm(){
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    
    function handleSubmit(e:any){
        e.preventDefault()
        setNombre(e.target.nombre.value) 
        setTelefono(e.target.telefono.value)
        setEmail(e.target.email.value)
        setMensaje(e.target.mensaje.value)
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
                setNombre("");
                setTelefono("");
                setEmail("");
                setMensaje("");
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