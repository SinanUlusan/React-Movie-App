import React, { useState } from "react";
import styled from "styled-components";
import MovieBuyTicketComponent from "./MovieBuyTicket/MovieBuyTicketComponent";
import MovieBuyTicketInfoComponent from "./MovieBuyTicket/MovieBuyTicketInfoComponent";
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
      "Title": "No Time to Die",
      "Year": "2019",
      "imdbID": "tt10839440",
      "Type": "movie",
      "Poster": "https://media.cinemaximum.com.tr/255//Files/POSTER/bond_yeni.jpg",
      "Href": "https://www.cinemaximum.com.tr/olmek-icin-zaman-yok-filmi"
    },
    {
      "Title": "The Boss Baby: Family Business",
      "Year": "2021",
      "imdbID": "tt6932874",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWY1N2I5MGUtZTBmNS00MWZmLWEyNzAtZjliNzk0ZDVkYzI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/patron-bebek-2-aile-sirketi-filmi"
    },
    {
      "Title": "Luca",
      "Year": "2021",
      "imdbID": "tt12801262",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/luka-filmi"
    },
    {
      "Title": "Shang-Chi and the Legend of the Ten Rings",
      "Year": "2021",
      "imdbID": "tt9376612",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/shang-chi-ve-on-halka-efsanesi-filmi"
    },
    {
      "Title": "Don't Breathe 2",
      "Year": "2021",
      "imdbID": "tt6246322",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWRmNzQ0N2QtZmJlYS00MWQ4LTlhY2ItODNmY2JkNGYyZTRlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/nefesini-tut-2-filmi"
    },
    {
      "Title": "The War with Grandpa",
      "Year": "2020",
      "imdbID": "tt4532038",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTlkZDQ1ODEtY2ZiMS00OGNhLWJlZDctYzY0NTFmNmQ2NDAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/iyi-olan-kazansin-filmi"
    },
    {
      "Title": "The Father",
      "Year": "2020",
      "imdbID": "tt10272386",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/baba-filmi"
    },
    {
      "Title": "Avci Ilk Kehanet",
      "Year": "2021",
      "imdbID": "tt13051122",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTc2YzllMzMtYjMyZi00MThkLTg0NTgtOTY0ZTA0ZGNlMjQ1XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg",
      "Href": "https://www.cinemaximum.com.tr/avci-ilk-kehanet-filmi"
    },
  ]);
  const [selectedMovie, onMovieSelect] = useState();
  return (
    <Container>
      <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem'}}>
        <Button style={{cursor: 'pointer', width: '200px', marginRight: '2rem', backgroundColor: 'gray', color: '#bc1c24', borderColor: 'black' }}>Films Now Showing</Button>
        <Link to='/coming-soon'>
          <Button style={{cursor: 'pointer', width: '200px' }}>Soon</Button>
        </Link>
      </Col>
      {selectedMovie && <MovieBuyTicketInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieBuyTicketComponent
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
