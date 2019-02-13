import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const CreateAdButton = props => {
  return (
    <Link to='/create'>
      <Button variant='contained' color='primary'>
        Create
      </Button>
    </Link>
  );
};

export default CreateAdButton;
