import { Routes, Route } from "react-router";
import { MainWebsiteLayout } from "../components/layouts/MainWebsiteLayout";
import { LandingPage } from "../pages/LandingPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import DashboardPage from "../pages/DashboardPage";


export function MainWebsiteRoutes(){
    return (
        <Routes>
            <Route path="/" element={<MainWebsiteLayout/>}>
                <Route index element={<LandingPage/>} />  
                <Route path="/dashboard" element={<DashboardPage/>} />  
                <Route path="*" element={<NotFoundPage/>}></Route>
            </Route>
        </Routes>
    )
}