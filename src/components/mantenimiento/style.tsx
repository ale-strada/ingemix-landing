import styled from "styled-components";

export const MantenimientoContainer = styled.div`
display: grid;
grid-template-columns: 0.8fr 1.2fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
width:80%;
margin: 20px auto;
gap:20px;
`
export const Banner = styled.div`
grid-area: 1 / 1 / 2 / 3;
` 

export const ImgMantenimientoWrap = styled.div`
grid-area: 2 / 1 / 3 / 3;
`
export const CaracteristicasContainer = styled.div`
grid-area: 3 / 1 / 5 / 2;
background-color: #F58634;
height:100%;
width:100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(6, 1fr);
gap:30px;
padding:30px;   
align-items: center;
justify-items: center;
`
export const Icons = styled.img`
    width: 100px;
    height: 90px;
    margin: 0 auto;
`
export const CaracteristicasItem = styled.p`
font-family: 'Roboto';
font-size: 20px;
margin: 10px 10px 10px 20px;
color:${props=>props.color};
`
export const PaqueteDeHorasContainer = styled.div`
grid-area: 3 / 2 / 4 / 3;
display: grid;
grid-template-columns: 0.5fr 1.5fr;
grid-template-rows: repeat(3, 1fr);
/* height: 200px; */
gap: 10px;
align-items: center;
`
export const PaqueteDeHorasTitle = styled.div`
grid-area: 1 / 1 / 2 / 3;
background-color:#F58634;
display: flex;
align-items: center;
justify-content: center;
height:80px;
margin-bottom:30px;
align-self: start;
` 
export const PaqueteDeHorasPersonalIcon = styled.div`
grid-area: 2 / 1 / 3 / 2;
display: flex;
align-items: center;
`
export const PaqueteDeHorasServicioIcon = styled.div`
grid-area: 3 / 1 / 4 / 2;
display: flex;
align-items: center;
`
export const PaqueteDeHorasPersonalText = styled.div`
grid-area: 2 / 2 / 3 / 3;
`
export const PaqueteDeHorasServicioText = styled.div`
grid-area: 3 / 2 / 4 / 3;
`
export const TiposContainer = styled.div`
grid-area: 4 / 2 / 5 / 3;
background-color:#2E2E38;
width:100%;
height:100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 40px;
height: 300px;
`

export const TiposTitleContainer = styled.div`
grid-area: 1 / 1 / 2 / 3;
width: 100%;
height: 70px;
display: flex;
align-items: center;
`