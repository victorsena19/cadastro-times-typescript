import React, { ReactElement } from "react";
import './index.css';

interface BotaoProps{
    children:ReactElement | string
}

function Botao(props:BotaoProps){
    return(
        <button className="botao">{props.children}</button>
    );
}

export default Botao;