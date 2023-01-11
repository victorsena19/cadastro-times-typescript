import React, { useState } from 'react';
import './App.css';
import IColaborador from './compartilhado/interface/IColaborador';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const time = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },

    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FFF5D9'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoCadastrarColaboradorNovo = (colaborador:IColaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem = "../imagens/banner.jpg" textoOpcional = "Banner da página" />
      <Formulario time={time.map(time=> time.nome)} 
        aoCadastrarColaborador = {colaborador => aoCadastrarColaboradorNovo(colaborador)}/>
        {time.map(time=> <Time 
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(col=> col.time == time.nome)}/>)}
    </div>
  );
}

export default App;
