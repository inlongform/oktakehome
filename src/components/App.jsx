import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Questions from './Questions';
import Result from './Result';
import Complete from './Complete';

require('../scss/App.scss');

class App extends PureComponent {
  render() {
    const { showComplete } = this.props;

    return (
      <main className={showComplete ? 'complete' : ''}>
        <div className="inner">
          {!showComplete ? (
            <>
              <Questions />
              <Result />
            </>
          ) : (
            <Complete />
          )}
        </div>
      </main>
    );
  }
}

App.propTypes = {
  showComplete: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
