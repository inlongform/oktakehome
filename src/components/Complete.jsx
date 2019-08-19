import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from './common/Button';

import { resetForm } from '../redux/actions/mdActions';

class Complete extends Component {
  constructor(props) {
    super(props);
    this.restart = this.restart.bind(this);
  }

  restart() {
    const { dispatch } = this.props;

    dispatch(resetForm());
  }

  render() {
    const { templates, fieldAnswers } = this.props;

    const content = templates.map((val, i) => val.replace('$answer', fieldAnswers[i]));

    return (
      <div>
        <h3>Your essay text</h3>
        <textarea value={content.join(' ')} readOnly />
        <Button handler={this.restart} text="Start Over" />
      </div>
    );
  }
}

Complete.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fieldAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Complete);
