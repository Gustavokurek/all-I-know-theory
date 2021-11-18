import React, { Component } from 'react';
import './Main.css';
// form
import { FaPlus } from 'react-icons/fa';
// ul
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
    state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,
    }

    HandleSubmit=(e) => {
      e.preventDefault();
      const { tarefas } = this.state;
      let { novaTarefa } = this.state;
      novaTarefa = novaTarefa.trim();
      if (tarefas.indexOf(novaTarefa) !== -1 || novaTarefa === '') return;

      const NovasTarefas = [...tarefas];
      const { index } = this.state;

      if (index === -1) {
        this.setState({
          tarefas: [...NovasTarefas, novaTarefa],
          novaTarefa: '',
          index: -1,
        });
      }
      if (index !== -1) {
        NovasTarefas[index] = novaTarefa;
        this.setState({
          tarefas: [...NovasTarefas],
          index: -1,
          novaTarefa: '',
        });
      }
    }

    HandleClickDelete=(e, index) => {
      const { tarefas } = this.state;
      const novasTarefas = [...tarefas];

      novasTarefas.splice(index, 1);
      this.setState({
        tarefas: [...novasTarefas],
      });
    }

    HandleClickEdit=(e, index) => {
      const { tarefas } = this.state;
      this.setState({
        index,
        novaTarefa: tarefas[index],
      });
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

          <form onSubmit={this.HandleSubmit} action="#" className="form">
            <input
              onChange={this.HandleChange}
              value={novaTarefa}
              type="text"
            />
            <button type="submit">
              <FaPlus />
            </button>
          </form>

          <ul className="tarefas">
            {tarefas.map((tarefa, index) => (
              <li key={tarefa}>
                {tarefa}
                <span>
                  <FaEdit
                    onClick={(e) => { this.HandleClickEdit(e, index); }}
                    className="editEdit"
                  />
                  <FaWindowClose
                    className="editClose"
                    onClick={(e) => { this.HandleClickDelete(e, index); }}

                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
}
