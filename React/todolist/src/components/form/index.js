import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

export default function Form({ HandleSubmit, HandleChange, novaTarefa }) {
  return (
    <form onSubmit={HandleSubmit} action="#" className="form">
      <input
        onChange={HandleChange}
        value={novaTarefa}
        type="text"
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  HandleChange: PropTypes.func.isRequired,
  HandleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
