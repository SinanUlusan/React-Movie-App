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
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
      "Title": "Spider-Man: No Way Home",
      "Year": "2021",
      "imdbID": "tt10872600",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "The Matrix Resurrections",
      "Year": "2021",
      "imdbID": "tt10838180",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmRmZTA3NzAtN2RlZC00Mjc1LTllZDQtNDc0YTYzZmM4ZTQ1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      "Title": "Logan",
      "Year": "2017",
      "imdbID": "tt3315342",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Transformers",
      "Year": "2007",
      "imdbID": "tt0418279",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "Terminator 2: Judgment Day",
      "Year": "1991",
      "imdbID": "tt0103064",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
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
