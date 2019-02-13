import React from 'react';

const AdForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <label htmlFor='title'>
          Title:
          <input
            type='text'
            id='title'
            name='title'
            value={props.values.title}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='price'>
          Price:
          <input
            type='number'
            id='price'
            name='price'
            value={props.values.price}
            onChange={props.onChange}
          />
        </label>
        <label htmlFor='email'>
          E-mail:
          <input
            type='text'
            id='emailAddress'
            name='emailAddress'
            value={props.values.emailAddress}
            onChange={props.onChange}
          />
        </label>
        <input type='submit' value='Save' />
      </form>
    </div>
  );
};

export default AdForm;
