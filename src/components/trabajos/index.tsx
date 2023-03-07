import { CarouselTrabajos } from "../carousel-trabajos";
import { TrabajosContainer, TrabajosTitulo } from "./style";

export function Trabajos(){
    return <TrabajosContainer>
        <TrabajosTitulo>TRABAJOS REALIZADOS</TrabajosTitulo>
        <CarouselTrabajos/>
    </TrabajosContainer>
}