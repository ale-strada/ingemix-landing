import styled from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";

const Container = styled.div`
min-height: 100vh;
max-width: var(--max-width);
margin: 0 auto;
padding: 0 10px;
`;

export function Layout({ children }: any) {
return (
<div>
    <Header />
    <Container>
        {children}
    </Container>
    <Footer />
</div>
);
}
