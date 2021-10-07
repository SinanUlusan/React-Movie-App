import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {  
  Row,
  Col, 
  Tag,
  Button
} from 'antd';
import 'antd/dist/antd.css';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  position: relative;
`;
const CoverImage = styled.img`
  object-fit: cover;
  position: relative;

`;
const NewName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.85);
  margin: 15px 0 auto 0;
  white-space: none;
  overflow: hidden;
  text-align: center;
  position: relative;
`;
const MovieComponent = (props) => {
  const { Title, Date, Writer, Poster, Href } = props.movie;

  return (
      <NewsContainer>
            <CoverImage src={Poster} alt={Title} />
            <NewName style={{fontWeight: '500', fontSize: '15px'}}>{Title}</NewName>
            <Row style={{display: 'flex', marginTop: '5px', padding: '0', flexDirection: 'column', position: 'relative', bottom: '0'}}>
              <Col>
                  <Tag style={{color: '#c41d7f', fontSize: '11px'}}>{Date}</Tag>
              </Col>
              <Col>
                  <Tag style={{color: 'rgb(65, 168, 248)', fontSize: '13px', marginTop: '5px'}}>{Writer}</Tag>
              </Col>
              <Link target="_blank" to = {{ pathname: Href}}>
                <Button style={{width: '100%', marginTop: '5px'}}>Details</Button>
              </Link>
            </Row>
      </NewsContainer>
  );
};
export default MovieComponent;
