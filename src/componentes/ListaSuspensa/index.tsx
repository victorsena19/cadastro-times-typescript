import './index.css';

interface ListaSuspensaProps{
    selecionado:(value:string) => void
    obrigatorio:boolean
    label:string
    value:string
    itens:string[]
}

function ListaSuspensa({selecionado, obrigatorio, label, value, itens}:ListaSuspensaProps){
    return(
        <div className='lista-suspensa'>
            <label>
                {label}
            </label>
            <select onChange={evento => selecionado(evento.target.value)} 
                required={obrigatorio} value={value}>
                    <option value={""}></option>
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa;