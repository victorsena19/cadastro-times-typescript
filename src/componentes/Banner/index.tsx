import React from "react";
import { ReactElement } from "react";
import './index.css';

interface BannerProps{
    enderecoImagem:string,
    textoOpcional?:string

    
}

function Banner({enderecoImagem, textoOpcional}: BannerProps){
    return(
        <header>
            <img src={enderecoImagem} alt={textoOpcional}/>
        </header>
    );
}
export default Banner;