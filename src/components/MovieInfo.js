import React from 'react';
const MovieInfo = ({ title, director, releaseYear, studio }) => 
{
  return (
    <div>
      <h1>{title}</h1>
      <p><strong>Режисер: </strong> {director}</p>
      <p><strong>Рік випуску: </strong> {releaseYear}</p>
      <p><strong>Студія: </strong> {studio}</p>
    </div>
  );
};
export default MovieInfo;