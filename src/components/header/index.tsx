import { HeaderContainer, Nav, NavLinks, RedesContainer } from "./style";

export function Header(){

    const handleClickScrollServicios = () => {
        const element = document.getElementById('servicios');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };
    const handleClickScrollContacto = () => {
        const element = document.getElementById('contacto');
        if (element) {element.scrollIntoView({ behavior: 'smooth' }); }
    };

    return <HeaderContainer>
        <img style={{width:"200px", height:"50px"}} src="https://ingemix.com.ar/wp-content/uploads/2021/10/logohomh.jpg" alt="" />
        <Nav>
            <NavLinks>SOMOS</NavLinks>
            <NavLinks onClick={handleClickScrollServicios}>SERVICIOS</NavLinks>
            <NavLinks onClick={handleClickScrollContacto}>CONTACTO</NavLinks>
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