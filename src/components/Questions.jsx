import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { submitField } from '../redux/actions/mdActions';

import getTemplate from '../utils/getTemplate';

import FormElement from './common/FormElement';
import { COPY } from '../data/constants';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.fieldUpdated = this.fieldUpdated.bind(this);
  }

  fieldUpdated(e) {
    const { id, value } = e.target;
    const {
      fieldOrder, fieldAnswers, templates, dispatch,
    } = this.props;

    // find which position in the array  we are setting
    const position = fieldOrder.indexOf(id);
    const sentence = getTemplate(id);

    // keep the templates and answers in the specified order
    // dont update the template if it is already set
    if (!templates[position]) {
      templates[position] = sentence;
    }

    fieldAnswers[position] = value;
    // update the reducer
    dispatch(submitField(templates, fieldAnswers));
  }

  render() {
    return (
      <div className="questions">
        <h3>About Me</h3>
        {Object.keys(COPY).map((i) => (
          <FormElement
            lbl={i}
            lblText={COPY[i]}
            key={i}
            onUpdate={this.fieldUpdated}
          />
        ))}
      </div>
    );
  }
}

Questions.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fieldAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Questions);
