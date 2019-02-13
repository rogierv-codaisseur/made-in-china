import React from 'react';

const LoginForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor='email'>
        Email Address:
        <input
          type='email'
          id='emailAddress'
          name='emailAddress'
          value={props.values.emailAddress}
          onChange={props.onChange}
        />
      </label>
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          id='password'
          name='password'
          value={props.values.password}
          onChange={props.onChange}
        />
      </label>
      <input type='submit' value='Login' />
    </form>
  );
};

export default LoginForm;
