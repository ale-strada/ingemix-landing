import { Layout } from "@/components/layout";
import styled from "styled-components";

const Portada = styled.div`
width:95%;
height:250px;
background-image:url("./nosotros.png");
margin: 0 auto;
display: flex;
align-items: center;
padding: 55px;
`
const Title = styled.h2`
font-family:"Roboto";
font-weight:500;
color:#FFF;
`
const Historia = styled.div`
width:95%;
height:350px;
background-color: #ef842c;
margin: 10px auto;
padding:70px 100px;
display: flex;
align-items: center;
justify-content: space-between;
`
const TextoHistoria = styled.p`
font-family:"Roboto";
color:#FFF;
text-align: justify;
`
export default function Nosotros(){
    return <Layout>
        <Portada>
            <Title>NUESTRA HISTORIA</Title>
        </Portada>
        <div style={{width:"95%", height: "300px", margin: "10px auto",display:"flex", alignItems: "center", justifyContent: "space-between"}}>
            <div style={{width:"100%", height: "300px", margin: "10px 10px 10px 0", border: "solid 2px"}}>
                fotos
            </div>
            <div style={{width:"100%", height: "300px", margin: "10px 0 10px 10px", border: "solid 2px"}}>
                fotos
            </div>
        </div>
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
        <div style={{width:"95%", height: "300px", margin: "10px auto", border: "solid 2px"}}>
            fotos
        </div>
    </Layout>
}