import { BrowserRouter } from "react-router";
import { MainWebsiteRoutes } from "./MainWebsiteRoutes";

export function IndexRoutes(){  

    return (
        <BrowserRouter> 
            <MainWebsiteRoutes/>
        </BrowserRouter>
    )
}