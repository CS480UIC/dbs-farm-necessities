import React from 'react';
import { Container, Image } from 'react-bootstrap';
import image from '../../assets/home-page-image.jpg';

const Home = () => {
  return (
    <div>
      <Container fluid className="p-0">
        <Image src={image} fluid></Image>
      </Container>
    </div>
  );
};

export default Home;
