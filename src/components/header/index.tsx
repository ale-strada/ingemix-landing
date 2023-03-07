import { useRouter } from "next/router";
import { HeaderContainer, Nav, NavLinks, RedesContainer } from "./style";

export function Header(){
const router = useRouter()


    const handleClickScrollServicios = () => {
        const element = document.getElementById('servicios');
        if (element){
            element.scrollIntoView({ behavior: 'smooth' })
        }else{ router.push("/").then(()=>{
            const element = document.getElementById('servicios');
            element?.scrollIntoView({ behavior: 'smooth' })
        })}
    };
    const handleClickScrollContacto = () => {
        const element = document.getElementById('contacto');
        if (element){
            element.scrollIntoView({ behavior: 'smooth' }); 
        }else{ router.push("/").then(()=>{
            const element = document.getElementById('contacto');
            element?.scrollIntoView({ behavior: 'smooth' }); 
        })}
    };

    return <HeaderContainer>
        <img onClick={()=>{router.push("/")}} style={{width:"200px", height:"50px", cursor:"pointer"}} src="https://ingemix.com.ar/wp-content/uploads/2021/10/logohomh.jpg" alt="" />
        <Nav>
            <NavLinks onClick={()=>{router.push("/nosotros")}}>SOMOS</NavLinks>
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