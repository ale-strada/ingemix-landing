import { Header } from "@/components/header";
import { Contacto } from "../contacto";
import { Footer } from "../footer";
import { Referencias } from "../referencias";
import { Servicios } from "../servicios";
import { Trabajos } from "../trabajos";

export function HomePage(){
    return <div>
        <Header/>
        <div style={{display: "flex",  justifyContent: "center"}}>
            <img style={{width:"100%", height:"80%", margin:"0"}} src="/banner 1.png" alt="" />
        </div>
        <Servicios/>
        <Trabajos/>
        <Referencias/>
        <Contacto/>
        <Footer/>
    </div>
}