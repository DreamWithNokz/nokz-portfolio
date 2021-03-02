import { useState } from 'react';
import Head from 'next/head';
import MenuHeader from '../components/MenuHeader.js';
import MenuNav from '../components/MenuNav.js';
import MenuFooter from '../components/MenuFooter.js';
import { Container, Row, Col } from 'react-bootstrap';

const Index = () => {
  const [menuImgSrc, setMenuImgSrc] = useState('/menu-home.png');

  function handleNavHover(newMenuImgSrc) {
    setMenuImgSrc(newMenuImgSrc);
  }

  function handleNavUnhover() {
    setMenuImgSrc('/menu-home.png');
  }

  return (
    <>
      <Head>
        <title>Nokz</title>
        <meta charset="UTF-8" />
        <meta
          name="Description"
          content="Nokz's personal website that tells a little bit about the developer and showcasing some of the projects developed."
        />
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Container className="vh-100">
        <Row className="h-100 align-items-center">
          <Col className="text-center">
            <MenuHeader title={'Nokz'} description={'< Software Engineer />'} />
            <hr className="separator" />
            <MenuNav
              imgSrc={menuImgSrc}
              onNavHover={handleNavHover}
              onNavUnhover={handleNavUnhover}
            />
            <hr className="separator" />
            <MenuFooter />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
