import { Header } from "@/components/header";
import { Servicios } from "../servicios";
import { Trabajos } from "../trabajos";

export function HomePage(){
    return <div>
        <Header/>
        <div style={{display: "flex",  justifyContent: "center"}}>
            <img style={{width:"90%", height:"80%", margin:"20px"}} src="/banner 1.png" alt="" />
        </div>
        <Servicios/>
        <Trabajos/>
        
    </div>
}