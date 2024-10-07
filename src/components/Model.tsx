import React from "react";
import {adidasArr, AdidasItem} from "./pages/Adidas";

import {useParams} from "react-router-dom";
import {pumaArr, PumaItem} from "./pages/Puma";
import {abibasArr, AbibasItem} from "./pages/Abibas";

type CrossModels={
    [key:string]:(AdidasItem[]|PumaItem[]|AbibasItem[])
}

const crossModels:CrossModels={
    adidas:adidasArr,
    puma:pumaArr,
    abibas:abibasArr
}

// type ModelPropsType={
//     model:string
// }
//
// export const Model = (props:ModelPropsType) => {
//     const params = useParams()
//     const id=Number(params.id)
//     const model=props.model
//     let currentModel
//     switch (model){
//         case 'adidas':
//             currentModel=adidasArr.find(el=>el.id===id);
//             break;
//         case 'puma':
//             currentModel=pumaArr.find(el=>el.id===id);
//             break;
//         case 'abiba':
//             currentModel=abibasArr.find(el=>el.id===id)
//             break;
//         default:
//             return <p>модель не найдена</p>
//     }

export const Model = () => {
  const{model,id} = useParams()
    const currentModel=model?
        crossModels[model].find(el=>el.id===id):
        null

if(!currentModel){
    return <p style={{textAlign:'center'}}>модель не найдена</p>
}
    return (
        <div style={{textAlign: 'center', justifyContent: "center"}}>

            <h2>{currentModel?.model}</h2>
            <h4> {currentModel?.collection}</h4>
            <h3>  {currentModel?.price}</h3>
            <img
                src={currentModel?.picture}
                alt={currentModel?.model}
                style={{width: '600px', height: 'auto', marginRight: "10px"}}
            />
        </div>
    )
}