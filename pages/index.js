import { useState } from "react";
import Head from "next/head";
import MenuHeader from "../components/MenuHeader.js";
import MenuNav from "../components/MenuNav.js";
import MenuContacts from "../components/MenuContacts.js";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  const [menuImgSrc, setMenuImgSrc] = useState("/menu-home.png");

  function handleNavHover(newMenuImgSrc) {
    setMenuImgSrc(newMenuImgSrc);
  }

  function handleNavUnhover() {
    setMenuImgSrc("/menu-home.png");
  }

  return (
    <>
      <Head>
        <title>Nokz</title>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
      </Head>

      <Container className="vh-100">
        <Row className="h-100 align-items-center">
          <Col className="text-center">
            <MenuHeader title={"Nokz"} description={"< Software Engineer />"} />
            <hr className="separator" />
            <MenuNav imgSrc={menuImgSrc} onNavHover={handleNavHover} onNavUnhover={handleNavUnhover} />
            <hr className="separator" />
            <MenuContacts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
