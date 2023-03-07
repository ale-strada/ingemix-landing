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
            <div style={{width:"30px", height:"30px", background:"black", borderRadius:"30px"}}></div>
            <div style={{width:"30px", height:"30px", background:"black", borderRadius:"30px"}}></div>
        </RedesContainer>
    </HeaderContainer>
}