import { ServicioCard } from "../servicio-card";
import { CardContainer, ServiciosContainer, ServiciosTitle } from "./style";


export function Servicios(){
    return <ServiciosContainer id="servicios">
        <ServiciosTitle>SOLUCIONES INTEGRALES</ServiciosTitle>
        <CardContainer>
            <ServicioCard numero="01" titulo="INGENIERIA" id="ingenieria"/>
            <ServicioCard numero="02" titulo="CONSTRUCCION"  id="construccion" />
            <ServicioCard numero="03" titulo="MONTAJE"  id="montaje" />
            <ServicioCard numero="04" titulo="MANTENIMIENTO" id="mantenimiento" />
        </CardContainer>
    </ServiciosContainer>
}