import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Main from "@/pages/sample/Main";
import Reducer from "@/pages/sample/Reducer";
import Redux from "@/pages/sample/Redux";
import State from "@/pages/sample/State";

const CommonRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Main />} />
                <Route path="reducer" element={<Reducer />} />
                <Route path="redux" element={<Redux />} />
                <Route path="state" element={<State />} />
            </Route>
        </Routes>
    )
};

export default CommonRoute;