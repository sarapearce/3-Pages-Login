import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

import LoginLayout from './LoginLayout';
import LoginForm from './LoginForm';
import RecoverLogin from './RecoverLogin';


import * as actionCreators from '../../../actions/auth';

class LoginView extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    isAuthenticated: React.PropTypes.bool.isRequired,
    isAuthenticating: React.PropTypes.bool.isRequired,
    statusText: React.PropTypes.string,
    actions: React.PropTypes.shape({
      authLoginUser: React.PropTypes.func.isRequired,
    }).isRequired,
    location: React.PropTypes.shape({
      query: React.PropTypes.object.isRequired,
    }),
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    const redirectRoute = this.props.location ? this.props.location.query.next || '/' : '/';
    this.state = {
      redirectTo: redirectRoute,
    };
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.props.dispatch(push('/'));
    }
  }
  handleSubmit(values) {
    if (values) {
      this.props.actions.authLoginUser(values.email, values.password, this.state.redirectTo);
    }
  }
  renderRecover() {
    return (
      <LoginLayout>
        <RecoverLogin />
      </LoginLayout>
    );
  }
  render() {
    if (this.props.detail === 'recover') {
      return this.renderRecover();
    }
    let statusText = null;
    if (this.props.statusText) {
      const statusTextClassNames = classNames({
        alert: true,
        'alert-danger': this.props.statusText.indexOf('Authentication Error') === 0,
        'alert-success': this.props.statusText.indexOf('Authentication Error') !== 0,
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
      <LoginLayout>
        <h3 className="text-center">Login</h3>
        <div className="login-container margin-top-medium">
          {statusText}
          <LoginForm onSubmit={this.handleSubmit} />
        </div>
        <p className="center-text primary">
          <em>
            <Link to="/login/recover/">Forgot your password?</Link>
          </em>
        </p>
      </LoginLayout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isAuthenticated: state.auth.isAuthenticated,
  isAuthenticating: state.auth.isAuthenticating,
  statusText: state.auth.statusText,
  detail: ownProps.params.key,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
export { LoginView as LoginViewNotConnected };
