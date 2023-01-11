import IColaborador from '../../compartilhado/interface/IColaborador.js';
import Colaborador from '../Colaborador';
import './index.css';

interface TimeProps{
    nome:string
    corPrimaria:string
    corSecundaria:string
    colaboradores: IColaborador[]
}

const Time = ( {nome, corPrimaria, corSecundaria, colaboradores}: TimeProps) => {

    //É a mesma coisa de fazer igual foi feito no h3 e na div

    //Da para fazer com o operador ternario também ?true :false
    return(
       (colaboradores.length > 0) ? <section className="time" style={{backgroundColor: corSecundaria}}>
            <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
            <div className="card">
                {colaboradores.map(col=> <Colaborador corDeFundo={corPrimaria}
                key={col.nome}
                nome={col.nome}
                cargo={col.cargo} 
                imagem={col.imagem}/>)}
            </div>
        </section>
        : <></>
        //:false ficaria nessa linha 
    )
}

export default Time;