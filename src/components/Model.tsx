import React from "react";
import {adidasArr} from "./pages/Adidas";
import {useParams} from "react-router-dom";


export const Model=()=>{
    const params=useParams()
    console.log(params.id)


    return(
        <div style={{ textAlign:'center', justifyContent:"center"}}>
            <p>{adidasArr[Number(params.id)].model}</p>
            <p> {adidasArr[Number(params.id)].collection}</p>
            <p>  {adidasArr[Number(params.id)].price}</p>
            <p>  <img src={adidasArr[Number(params.id)].picture}/></p>

        </div>
    )
}