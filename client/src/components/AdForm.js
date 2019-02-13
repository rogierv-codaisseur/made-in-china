import React from 'react';

const AdForm = props => {
  return (
    <div>
      <h1>Add Advertisement</h1>
      <h2>添加广告</h2>
      <form onSubmit={props.onSubmit}>
        <div className='mt3'>
          <label htmlFor='title' className='db fw6 lh-copy f6'>
            Title:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            value={props.values.title}
            onChange={props.onChange}
            className='pa2 input-reset ba bg-transparent w-50'
          />
        </div>
        <div className='mt3'>
          <label htmlFor='price' className='db fw6 lh-copy f6'>
            Price:
          </label>
          <input
            type='number'
            id='price'
            name='price'
            value={props.values.price}
            onChange={props.onChange}
            className='pa2 input-reset ba bg-transparent w-50'
          />
        </div>
        <div className='mt3'>
          <label htmlFor='email' className='db fw6 lh-copy f6'>
            E-mail:
          </label>
          <input
            type='text'
            id='emailAddress'
            name='emailAddress'
            value={props.values.emailAddress}
            onChange={props.onChange}
            className='pa2 input-reset ba bg-transparent w-50'
          />
        </div>
        <input
          className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
          type='submit'
          value='Save'
        />
      </form>
    </div>
  );
};

export default AdForm;
