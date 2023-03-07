import { ContactForm } from "../contact-form";
import { InfoContainer, Information, Text400, Text400P, Text500 } from "../footer/style";
import { ContactoContainer, Text400Negro, Text400PNegro } from "./style";

export function Contacto(){
    return<ContactoContainer>
        <div>
            <Information style={{alignItems:"start", marginTop:"30px"}}>
                <Text400Negro>PILAR</Text400Negro>
                <div>
                    <Text400PNegro>Uriburu 6595</Text400PNegro>
                    <Text400PNegro>Panamericana</Text400PNegro>
                    <Text400PNegro>Ramal Pilar KM 64.5</Text400PNegro>
                    <Text400PNegro>Fátima Pilar</Text400PNegro>
                    <Text400PNegro>Tel: 011-1525710160</Text400PNegro>
                </div>
            </Information>
            <Information style={{alignItems:"start", marginTop:"30px"}}>
                <Text400Negro>SAN JUAN</Text400Negro>
                <div>
                    <Text400PNegro>Corvalán 542</Text400PNegro>
                    <Text400PNegro>(5411) Santa Lucia</Text400PNegro>
                    <Text400PNegro>Tel: 0264 15 523-0164</Text400PNegro>
                </div>
            </Information>
            <Information style={{alignItems:"start", marginTop:"30px"}}>
                    <div>
                    <a style={{textDecoration:"none"}} href="http://info@ingemix.com.ar"><Text400PNegro>info@ingemix.com.ar</Text400PNegro> </a>
                    <a style={{textDecoration:"none"}} href="http://www.ingemix.com.ar"><Text400PNegro> www.ingemix.com.ar</Text400PNegro></a>
                </div>
            </Information>
        </div>
        <div style={{
            width: "50%",
            height: "100%",
            padding: "30px",
        }}>
            <ContactForm/>
        </div>
    </ContactoContainer>
}