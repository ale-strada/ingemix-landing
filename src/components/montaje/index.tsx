import { 
    SolucionContainer,
    SolucionesItem, 
    SolucionesTitleText, 
    SolucionLeft, 
    SolucionRigth, 
    SolucionTitleConteiner, 
    SubpageImg 
} from "../../../ui/soluciones-style/style";


export function Montaje(){
    return <SolucionContainer id="montaje">
        <SolucionTitleConteiner color="#F58634">
            <SolucionesTitleText>MONTAJES</SolucionesTitleText>
        </SolucionTitleConteiner>
        <SolucionLeft>
            <SubpageImg src="/img/carousel11.jpg" alt="" />
        </SolucionLeft>
        <SolucionRigth color="#2E2E38">
            <SolucionesItem color="#FFF">Instalaciones de procesos productivos y servicios generales de planta.</SolucionesItem>
            <SolucionesItem color="#FFF">Diseño y ejecución de sistemas a la medida de las necesidades del cliente.</SolucionesItem>
            <SolucionesItem color="#FFF">
                La constante comuncación e intercambio entre el Departamento de ingeniería 
                y los responsables de la obra, busca un trabajo en conjunto para un desarrollo
                óptimo del proyecto
            </SolucionesItem>
        </SolucionRigth>
    </SolucionContainer>
}