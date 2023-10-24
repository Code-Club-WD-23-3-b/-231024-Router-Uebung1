import { Outlet, Link } from 'react-router-dom';


export const Root = () => {
    return (
        <>
            {/*Navbar */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/über" >Über</Link>
                    </li>
                    <li>
                        <Link to="/über/team">teams</Link>
                    </li>
                    <li>
                        <Link to="/kontakt">kontakt</Link>
                    </li>
                    <li>
                        <Link to="/weiterleitung">weiterleitung</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
