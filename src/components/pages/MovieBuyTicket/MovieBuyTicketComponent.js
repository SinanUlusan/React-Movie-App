import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Col, Tag, Button } from "antd";
import "antd/dist/antd.css";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MovieComponent = (props) => {
  const { Title, Year, imdbID, Type, Poster, Href } = props.movie;

  return (
    <MovieContainer>
      <CoverImage src={Poster} alt={Title} />
      <MovieName>{Title}</MovieName>
      <Col>
        <Tag>Year: {Year}</Tag>
        <Tag color="magenta">Type: {Type}</Tag>
        <Button
          onClick={() => {
            props.onMovieSelect(imdbID);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{ width: "100%", marginTop: "5px" }}
        >
          Details
        </Button>
        <Link target="_blank" to={{ pathname: Href }}>
          <Button style={{ width: "100%", marginTop: "5px", color: "rgb(65, 168, 248)" }}>
            Buy Ticket
          </Button>
        </Link>
      </Col>
    </MovieContainer>
  );
};
export default MovieComponent;
