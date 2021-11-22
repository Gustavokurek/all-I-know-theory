import React from 'react';
import './tarefas.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';

export default function Tarefas({ tarefas, HandleClickDelete, HandleClickEdit }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              onClick={(e) => { HandleClickEdit(e, index); }}
              className="editEdit"
            />
            <FaWindowClose
              className="editClose"
              onClick={(e) => { HandleClickDelete(e, index); }}
            />
          </span>
        </li>
      ))}
    </ul>

  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  HandleClickDelete: PropTypes.func.isRequired,
  HandleClickEdit: PropTypes.func.isRequired,
};
