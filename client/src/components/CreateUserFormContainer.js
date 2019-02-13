import React from 'react';
import CreateUserForm from './CreateUserForm';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

class CreateUserFormContainer extends React.Component {
  state = { emailAddress: '', password: '' };

  onSubmit = event => {
    event.preventDefault();
    this.props.register(this.state.emailAddress, this.state.password);
    this.props.history.push('/');
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <CreateUserForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { register }
)(CreateUserFormContainer);
