import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import Notification from '../../../components/Notification';

import logo from '../../../../public/catch-logo.png';


class LoginLayout extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };
  render() {
    return (
      <div>
        <Navbar className="header">
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="brand" to="/"><img className="img-responsive" src={logo} alt="logo" /></Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="container login">
          <div className="row">
            <div className="col-sm-4 center-block">
              {this.props.children}
            </div>
          </div>
        </div>
        <Notification />
      </div>
    );
  }
}

export default LoginLayout;
