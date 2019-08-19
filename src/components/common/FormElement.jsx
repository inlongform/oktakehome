import React from 'react';
import PropTypes from 'prop-types';

const FormElement = (props) => {
  const { lbl, lblText, onUpdate } = props;

  return (
    <div className="form-element">
      <label htmlFor={lbl}>{lblText}</label>
      <textarea name={lbl} id={lbl} onBlur={onUpdate} />
    </div>
  );
};

FormElement.propTypes = {
  lbl: PropTypes.string.isRequired,
  lblText: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default FormElement;
