import { SubpageImg } from "../../../ui/soluciones-style/style";
import { 
    Container,
    Historia, 
    ImgContainerL, 
    ImgContainerR, 
    ImgsWrap, 
    Portada, 
    TextoHistoria, 
    Title } from "../../components/nosotros-component/style";

export default function NosotrosComponent(){
    return <Container>
        <Portada>
            <Title>NUESTRA HISTORIA</Title>
        </Portada>
        <ImgsWrap>
            <ImgContainerL>
                <SubpageImg src="/img/carousel7.jpg"/>
            </ImgContainerL>
            <ImgContainerR>
            <SubpageImg src="/img/carousel8.jpg"/>
            </ImgContainerR>
        </ImgsWrap>
        <Historia>
            <div style={{width:"100%", margin: "10px 25px 10px 0"}}>
                <TextoHistoria>
                    Somos una empresa con más de 15 años de experiencia brindando soluciones para la industria.
                    Nuestro radio de acción abarca la esfera nacional e internacional, encontrándonos radicados
                    en la provincia de San Juan (más de una década) y en Pilar provincia de Buenos Aires, desde principios del año 2016.
                </TextoHistoria>
            </div>
            <div style={{width:"100%", margin: "10px 0 10px 25px"}}>
                <TextoHistoria> 
                    Entre nuestros servicios se encuentran: el mantenimiento industrial, edilicio, metalúrgico y electromecánico; la fabricación de estructuras metálicas y montaje de líneas productivas. 
                    Nuestros trabajos cumplen con los estándares mas altos de calidad, producto del esfuerzo 
                    y energía que nos caracteriza y que brindamos en cada ocasión.
                </TextoHistoria>
            </div>
        </Historia>
        <ImgsWrap>
            <SubpageImg src="/img/carousel10.jpg"/>
        </ImgsWrap>
    </Container>
}