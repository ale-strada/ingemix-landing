import { ServicioCard } from "../servicio-card";
import { CardContainer, ServiciosContainer, ServiciosTitle } from "./style";


export function Servicios(){
    return <ServiciosContainer>
        <ServiciosTitle>SOLUCIONES INTEGRALES</ServiciosTitle>
        <CardContainer>
            <ServicioCard numero="01" titulo="INGENIERIA" link="https://www.freepik.es/search?format=search&query=redes%20sociales"/>
            <ServicioCard numero="02" titulo="CONSTRUCCION" link="https://www.freepik.es/search?format=search&query=redes%20sociales"/>
            <ServicioCard numero="03" titulo="MONTAJE" link="https://www.freepik.es/search?format=search&query=redes%20sociales"/>
            <ServicioCard numero="04" titulo="MANTENIMIENTO" link="https://www.freepik.es/search?format=search&query=redes%20sociales"/>
        </CardContainer>
    </ServiciosContainer>
}