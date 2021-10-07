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
      "Title": "How I Met Your Mother",
      "Year": "2005–2014",
      "imdbID": "tt0460649",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_SX300.jpg"
    },
    {
      "Title": "Friends",
      "Year": "1994–2004",
      "imdbID": "tt0108778",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    },
    {
      "Title": "CM101MMXI Fundamentals",
      "Year": "2013",
      "imdbID": "tt2592910",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0Njc3MDQ5MV5BMl5BanBnXkFtZTcwNzIwNTQ5OA@@._V1_SX300.jpg"
    },
    {
      "Title": "Brooklyn Nine-Nine",
      "Year": "2013–2021",
      "imdbID": "tt2467372",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_SX300.jpg"
    },
    {
      "Title": "Recep Ivedik 3",
      "Year": "2010",
      "imdbID": "tt1577061",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjEwOTNlZjYtNTVlMS00M2Q5LTk0YmQtMWIzZDI4ODIyODlkXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg"
    },
    {
      "Title": "Archer",
      "Year": "2009–",
      "imdbID": "tt1486217",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTg3NTMwMzY2OF5BMl5BanBnXkFtZTgwMDcxMjQ0NDE@._V1_SX300.jpg"
    },
    {
      "Title": "Once Upon a Time... in Hollywood",
      "Year": "2019",
      "imdbID": "tt7131622",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
    },
    {
      "Title": "Ghostbusters: Afterlife",
      "Year": "2021",
      "imdbID": "tt4513678",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDg3OWVlZGEtYjY3Ni00MzQ1LTgxOGYtYmVkMTY2MWIyMjEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg"
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
