import { SolucionContainer, SolucionesItem, SolucionesTitleText, SolucionLeft, SolucionRigth, SolucionTitleConteiner, SubpageImg } from "@/pages/soluciones/style";


export function Ingenieria(){
    return <SolucionContainer id="ingenieria">
        <SolucionTitleConteiner color="#2E2E38">
            <SolucionesTitleText>INGENIERÍA Y DESARROLLO</SolucionesTitleText>
        </SolucionTitleConteiner>
        <SolucionLeft  color="#F58634">
            <SolucionesItem>Diseño conceptual de plantas industriales</SolucionesItem>
            <SolucionesItem>Desarrollo de ingeniería básica</SolucionesItem>
            <SolucionesItem>Gerenciamiento de proyectos</SolucionesItem>
            <SolucionesItem>Obras civiles y estructuras</SolucionesItem>
            <SolucionesItem>Elavoracion de ingeniería de detalle constructiva</SolucionesItem>
        </SolucionLeft>
        <SolucionRigth style={{border: "solid 2px"}}><SubpageImg src="/img/soluciones-ingenieria.png" alt="" /></SolucionRigth>
    </SolucionContainer>
}