/* eslint-disable no-unused-vars */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setComplete } from '../redux/actions/mdActions';
import Button from './common/Button';

const regex = new RegExp(/[.,/#!$%^&*;:{}=\-_`~()]/g);

class Result extends Component {
  constructor(props) {
    super(props);
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    const { dispatch } = this.props;
    dispatch(setComplete());
  }

  checkAnswerLength() {
    const { fieldAnswers, fieldOrder } = this.props;
    // filter indexes with no value
    const total = fieldAnswers.filter((i) => {
      if (i !== '' || i !== undefined) {
        return i;
      }
      return false;
    });
    return total.length === fieldOrder.length;
  }

  render() {
    const { templates, fieldAnswers } = this.props;
    const showButton = this.checkAnswerLength();

    return (
      <div className="result">
        <h3>Your essay text</h3>
        <p>
          {templates.length > 0
            && templates.map((val, i) => {
              if (!val) return null;

              // IF YOU DONT WANT TO USE dangerouslySetInnerHTML//////////////

              // const splitContent = val.split(' ');

              // return splitContent.map((word) => {
              //   const punctuation = word.substr(word.length - 1, 1);
              //   const isPunctuation = regex.test(punctuation);
              //   if (word.indexOf('$answer') !== -1) {
              //     return (
              //       <Fragment key={word}>
              //         <strong>{fieldAnswers[i]}</strong>
              //         {isPunctuation ? (
              //           <>{punctuation}</>
              //         ) : null}
              //         &nbsp;
              //       </Fragment>
              //     );
              //   }
              //   return (
              //     <Fragment key={word}>
              //       {word}
              //       &nbsp;
              //     </Fragment>
              //   );
              // });

              // end/////////////////////////////////

              // USING dangerouslySetInnerHTML
              const answer = fieldAnswers[i];
              const content = `${val.replace('$answer', `<strong>${answer}</strong>`)} `;
              return (
                <span
                  key={i}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              );
            })}
        </p>
        {showButton ? (
          <Button handler={this.onComplete} text="Edit" />
        ) : null}
      </div>
    );
  }
}

Result.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fieldAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  fieldOrder: PropTypes.arrayOf(PropTypes.string).isRequired,
  templates: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Result);
