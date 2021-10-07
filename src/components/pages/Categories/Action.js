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
      "Title": "The Dark Knight",
      "Year": "2008",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
    },
    {
      "Title": "Squid Game",
      "Year": "2021–",
      "imdbID": "tt10919420",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDI0ZDVhNTctOWI5Yy00NDE4LWI0MjctYTJiODU4ODA1YTJjXkEyXkFqcGdeQXVyNDY5MjMyNTg@._V1_SX300.jpg"
    },
    {
        "Title": "The Matrix",
        "Year": "1999",
        "imdbID": "tt0133093",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
        "Title": "The Lord of the Rings: The Return of the King",
        "Year": "2003",
        "imdbID": "tt0167260",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Suicide Squad",
        "Year": "2016",
        "imdbID": "tt1386697",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_SX300.jpg"
    },
    {
        "Title": "The Fast and the Furious",
        "Year": "2001",
        "imdbID": "tt0232500",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    },
	{
        "Title": "Resident Evil: Apocalypse",
        "Year": "2004",
        "imdbID": "tt0318627",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1NTUxMzk0Nl5BMl5BanBnXkFtZTcwNDQ1MDIzMw@@._V1_SX300.jpg"
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