import React, { useState } from "react";
import styled from "styled-components";
import NewsComponent from "./NewsInfo/NewsComponent";
import {Link} from 'react-router-dom';
import {  
  Button
} from 'antd';
import 'antd/dist/antd.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 55px;
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
      "Title": "IATSE Members Overwhelmingly Approve Strike Authorization; AMPTP Says It “Remains Committed To Reaching An Agreement",
      "Date": "04 October 2021",
      "Href": "https://deadline.com/2021/10/hollywood-strike-iatse-members-overwhelmingly-approve-authorization-1234843898/",
      "Writer": "by David Robb and Dominic Patten",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDcwNTMzYmQtNzc4OS00NjA0LWFiNjMtNWZiMGY5N2Q1ZWFjXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR166,0,200,300_AL_.jpg"
    },
    {
      "Title": "Venom 2’ Sinks Its Teeth Into $90 Million Domestic Debut, Shattering Pandemic-Era Record; Bond Soars Overseas While Sopranos Gets Whacked At Home",
      "Date": "03 October 2021",
      "Href": "https://www.boxofficemojo.com/article/ed3983606788/?ref_=bo_nr_rss_1",
      "Writer": "by Chris Nashawaty",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY300_CR1,0,200,300_AL_.jpg"
    },
    {
      "Title": "ViacomCBS Expands BET’s Content for Change Into Companywide Initiative (Exclusive)",
      "Date": "05 October 2021",
      "Href": "https://www.hollywoodreporter.com/tv/tv-news/bafta-2022-tv-awards-dates-rule-changes-1235024834/",
      "Writer": "The Hollywood Reporter - Movie News",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZTdkYTg4OWItYTFmNi00NWY0LWJhYjYtMWE1MWU5NzQxYmM3XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR166,0,200,300_AL_.jpg"
    },
    {
      "Title": "No Time to Die’ Ignites International Box Office With $119 Million Debut",
      "Date": "03 October 2021",
      "Href": "https://variety.com/2021/film/news/no-time-to-die-box-office-international-record-1235079723/",
      "Writer": "by Rebecca Rubin",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY300_CR1,0,200,300_AL_.jpg"
    },
    {
      "Title": "David Harewood Set for Directorial Debut With Fulwell 73 Boxing Film ‘For Whom the Bell Tolls",
      "Date": "05 October 2021",
      "Href": "https://variety.com/2021/film/news/david-harewood-for-whom-the-bell-tolls-1235081180/",
      "Writer": "by K.J. Yossman",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGFmNzRhZjUtOWFhNC00YjBlLTlkYWQtZDRlZTA2NGQ4YzZjXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR166,0,200,300_AL_.jpg"
    },
    {
      "Title": "Patton Oswalt Stars in Born Perfect’s Anti-Conversion Therapy PSA (Exclusive)",
      "Date": "05 October 2021",
      "Href": "https://variety.com/2021/film/news/patton-oswalt-born-perfect-conversion-therapy-psa-bobbys-big-problem-1235079978/",
      "Writer": "by Selome Hailu",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzYjE1N2MtZDg0ZC00NmU5LWI0NjktZjdlODBhMzUyOGQ0XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR166,0,200,300_AL_.jpg"
    },
    {
      "Title": "Simon Rex Plays a Porn Star in ‘Red Rocket’ Trailer, Set to ‘N Sync’s ‘Bye Bye Bye’",
      "Date": "05 October 2021",
      "Href": "https://variety.com/2021/film/news/red-rocket-trailer-simon-rex-sean-baker-1235058051/",
      "Writer": "by Clayton Davis and Selome Hailu",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2ViZjI3NTUtYzY0NC00MjkzLTkxZDUtZWQzNThkYzBkZGI5XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR258,0,200,300_AL_.jpg"
    },
    {
      "Title": "James Bond Rules U.K. Box Office With $35 Million Opening Weekend",
      "Date": "05 October 2021",
      "Href": "https://variety.com/2021/film/news/james-bond-no-time-to-die-uk-box-office-1235081172/",
      "Writer": "by Naman Ramachandran",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZGNkN2Y5YjctNDdiZS00OTE1LWJmYTktM2RiNTlmODRhYjhmXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_SY300_CR166,0,200,300_AL_.jpg"
    },
  ]);
  const [onMovieSelect] = useState();
  return (
    <Container>
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <NewsComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src=""/>
        )}
        <Link target="_blank" to = {{pathname: 'https://www.imdb.com/news/top'}}><Button>See All</Button></Link>
      </MovieListContainer>
    </Container>
  );
}

export default App;
