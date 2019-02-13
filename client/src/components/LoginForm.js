import React from 'react';

const LoginForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className='mt3'>
          <label htmlFor='email' className='db fw6 lh-copy f6'>
            Email Address
          </label>
          <input
            type='email'
            id='emailAddress'
            name='emailAddress'
            value={props.values.emailAddress}
            onChange={props.onChange}
            className='pa2 input-reset ba bg-transparent w-50'
          />
        </div>
        <div className='mt3'>
          <label htmlFor='password' className='db fw6 lh-copy f6'>
            Password
          </label>
        </div>
        <input
          type='password'
          id='password'
          name='password'
          value={props.values.password}
          onChange={props.onChange}
          className='pa2 input-reset ba bg-transparent w-50'
        />
        <div>
          <input
            className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
            type='submit'
            value='Login'
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
