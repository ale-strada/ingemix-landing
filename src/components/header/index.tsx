import { HeaderContainer, Nav, RedesContainer } from "./style";


export function Header(){
    return <HeaderContainer>
        <img style={{width:"200px", height:"50px"}} src="https://ingemix.com.ar/wp-content/uploads/2021/10/logohomh.jpg" alt="" />
        <Nav>
            <p style={{fontFamily: "Roboto", color:"grey", fontSize:"24px"}}>SOMOS</p>
            <p style={{fontFamily: "Roboto", color:"grey", fontSize:"24px"}}>SERVICIOS</p>
            <p style={{fontFamily: "Roboto", color:"grey", fontSize:"24px"}}>CONTACTO</p>
        </Nav>
        <RedesContainer>
            <a href="http://www.facebook.com/IngemixArg">
                <img style={{width:"60px", height:"60px"}} src="/facebook-negro3.png" alt="" />
            </a>
            <a href="https://www.instagram.com/ingemix_arg/">
                <img style={{width:"70px", height:"50px"}} src="/insta-negro.png" alt="" />
            </a>
        </RedesContainer>
    </HeaderContainer>
}