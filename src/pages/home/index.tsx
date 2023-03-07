import { Layout } from "@/components/layout";
import { Contacto } from "../../components/contacto";
import { Referencias } from "../../components/referencias";
import { Servicios } from "../../components/servicios";
import { Trabajos } from "../../components/trabajos";

export default function HomePage(){
    return <Layout>
            <div style={{display: "flex",  justifyContent: "center"}}>
                <img style={{width:"100%", height:"80%", margin:"0"}} src="/banner 1.png" alt="" />
            </div>
            <Servicios/>
            <Trabajos/>
            <Referencias/>
            <Contacto/>
        </Layout>
}