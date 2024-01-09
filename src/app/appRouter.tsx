import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";

const LazyHomePage = lazy(() => import('@/pages/home'))
const LazyUniSatPage = lazy(() => import('@/pages/uniSat'))
const LazyMetamaskPage = lazy(() => import('@/pages/metamask'))


export const appRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <LazyHomePage />,
        },
        {
            path: '/unisat',
            element: <LazyUniSatPage />
        },
        {
            path: '/metamask',
            element: <LazyMetamaskPage />
        },
    ])
