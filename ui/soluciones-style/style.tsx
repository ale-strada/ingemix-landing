import styled from "styled-components";

export const SolucionContainer = styled.div`
width:80%;
margin: 20px auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
gap:20px;
` 
export const SolucionTitleConteiner = styled.div`
grid-area: 1 / 1 / 2 / 3;
height: 100px;
background-color:${props => props.color};
display: flex;
align-items: center;
justify-content: center;
`
export const SolucionesTitleText = styled.h2`
font-family: 'Roboto';
color: #FFF;
font-size: 30px;
margin-bottom: 0px;
`
export const SolucionLeft = styled.div`
grid-area: 2 / 1 / 3 / 2; 
background-color:${props=>props.color};
display: flex;
flex-direction: column;
justify-content: center;
`
export const SolucionRigth = styled.div`
grid-area: 2 / 2 / 3 / 3; 
background-color:${props=>props.color};
display: flex;
flex-direction: column;
justify-content: center;
`
export const SubpageImg = styled.img`
width:100%;
height:100%;
max-height:270px;
object-fit: cover;
`
export const SolucionesItem = styled.li`
font-family: 'Roboto';
font-size: 15px;
margin: 10px 10px 10px 20px;
color:${props=>props.color}
`
