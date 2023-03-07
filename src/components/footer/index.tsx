import { FooterContainer, InfoContainer, Information, LogosRedesContainer, Text400, Text400P, Text500 } from "./style";

export function Footer(){
    return <FooterContainer>
        <InfoContainer>
            <Information style={{alignItems:"start"}}>
                <Text500>SOMOS</Text500>
                <Text500>SERVICIOS</Text500>
                <Text500>PRESUPUESTOS</Text500>
                <Text500>CONTACTO</Text500>
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
                    <div style={{width:"30px", height:"30px", background:"black", borderRadius:"30px"}}></div>
                    <div style={{width:"30px", height:"30px", background:"black", borderRadius:"30px"}}></div>
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
        <Text500 style={{padding:"15px"}}>TODOS LOS DERECHOS RESERVADOS | AÑO 2023</Text500>
    </FooterContainer>
}