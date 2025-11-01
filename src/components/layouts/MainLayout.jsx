import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

const MainLayout = () => {
    const title = import.meta.env.VITE_APP_TITLE;

    return (
        <>
            {/* React 19 부터는 react-helmet-async 불필요 */}
            <meta property="og:title" content={title} />
            
            <MenuBar />
            <Outlet />
        </>
    )
};

export default MainLayout;