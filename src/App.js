import React from 'react';
import MovieInfo from './components/MovieInfo';
import ActorList from './components/ActorList';
import Poster from './components/Poster';
const App = () => 
{
  const movie = 
  {
    title: 'Birdman',
    director: 'Alejandro González Iñárritu',
    releaseYear: 2014,
    studio: 'Fox Searchlight Pictures',
    actors: 
    [
      'Michael Keaton',
      'Zach Galifianakis',
      'Edward Norton',
      'Andrea Riseborough',
      'Amy Ryan',
      'Emma Stone',
      'Naomi Watts'
    ],
    posterSrc: '/poster.jpg'
  };
  return (
    <div>
      <MovieInfo 
        title={movie.title}
        director={movie.director}
        releaseYear={movie.releaseYear}
        studio={movie.studio}
      />
      <ActorList actors={movie.actors} />
      <Poster src={movie.posterSrc} />
    </div>
  );
};
export default App;