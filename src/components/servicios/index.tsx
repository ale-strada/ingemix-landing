import { ServicioCard } from "../servicio-card";
import { CardContainer, ServiciosContainer, ServiciosTitle } from "./style";


export function Servicios(){
    return <ServiciosContainer id="servicios">
        <ServiciosTitle>SOLUCIONES INTEGRALES</ServiciosTitle>
        <CardContainer>
            <ServicioCard numero="01" titulo="INGENIERIA" link=""/>
            <ServicioCard numero="02" titulo="CONSTRUCCION" link=""/>
            <ServicioCard numero="03" titulo="MONTAJE" link=""/>
            <ServicioCard numero="04" titulo="MANTENIMIENTO" link=""/>
        </CardContainer>
    </ServiciosContainer>
}