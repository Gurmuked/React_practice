import React, { Component } from 'react';
import {getMovies} from './fakeMovies';

class Movies extends Component {
  state = { 
    movies: getMovies()
     // Initialize movies from fakeMovies.js
  };
  render() { 
    const { movies } = this.state; // Destructure movies from state
    console.log(this.state.movies);

    if (movies.length === 0) return <p  className="text-2xl text-red-600 font-bold pl-2 mb-5 mt-10">There are no movies in the database.</p>;

    return (
      <div>
        <p className="text-2xl text-red-600 font-bold pl-2 mb-5 mt-10">Showing {movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr className='p-10px'>
              <th className="px-5 py-2 mx-5 text-start">Title</th>
              <th className="px-5 py-2 mx-5 text-start">Genre</th>
              <th className="px-5 py-2 mx-5 text-start">Stock</th>
              <th className="px-5 py-2 mx-5 text-start">Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id} className='w-50px'>
                <td className="px-5 py-2 mx-5 text-start">{movie.title}</td>
                <td className="px-5 py-2 mx-5 text-start">{movie.genre.name}</td>
                <td className="px-5 py-2 mx-5 text-start">{movie.numberInStock}</td>
                <td className="px-5 py-2 mx-5 text-start">{movie.dailyRentalRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
  }
}

export default Movies;