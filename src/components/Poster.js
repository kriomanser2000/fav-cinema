import React from 'react';
const Poster = ({ src }) => 
{
  return (
    <div>
      <img src={src} alt="Movie Poster" style={{ width: '300px' }} />
    </div>
  );
};
export default Poster;