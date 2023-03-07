import styled from "styled-components";
import { Text400, Text400P } from "../footer/style";

export const ContactoContainer = styled.div`
width:100%;
height:600px;
background-image:url("/fondo-contacto.png");
margin:0 auto;
padding: 75px;
display: flex;
justify-content: space-around;
align-items: center;

`
export const Text400Negro = styled(Text400)`
color: #000;
font-size:18px;
font-weight:600;
`
export const Text400PNegro = styled(Text400P)`
color: #000;
font-size:18px;
`