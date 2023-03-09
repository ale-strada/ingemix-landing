import { SolucionesItem, SolucionesTitleText, SubpageImg } from "../../../ui/soluciones-style/style";
import { 
        Banner,
        CaracteristicasContainer, 
        CaracteristicasItem, 
        Icons, 
        ImgMantenimientoWrap, 
        MantenimientoContainer, 
        PaqueteDeHorasContainer, 
        PaqueteDeHorasPersonalIcon, 
        PaqueteDeHorasPersonalText, 
        PaqueteDeHorasServicioIcon, 
        PaqueteDeHorasServicioText, 
        PaqueteDeHorasTitle, 
        TiposContainer, 
        TiposTitleContainer } from "./style";

export function Mantenimiento(){
    return <MantenimientoContainer id="mantenimiento">
        <Banner>
            <SubpageImg src="/img/banner-mantenimiento.png" />
        </Banner>
        <ImgMantenimientoWrap>
            <SubpageImg src="/img/soluciones-mantenimiento.png"/>
        </ImgMantenimientoWrap>
        <CaracteristicasContainer>
            <Icons src="/img/M1.png"/>
            <CaracteristicasItem color="#FFF">Instalaciones macánicas</CaracteristicasItem>
            <Icons src="/img/M2.png"/>
            <CaracteristicasItem color="#FFF">Instalaciones eléctricas de potencia</CaracteristicasItem>
            <Icons src="/img/M3.png"/>
            <CaracteristicasItem color="#FFF">Equipos de baja tensión</CaracteristicasItem>
            <Icons src="/img/M4.png"/>
            <CaracteristicasItem color="#FFF">Cintas transportadoras</CaracteristicasItem>
            <Icons src="/img/M5.png"/>
            <CaracteristicasItem color="#FFF">Mantenimiento de sistemas de molienda</CaracteristicasItem>
            <Icons src="/img/M6.png"/>
            <CaracteristicasItem color="#FFF">Hidráulica básica</CaracteristicasItem>
        </CaracteristicasContainer>
        <PaqueteDeHorasContainer>
            <PaqueteDeHorasTitle>
                <SolucionesTitleText color="#000">PAQUETE DE HORAS</SolucionesTitleText>
            </PaqueteDeHorasTitle>
                <PaqueteDeHorasPersonalIcon>
                    <Icons src="/img/personal-icon.png"/>
                </PaqueteDeHorasPersonalIcon>
                <PaqueteDeHorasServicioIcon>
                    <Icons src="/img/servicios-icon.png"/>
                </PaqueteDeHorasServicioIcon>
                <PaqueteDeHorasPersonalText>
                    <CaracteristicasItem>
                        Personal capacitado y especializado para la solución de cada problema, experiencia en mantenimiento y
                        gestión del personal. Proveemos personas por hora para distintas actividades: soldadores, montadores, 
                        electricistas, mecánicos. 
                    </CaracteristicasItem>
                </PaqueteDeHorasPersonalText>
                <PaqueteDeHorasServicioText>
                    <CaracteristicasItem>
                        Cada servicio cuenta con un responsable de proyecto, encargado del control sobre las tareas asignadas 
                        al personal.
                    </CaracteristicasItem>
                </PaqueteDeHorasServicioText>
                <CaracteristicasItem></CaracteristicasItem>
        </PaqueteDeHorasContainer>
        <TiposContainer>
            <TiposTitleContainer>
                <SolucionesTitleText>INCLUYE MANTENIMIENTO:</SolucionesTitleText>
            </TiposTitleContainer>
            <div>
                <SolucionesItem color="#FFF">Eléctrico, mecánico y electromecánico.</SolucionesItem>
                <SolucionesItem color="#FFF">Hidráulica básica.</SolucionesItem>
                <SolucionesItem color="#FFF">Mampostería.</SolucionesItem>
            </div>
            <div>
                <SolucionesItem color="#FFF">Iluminación.</SolucionesItem>
                <SolucionesItem color="#FFF">Plomería.</SolucionesItem>
                <SolucionesItem color="#FFF">Mobiliario</SolucionesItem>
                <SolucionesItem color="#FFF">Terminaciones.</SolucionesItem>
                <SolucionesItem color="#FFF">Herrería.</SolucionesItem>
            </div>
        </TiposContainer>
    </MantenimientoContainer>
}