import React from "react";
import MovieList from './movie-list.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

// this is app control form where the main title is contained and stylized and it calls the component movieist
// which is then renders the entire list of movies through the movie component in order to build all 
// the cards of all the indivudal movies and there information. its also contains a stylized footer


export default class App extends React.Component {
  render()  {
    return (
      
      <div>
        <div className="App bgsecond">
        <br />
        <header className="bg-secondary">
          <h1 className="title">Ninja Movie Reviews</h1>
        </header>
        <br />
        <div className="container-flex">
          <div className="row">
            <div className="col">
              <MovieList/>

            </div>

          </div>

        </div>

      </div>
      <footer className="m-4 p-4 text-center fs-1 fw-bold title">Thank You and Happy Watching</footer>
      </div>
    );
  }
}

