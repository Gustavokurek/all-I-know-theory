import React, { Component } from 'react';
import './Main.css';
import Form from './form';
import Tarefas from './tarefas';

// ul

export default class Main extends Component {
    state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,
    }

    componentDidMount() {
      const tarefas = JSON.parse(localStorage.getItem('tarefas'));
      if (!tarefas) return;
      this.setState({
        tarefas,
      });
    }

    componentDidUpdate(prevProps, prevState) {
      const { tarefas } = this.state;

      if (tarefas === prevState.tarefas) return;

      localStorage.setItem('tarefas', JSON.stringify(tarefas));
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

          <Form
            HandleChange={this.HandleChange}
            HandleSubmit={this.HandleSubmit}
            novaTarefa={novaTarefa}
          />

          <Tarefas
            tarefas={tarefas}
            HandleClickDelete={this.HandleClickDelete}
            HandleClickEdit={this.HandleClickEdit}
          />
        </div>
      );
    }
}
