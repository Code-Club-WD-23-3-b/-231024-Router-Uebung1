import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../components/Root';
import Startseite from '../components/Startseite';
import Über from '../components/Über';
import Team from '../components/Team';
import Kontakt from '../components/Kontakt';
import ErrorPage from '../components/ErrorPage';
import Weiterleitung from '../components/Weiterleitung';
export const router = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Startseite />
            },
            {
                path: '/Kontakt/',
                element: <Kontakt />
            },
            {
                path: '/weiterleitung',
                element: <Weiterleitung />
            },
            {
                path: '/Über',
                element: <Über />,
                children: [
                    {
                        path: '/Über/team',
                        element: <Team />
                    }
                ]
            },

        ]
    }
])