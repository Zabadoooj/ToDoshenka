import { Outlet } from "react-router-dom";
import SidePanel from "./Components/SidePanel";

function MainLayout() {
    return(
        <main style={{display: 'flex'}}>
            <SidePanel />

            <div>
                <Outlet />
            </div>
        </main>
    )
}

export default MainLayout