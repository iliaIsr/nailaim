import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link, Navigate, Outlet,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import { Croses} from "../components/pages/Croses";
import {Model} from "../components/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {Login} from "../components/pages/Login";


export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRACIS: '/prices',
    MODEL: '/:model/:id',
    PROTECTED:'/ProtectedPage',
    // MODEL: [
    //     {id:'/adidas/:id',model:'adidas'},
    //     {id:'/puma/:id',model:'puma'},
    //     {id:'/abibas/:id',model:'abibas'}
    // ],
    ERROR: '/error',
    LOGIN: '/login',
    HEADER: '/'
} as const;

const publicRotes=[
    {
        path: PATH.HEADER,
        element: <Adidas/>
    },
    {
        path: PATH.ADIDAS,
        element: <Adidas/>
    },
    {
        path: PATH.PUMA,
        element: <Puma/>
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>
    },
    {
        path: PATH.PRACIS,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>
    },
    {
        path:PATH.ERROR,
        element:
            <Error404 />
    },
    {
        path:PATH.LOGIN,
        element:
            <Login />
    }
]
const privateRotes= [
        {
            path:PATH.PROTECTED,
            element: <ProtectedPage />
        }
    ]
export const PrivateRotes = () => {

    const isAuth=false
    return isAuth ? <Outlet/> : <Navigate to="/login" />;

};
export const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>,
            errorElement: <Navigate to={PATH.ERROR}/>,
            children: [
                {
                    element: <PrivateRotes />,
                    children: privateRotes
                },
                ...publicRotes
            ]
        },

    ])
;


//--------------------------------------
// import * as React from "react";
// import {createRoot} from "react-dom/client";
// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link, Navigate,
// } from "react-router-dom";
// import App from "../App";
// import {Error404} from "../components/pages/Error404";
// import {Adidas} from "../components/pages/Adidas";
// import {Puma} from "../components/pages/Puma";
// import {Abibas} from "../components/pages/Abibas";
// import {Prices} from "../components/pages/Prices";
// import { Croses} from "../components/pages/Croses";
// import {Model} from "../components/Model";
// import {ProtectedPage} from "../components/pages/ProtectedPage";
// import {ProtectedRoute} from "./ProtectedRoute";
// import {Login} from "../components/pages/Login";
//
//
// export const PATH = {
//     ADIDAS: '/adidas',
//     PUMA: '/puma',
//     ABIBAS: '/abibas',
//     PRACIS: '/prices',
//     MODEL: '/:model/:id',
//     PROTECTED:'/ProtectedPage',
//     // MODEL: [
//     //     {id:'/adidas/:id',model:'adidas'},
//     //     {id:'/puma/:id',model:'puma'},
//     //     {id:'/abibas/:id',model:'abibas'}
//     // ],
//     ERROR: '/error',
//     LOGIN: '/login'
// } as const;
//
// export const router = createBrowserRouter([
//         {
//             path: "/",
//             element: <App/>,
//             errorElement: <Navigate to={PATH.ERROR}/>,
//             children: [
//                 {
//                     path: PATH.ADIDAS,
//                     element: <Adidas/>
//                 },
//                 {
//                     path: PATH.PUMA,
//                     element: <Puma/>
//                 },
//                 {
//                     path: PATH.ABIBAS,
//                     element: <Abibas/>
//                 },
//                 {
//                     path: PATH.PRACIS,
//                     element: <Prices/>,
//                 },
//                 {
//                     path: PATH.MODEL,
//                     element: <Model/>
//                 },
//                 {
//                     path:PATH.PROTECTED,
//                     element:
//                         <ProtectedRoute>
//                             <ProtectedPage />
//                         </ProtectedRoute>
//                 },
//                 {
//                     path:PATH.ERROR,
//                     element:
//                             <Error404 />
//                 },
//                 {
//                     path:PATH.LOGIN,
//                     element:
//                         <Login />
//                 }
//             ]
//         },
//
//     ])
// ;
//
