import React, { Component } from 'react';
import "./Main.css"
// form
import {FaPlus} from "react-icons/fa"
// ul
import {FaEdit, FaWindowClose} from "react-icons/fa"
export default class Main extends Component {
    state = {
      novaTarefa: '',
      tarefas: [
        'estudar', 'comer', 'ler'
      ]
    }

  HandleChange=(e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  render() {
     const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" className='form'>
          <input
          onChange={this.HandleChange}
          value={novaTarefa}
          type="text" />
          <button type="submit"> <FaPlus/></button>
        </form>


        <ul className='tarefas'>
          {tarefas.map(tarefa=>(
            <li key={tarefa}>{tarefa}
            <div>
               <FaEdit className="editEdit"/>
              <FaWindowClose className='editClose'/>
            </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
