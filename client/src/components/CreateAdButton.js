import React from 'react';
import { Link } from 'react-router-dom';

const CreateAdButton = props => {
  return (
    <Link
      to='/create'
      className='ff6 link dim br-pill ba ph3 pv2 mb2 dib black" href="#0"'>
      Create
    </Link>
  );
};

export default CreateAdButton;
