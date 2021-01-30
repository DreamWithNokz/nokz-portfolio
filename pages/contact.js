import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import { FiMail, FiTwitter, FiGithub, FiCoffee } from "react-icons/fi";

const Contact = () => {
  const getContact = (bg, text, icon, name, href, button) => (
    <Card
      bg={bg}
      style={{ width: "250px", height: "250px" }}
      className="mb-3"
      text={text}
    >
      <Card.Body className="d-flex align-items-center align-self-center">
        <div style={{ display: "inline" }}>
          {icon}
          <a href={href} target="_blank">
            <Button size="lg" variant={button} block>
              {name.toUpperCase()}
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Head>
        <title>Nokz | Contact</title>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
      </Head>

      <PageHeader title={"Contact"} description={"Get in touch with me"} />

      <Container className=" text-center page-content">
        <Row className="">
          <Col className="d-flex justify-content-center">
            {getContact(
              "dark",
              "light",
              <FiMail size={100} />,
              "Email",
              "mailto:nmebron@protonmail.com",
              "light"
            )}
          </Col>
          <Col className="d-flex justify-content-center">
            {getContact(
              "light",
              "dark",
              <FiGithub size={100} />,
              "Github",
              "https://github.com/DreamWithNokz",
              "dark"
            )}
          </Col>
          <Col className="d-flex justify-content-center">
            {getContact(
              "primary",
              "light",
              <FiTwitter size={100} />,
              "Twitter",
              "https://twitter.com/DreamWithNokz",
              "light"
            )}
          </Col>
          <Col className="d-flex justify-content-center">
            {getContact(
              "info",
              "light",
              <FiCoffee size={100} />,
              "Ko-fi",
              "https://ko-fi.com/dreamwithnokz",
              "danger"
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
