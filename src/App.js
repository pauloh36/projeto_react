import React, {useState} from "react";
import BuscaDados from "./Components/BuscaDados";

function App(){

  const [ticket , setTicket] = useState('')

  const buscaDados = () => {

    if (ticket === ''){

      alert('Preencha os dados')
    }

    
  }

  return(
    <div>
      <h1>Bem vindo</h1>
      <a>Ticket: </a>
      <input type="text" value= {ticket} placeholder="Insira o ticket da ação" onChange={(e) => setTicket(e.target.value)}></input>
      <button onClick={buscaDados}>Buscar</button>
      <BuscaDados/>
    </div>
  )
}

export default App