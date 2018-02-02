import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import {
  FormGroup,
  InputGroup,
  Button,
  ButtonToolbar,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';
import { required } from '../../../forms';

export const renderBootstrapField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <InputGroup>
    { label && (<ControlLabel>{label}</ControlLabel>)}
    <FormControl
      {...input}
      type={type}
    />
    {touched &&
      ((error && <p className="alert alert-danger">{error}</p>) ||
        (warning && <p className="alert alert-warning">{warning}</p>))}
  </InputGroup>
);

const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Field
            name="email"
            type="text"
            component={renderBootstrapField}
            placeholder="email"
            validate={[required]}
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={renderBootstrapField}
            label=""
            validate={[required]}
          />
        </FormGroup>
        <FormGroup>
          <Button
            disabled={pristine || submitting}
            bsStyle="default"
            type="submit"
          >
           Login
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'LoginForm', // a unique identifier for this form
})(LoginForm);
