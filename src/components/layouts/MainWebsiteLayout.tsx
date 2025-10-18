import { Outlet } from "react-router"; 
import { Navbar } from "../interface/Navbar";
import { Footer } from "../interface/Footer";

export function MainWebsiteLayout(){
    return ( 
            <main className="min-h-screen flex flex-col bg-white">
                <Navbar/>
                <Outlet/>  
                <Footer/> 
            </main>
    )
}