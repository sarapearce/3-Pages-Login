import React from 'react';
import { Field, Fields, reduxForm } from 'redux-form';
import {
  FormGroup,
  InputGroup,
  Button,
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
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </InputGroup>
);

const RecoverForm = (props) => {
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
        </FormGroup>
        <FormGroup>
          <Button
            disabled={pristine || submitting}
            bsStyle="default"
            type="submit"
          >
            Recover Password
          </Button>
        </FormGroup>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'RecoverForm', // a unique identifier for this form
})(RecoverForm);
