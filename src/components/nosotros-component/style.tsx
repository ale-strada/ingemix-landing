import styled from "styled-components"

export const Portada = styled.div`
width:95%;
height:250px;
background-image:url("./nosotros.png");
margin: 0 auto;
display: flex;
align-items: center;
padding: 55px;
`
export const Title = styled.h2`
font-family:"Roboto";
font-weight:500;
color:#FFF;
`
export const Historia = styled.div`
width:95%;
height:350px;
background-color: #ef842c;
margin: 10px auto;
padding:70px 100px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const TextoHistoria = styled.p`
font-family:"Roboto";
color:#FFF;
text-align: justify;
font-size: 20px;
`
export const ImgsWrap = styled.div`
width: 95%;
height: 300px;
margin: 10px auto;
display: flex;
align-items: center;
justify-content: space-between;
`
export const ImgContainerL = styled.div`
width:100%;
height:300px;
margin:10px 10px 10px 0;
`
export const ImgContainerR = styled(ImgContainerL)`
margin: 10px 0 10px 10px;
`
export const Container = styled.div`
max-width: 1000px;
margin: 0 auto;
`