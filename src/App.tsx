import React from 'react';
import {Navigate, NavLink, Route, Routes, Outlet, useNavigate, Link} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import {Model} from "./components/Model";
import {NoFind} from "./components/pages/NoFind";
import {Prices} from "./components/pages/Prices";



export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    PAGE4: '/prices',
    PAGE5: '/ProtectedPage',
    // MODEL: [
    //     {id:'/adidas/:id',model:'adidas'},
    //     {id:'/puma/:id',model:'puma'},
    //     {id:'/abibas/:id',model:'abibas'}
    // ],
    ERROR: '*',
} as const;

function App() {
    const navigate=useNavigate()

    const navigateHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE4}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE5}>Protected Page</NavLink></S.NavWrapper>
                    {/*<S.NavWrapper><NavLink to={'/login'}>Login</NavLink></S.NavWrapper>*/}
                    <a href="page3">page3 HTML</a>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <NavLink className={styles.LinkLikeButton} to={PATH.PAGE1}>Home</NavLink>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink}>Back</button>
                    </div>
                    <Outlet/>

                    {/*<Routes>*/}
                    {/*    <Route path={'/'} element={<Navigate to={'/page1'}/>}/>*/}

                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PAGE4} element={<Prices/>}/>*/}
                    {/*    <Route path={PATH.ERROR} element={<Error404/>}/>*/}

                        {/*{PATH.MODEL.map((path, index) => (*/}
                        {/*    <Route key={index} path={path.id} element={<Model model={path.model}/>} />*/}
                        {/*))}*/}
                    {/*    <Route path={'/:model/:id'} element={<Model/>}/>*/}
                    {/*</Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;

