import { Construccion } from "@/components/construccion";
import { Ingenieria } from "@/components/ingenieria";
import { Layout } from "@/components/layout";
import { Mantenimiento } from "@/components/mantenimiento";
import { Montaje } from "@/components/montaje";

export default function Soluciones(){
    return <Layout>
        <Ingenieria/>
        <Construccion/>
        <Montaje/>
        <Mantenimiento/>
    </Layout>
}