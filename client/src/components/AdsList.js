import React from 'react';
import { Link } from 'react-router-dom';

const AdsList = props => {
  return (
    <div>
      <h1>Advertisements</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.ads.map(ad => (
            <tr key={ad.id}>
              <td>
                <Link to={`/ads/${ad.id}`}>{ad.title}</Link>
              </td>
              <td>{ad.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdsList;
