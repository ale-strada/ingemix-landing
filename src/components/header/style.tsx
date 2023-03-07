import styled from "styled-components";

export const HeaderContainer = styled.div`
width:100%;
height:90px;
display: flex;
align-items: center;
justify-content: space-evenly;
padding:20px;
`

export const Nav = styled.div`
width:40%;
height:30px;
display:flex;
align-items: center;
justify-content: space-evenly;
`
export const NavLinks = styled.p`
cursor: pointer;
font-family: "Roboto";
color:grey;
font-size:24px;
:hover{
    color:#000;
}
`
export const RedesContainer = styled.div`
width:20%;
height:30px;
display:flex;
align-items: center;
justify-content: center;
`