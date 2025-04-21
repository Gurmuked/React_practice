import React, { Component } from 'react';
import {getMovies} from './fakeMovies';
import Like from './like';
import Pagination from './pagination';

class Movies extends Component {
  state = { 
    movies: getMovies(),
    currentPage:1,
    pageSize: 4
  };

  handleDelete = (movie) => {
    const mov = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({movies:mov});
  }
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({movies});
  }
  handlePageChange = (page) => {
    this.setState({currentpage: page});
  }



  render() { 
    const { movies } = this.state; 
    const {pageSize, currentPage} = this.state;

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
                <th className="px-5 py-2 mx-5 text-start border-b-1">
                  <Like liked={movie.liked} onClick={() => this.handleLike(movie)}/>
                </th>
                <td className="px-5 py-2 mx-5 text-start border-b-1">
                  <button onClick={() => this.handleDelete(movie)} className="w-30 h-8 bg-red-500 text-2xl text-white rounded-md">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination itemsCount={movies.length} 
                    pageSize={pageSize} 
                    currentPage = {currentPage}
                    onPageChange={this.handlePageChange}/>
        </div>
    );
  }
}

export default Movies;