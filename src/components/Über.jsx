import { Outlet } from "react-router-dom";

const Über = () => {
    return (
        <>
         <h2>Das ist unsere Über-Seite.</h2>
        <Outlet />
        </>

    )
}

export default Über;