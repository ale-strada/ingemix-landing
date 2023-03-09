import { 
    SolucionContainer,
    SolucionesItem, 
    SolucionesTitleText, 
    SolucionLeft, 
    SolucionRigth, 
    SolucionTitleConteiner, 
    SubpageImg 
} from "../../../ui/soluciones-style/style";


export function Construccion(){
    return <SolucionContainer id="construccion">
        <SolucionTitleConteiner color="#F58634">
            <SolucionesTitleText>OBRAS CIVILES E INDUSTRIALES</SolucionesTitleText>
        </SolucionTitleConteiner>
        <SolucionLeft>
            <SubpageImg src="/img/soluciones-construccion.jpg" alt="" />
        </SolucionLeft>
        <SolucionRigth color="#2E2E38">
            <SolucionesItem color="#FFF">Diseño, cálculo, fabricación y montaje de estructuras metálicas</SolucionesItem>
            <SolucionesItem color="#FFF">Redes de incendio</SolucionesItem>
            <SolucionesItem color="#FFF">Tendido de pipping</SolucionesItem>
            <SolucionesItem color="#FFF">Adeciuación térmica de edificios</SolucionesItem>
            <SolucionesItem color="#FFF">Insonorización de equipos</SolucionesItem>
            <SolucionesItem color="#FFF">Pintura, colocación de pisos y revestimientos</SolucionesItem>
        </SolucionRigth>
    </SolucionContainer>
}
