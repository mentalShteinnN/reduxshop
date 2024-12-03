import Header from "components/Header";
import { Outlet } from "react-router-dom";
import Contact from "components/Contact";

const Index = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Contact />
        </>
    );
};

export default Index;
