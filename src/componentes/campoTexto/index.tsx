import React from 'react';
import './index.css';

interface CampoTextoProps{
    alterado: (value: string) => void
    placeholder: string
    label: string
    value: string
    obrigatorio?: boolean
}

function CampoTexto( {alterado, label, placeholder, value, obrigatorio = false} : CampoTextoProps){
    //Pode ser assim ou somente placeholder = props.placeholder
    const placeholderModificada = `${placeholder}`;
    
    const digitado = (evento:React.ChangeEvent<HTMLInputElement>) => {
        alterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>
                {label}
            </label><br/>
            <input value={value} 
                onChange={digitado} required={obrigatorio} 
                placeholder={placeholderModificada}/>
        </div>
    );
}
export default CampoTexto;