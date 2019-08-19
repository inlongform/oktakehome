import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { handler, text } = props;
  return <button onClick={handler} type="button">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Button;
