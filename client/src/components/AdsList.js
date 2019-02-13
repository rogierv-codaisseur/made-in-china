import React from 'react';
import { Link } from 'react-router-dom';
import './AdsList.css';

const AdsList = props => {
  return (
    <div>
      <h1>Made In China</h1>
      <table className='fl w-100 pa2 center'>
        <thead>
          <tr>
            <th className='fw6 bb b--black-20 tl pb3 pr3'>Title</th>
            <th className='fw6 bb b--black-20 tl pb3 pr3'>Price</th>
          </tr>
        </thead>
        <tbody className='lh-copy'>
          {props.ads.map(ad => (
            <tr key={ad.id}>
              <td className='pv3 pr3 bb b--black-20'>
                <Link to={`/ads/${ad.id}`}>{ad.title}</Link>
              </td>
              <td className='pv3 pr3 bb b--black-20'>{ad.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdsList;
