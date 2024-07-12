import React from 'react';
const ActorList = ({ actors }) => 
{
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {actors.map((actor, index) => (
          <li key={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
};
export default ActorList;