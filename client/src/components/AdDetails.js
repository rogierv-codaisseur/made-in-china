import React from 'react';
import { Link } from 'react-router-dom';

const AdDetails = props => {
  return (
    <div>
      <h1>{props.ad.title}</h1>
      <p>Description: {props.ad.description}</p>
      <p>Price: {props.ad.price}</p>
      <p>Email address: {props.ad.emailAddress}</p>
      <p>Phone Number: {props.ad.phoneNumber}</p>
      <img width='200px' src={props.ad.pictureUrl} alt='' />
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default AdDetails;
