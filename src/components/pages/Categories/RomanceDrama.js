import React, { useState } from "react";
import styled from "styled-components";
import MovieComponent from "../MovieInfo/MovieComponent";
import MovieInfoComponent from "../MovieInfo/MovieInfoComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

function App() {
  const [movieList] = useState([
    {
      "Title": "Titanic",
      "Year": "1997",
      "imdbID": "tt0120338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
      {
      "Title": "Ask Tesadüfleri Sever",
      "Year": "2011",
      "imdbID": "tt1807950",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMjMyMzQzMV5BMl5BanBnXkFtZTcwNDE4MTc1NQ@@._V1_SX300.jpg"
    },
      {
      "Title": "Incir Reçeli",
      "Year": "2011",
      "imdbID": "tt1808197",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4MGY3ZWUtMDIxZC00ODM3LWIyMzEtMjI5OGQ3MTYxY2QwXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg"
    },
    {
      "Title": "Little Women",
      "Year": "2019",
      "imdbID": "tt3281548",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
      {
      "Title": "Issiz Adam",
      "Year": "2008",
      "imdbID": "tt1322930",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2QwMmZiYmItZTE0Ny00MzYxLTlkMjAtZjEyZTA1ZWRlNTU0XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_SX300.jpg"
    },
    {
      "Title": "The French Dispatch",
      "Year": "2021",
      "imdbID": "tt8847712",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
      "Title": "50 First Dates",
      "Year": "2004",
      "imdbID": "tt0343660",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_SX300.jpg"
    },
    {
      "Title": "Eternal Sunshine of the Spotless Mind",
      "Year": "2004",
      "imdbID": "tt0338013",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg"
    },
  ]);
  const [selectedMovie, onMovieSelect] = useState();
  return (
    <Container>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src=""/>
        )}
      </MovieListContainer>
    </Container>
  );
}

export default App;
