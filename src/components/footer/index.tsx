import { useRouter } from "next/router";
import { FooterContainer, InfoContainer, Information, LogosRedesContainer, Text400, Text400P, Text500 } from "./style";

export function Footer(){
    const router = useRouter()
    const handleClickScrollServicios = () => {
        const element = document.getElementById('servicios');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };
    const handleClickScrollContacto = () => {
        const element = document.getElementById('contacto');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };

    return <FooterContainer>
        <InfoContainer>
            <Information style={{alignItems:"start"}}>
                <Text500 style={{cursor:"pointer"}}  onClick={()=>{router.push("/nosotros")}}>SOMOS</Text500>
                <Text500 style={{cursor:"pointer"}}  onClick={handleClickScrollServicios}>SERVICIOS</Text500>
                <Text500 style={{cursor:"pointer"}}  onClick={handleClickScrollContacto}>CONTACTO</Text500>
            </Information>
            <Information style={{alignItems:"start"}}>
                <Text400>PILAR</Text400>
                <div>
                    <Text400P>Uriburu 6595</Text400P>
                    <Text400P>Panamericana</Text400P>
                    <Text400P>Ramal Pilar KM 64.5</Text400P>
                    <Text400P>Fátima Pilar</Text400P>
                    <Text400P>Tel: 011-1525710160</Text400P>
                </div>
            </Information>
            <Information style={{alignItems:"start"}}>
                <Text400>SAN JUAN</Text400>
                <div>
                    <Text400P>Corvalán 542</Text400P>
                    <Text400P>(5411) Santa Lucia</Text400P>
                    <Text400P>Tel: 0264 15 523-0164</Text400P>
                </div>
            </Information>
            <Information>
                <LogosRedesContainer>
                    <a href="http://www.facebook.com/IngemixArg">
                        <img style={{width:"40px", height:"40px"}} src="/facebook-blanco.png" alt="" />
                    </a>
                    <a  href="https://www.instagram.com/ingemix_arg/">
                        <img style={{width:"40px", height:"40px"}}  src="/insta-blanco.png" alt="" />
                    </a>
                </LogosRedesContainer>
                <div>
                    <a style={{textDecoration:"none"}} href="http://info@ingemix.com.ar"><Text400P>info@ingemix.com.ar</Text400P> </a>
                    <a style={{textDecoration:"none"}} href="http://www.ingemix.com.ar"><Text400P> www.ingemix.com.ar</Text400P></a>
                </div>
            </Information>
            <Information>
            <img style={{width:"200px", height:"50px"}} src="https://ingemix.com.ar/wp-content/uploads/2021/10/logohomh.jpg" alt="" />
            </Information>
        </InfoContainer>
        <Text500 style={{padding:"15px", fontSize:"15px"}}>TODOS LOS DERECHOS RESERVADOS | AÑO 2023</Text500>
    </FooterContainer>
}