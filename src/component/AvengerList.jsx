import React from 'react';
import avengers from '../Data';
import { Link } from 'react-router-dom';

const AvengerList = () => {
  return (
    <div className='characters-list-wrapper'>
      {avengers.map(avenger => (
        <div className='character-card' key={avengers.id}>
          <img src={avenger.thumbnail} alt={avenger.name} />
          <h2>
            <Link to={`/avengers/${avenger.id}`}>{avenger.name}</Link>
          </h2>
          <p>({avenger.nickname})</p>
        </div>
      ))}
    </div>
  );
};

export default AvengerList;
