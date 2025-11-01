import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";
import { Helmet } from "react-helmet-async";

const MainLayout = () => {
    const title = import.meta.env.VITE_APP_TITLE;

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <MenuBar />
            <Outlet />
        </>
    )
};

export default MainLayout;