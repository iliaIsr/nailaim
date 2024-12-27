// @flow
import * as React from 'react';
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Error404} from "../components/pages/Error404";
import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
    children:ReactNode;
};
export const ProtectedRoute = (props: Props) => {

    const logged=false
    return logged ? (
        <>{props.children}</>
    ) : (
        <Navigate to="/login" />
    );

};