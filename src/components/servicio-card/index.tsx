import { useRouter } from "next/router"
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
    font-size: 21px;
    color: #fff;
    font-weight: 600;
    margin-top: 30px;
`
const Texto = styled.p`
    font-family: 'Roboto';
    font-size: 20px;
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
    const router = useRouter()

    const handleClick = () => {
        const element = document.getElementById(props.id);
        router.push("/soluciones").then(()=>{
            const element = document.getElementById(props.id);
            element?.scrollIntoView({ behavior: 'smooth' })
        })
    };

    return <Container>
        <NroContainer>
            <Numero>{props.numero}</Numero>
        </NroContainer>
        <Titulo>{props.titulo}</Titulo>
        <Texto>Más sobre el servicio</Texto>
        <TextoLink style={{cursor:"pointer"}} onClick={handleClick} >Click Aquí</TextoLink>
    </Container>
}