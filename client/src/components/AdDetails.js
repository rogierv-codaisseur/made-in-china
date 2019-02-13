import React from 'react';
import { Link } from 'react-router-dom';

const AdDetails = props => {
  return (
    <div>
      <h1>{props.ad.title}</h1>
      <p>{props.ad.description}</p>
      <p>{props.ad.price}</p>
      <p>{props.ad.emailAddress}</p>
      <p>{props.ad.phoneNumber}</p>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default AdDetails;
