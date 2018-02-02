import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import classNames from 'classnames';
import { Link } from 'react-router';

import * as actionCreators from '../../../actions/auth';
import RecoverForm from './RecoverForm';

class RecoverLogin extends React.Component {

  static propTypes = {
    statusText: React.PropTypes.string,
    actions: React.PropTypes.shape({
      authRecoverLogin: React.PropTypes.func.isRequired,
    }).isRequired,
    location: React.PropTypes.shape({
      query: React.PropTypes.object.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    if (values) {
      this.props.actions.authRecoverLogin(values.email);
    }
  }

  render() {

    let statusText = null;
    if (this.props.statusText) {
      const statusTextClassNames = classNames({
        alert: true,
        'alert-danger': this.props.statusText.indexOf('Error') === 0,
        'alert-success': this.props.statusText.indexOf('Error') !== 0,
      });

      statusText = (
        <div className="row">
          <div className="col-sm-12">
            <div className={statusTextClassNames}>
              {this.props.statusText}
            </div>
          </div>
        </div>
            );
    }
    return (
      <div>
        <h3 className="text-center">Recover Login</h3>
        <div className="login-container margin-top-medium">
          {statusText}
          <RecoverForm onSubmit={this.handleSubmit} />
        </div>
        <p className="center-text primary">
          <em>
            <Link to="/login">Sign in?</Link>
          </em>
        </p>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  statusText: state.auth.statusText,
});
const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators(actionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(RecoverLogin)
