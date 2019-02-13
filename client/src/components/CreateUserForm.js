import React from 'react';

const CreateUserForm = props => {
  return (
    <div>
      <h1>Register</h1>
      <h2>寄存器</h2>
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
          <input
            type='password'
            id='password'
            name='password'
            value={props.values.password}
            onChange={props.onChange}
            className='pa2 input-reset ba bg-transparent w-50'
          />
        </div>
        <input
          className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
          type='submit'
          value='Register'
        />
      </form>{' '}
    </div>
  );
};

export default CreateUserForm;
