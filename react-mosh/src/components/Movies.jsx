import React, { Component } from 'react';
import {getMovies} from './fakeMovies';

class Movies extends Component {
  state = { 
    movies: getMovies()
  };

  handleDelete = (movie) => {
    const mov = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({movies:mov});
  }
  render() { 
    const { movies } = this.state; 

    if (movies.length === 0) return <p  className="text-2xl text-red-600 font-bold pl-2 mb-5 mt-10">There are no movies in the database.</p>;

    return (
      <div>
        <p className="text-2xl text-red-600 font-bold pl-2 mb-5 mt-10">Showing {movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr className='p-10px'>
              <th className="px-5 py-2 mx-5 text-start border-b-1">Title</th>
              <th className="px-5 py-2 mx-5 text-start border-b-1">Genre</th>
              <th className="px-5 py-2 mx-5 text-start border-b-1">Stock</th>
              <th className="px-5 py-2 mx-5 text-start border-b-1">Rate</th>
              <th className="px-5 py-2 mx-5 text-start border-b-1"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id} className='w-50px'>
                <td className="px-5 py-2 mx-5 text-start border-b-1">{movie.title}</td>
                <td className="px-5 py-2 mx-5 text-start border-b-1">{movie.genre.name}</td>
                <td className="px-5 py-2 mx-5 text-start border-b-1">{movie.numberInStock}</td>
                <td className="px-5 py-2 mx-5 text-start border-b-1">{movie.dailyRentalRate}</td>
                <td className="px-5 py-2 mx-5 text-start border-b-1">
                  <button onClick={() => this.handleDelete(movie)} className="w-30 h-8 bg-red-500 text-2xl text-white rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
  }
}

export default Movies;