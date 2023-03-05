import styled from "styled-components"

const Container = styled.div`
    max-width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NroContainer = styled.div`
    width: 150px;
    height: 150px;
    background-color: #ef842c;
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Numero = styled.h3`
    font-family:'Roboto';
    font-size: 50px;
    color: #fff;
    font-weight: 400;
`
const Titulo = styled.h3`
    font-family: 'Roboto';
    font-size: 25px;
    color: #fff;
    font-weight: 600;
    margin-top: 30px;
`
const Texto = styled.p`
    font-family: 'Roboto';
    font-size: 24px;
    color: #fff;
    font-weight: 400;
    margin-top: 30px;
    max-width: 60%;
    text-align: center;
`
const TextoLink = styled(Texto)`
max-width:100%;
`
export function ServicioCard(props:any){


    return <Container>
        <NroContainer>
            <Numero>{props.numero}</Numero>
        </NroContainer>
        <Titulo>{props.titulo}</Titulo>
        <Texto>Más sobre el servicio</Texto>
        <a style={{textDecoration:"none"}} href={props.link}><TextoLink>Click Aquí</TextoLink></a>
    </Container>
}