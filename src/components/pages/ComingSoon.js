import React, { useState } from "react";
import styled from "styled-components";
import MovieInspectComponent from "./MovieInspect/MovieInspectComponent";
import MovieInspectInfoComponent from "./MovieInspect/MovieInspectInfoComponent";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import "antd/dist/antd.css";

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
        "Title": "Venom: Let There Be Carnage",
        "Year": "2021",
        "imdbID": "tt7097896",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzA4MjEzMTktZWMxYS00YWQ1LWJhMWItZTUyMGFmZjFmMjE4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/venom-zehirli-o%CC%88fke-2-filmi"
    },
    {
        "Title": "Cinni Kabus",
        "Year": "2021",
        "imdbID": "tt15466052",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjJiYzkyZTgtMjdkNy00ZGZiLWFlNTctMTI1Njg3YTIzYTdkXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/cinni-kabus-filmi"
    },
    {
        "Title": "Dayi: Bir Adamin Hikayesi",
        "Year": "2021",
        "imdbID": "tt11267076",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTlhMmQ4ZjAtNzEyYy00YTE4LWJjNzEtOThmOTZiNTgzOWJlXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/dayi-bir-adamin-hikayesi-filmi"
    },
    {
        "Title": "The Courier",
        "Year": "2020",
        "imdbID": "tt8368512",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjg4YTJlNzMtY2U0OC00N2FjLWI0ZTgtNGM1NDRhMWNhZmRkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/kurye-filmi"
    },
    {
        "Title": "Hep Yek 4",
        "Year": "2021",
        "imdbID": "tt13057656",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjk5MDZlOWEtM2FmMC00OGUyLWJlYzgtNDA5ZjFlMTA4ZmYwXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/hep-yek-4-bela-okuma-altan-filmi"
    },
    {
        "Title": "Asylum: Twisted Horror and Fantasy Tales",
        "Year": "2020",
        "imdbID": "tt11708140",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2RhMjM3ODMtOWU1MC00ODE4LWI1NTktYmY1MzZiOWVkZjZkXkEyXkFqcGdeQXVyNzc0MTgzMzU@._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/paranormal-hik%C3%A2yeler-filmi"
    },
    {
        "Title": "Censor",
        "Year": "2021",
        "imdbID": "tt10329614",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzNlZjUwMjItNDc3Ny00NWFhLWEwZDItMTNjMThhZGFiNjYyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/sansur-filmi"
    },
    {
        "Title": "Peter Rabbit 2: The Runaway",
        "Year": "2021",
        "imdbID": "tt8376234",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjkyMDQyZWQtNGFhYy00NjdmLWEzMjctYzAxMmJkNDkxZmRlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
        "Href": "https://www.cinemaximum.com.tr/peter-rabbit-kacak-tavsan-filmi"
    },
  ]);
  const [selectedMovie, onMovieSelect] = useState();
  return (
    <Container>
      <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem'}}>
        <Link to='/movie-house'>
            <Button style={{cursor: 'pointer', width: '200px', marginRight: '2rem' }}>Films Now Showing</Button>
        </Link>
        <Link to='/coming-soon'>
          <Button style={{cursor: 'pointer', width: '200px', backgroundColor: 'gray', color: '#bc1c24', borderColor: 'black' }}>Soon</Button>
        </Link>
      </Col>
      {selectedMovie && <MovieInspectInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieInspectComponent
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
