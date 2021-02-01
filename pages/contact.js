import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import { FiMail, FiTwitter, FiGithub, FiCoffee } from "react-icons/fi";

const Contact = () => {
  const getContact = (bg, text, icon, name, desc, href, button) => (
    <Card bg={bg} style={{ width: "150px" }} className="mb-2" text={text}>
      <Card.Header>
        {icon} {name}
      </Card.Header>
      <Card.Body>
        <div style={{ display: "inline" }}>
          <a href={href} style={{ textDecoration: "none" }} target="_blank">
            <Button
              style={{ borderRadius: "30px" }}
              size="sm"
              variant={button}
              block
            >
              {desc}
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

      <Container className="d-flex align-items-center page-content">
        <Row className="w-100 justify-content-center">
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "dark",
              "light",
              <FiMail size={20} />,
              "Email",
              "Send Mail",
              "mailto:nmebron@protonmail.com",
              "light"
            )}
          </Col>
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "light",
              "dark",
              <FiGithub size={20} />,
              "Github",
              "Follow Me",
              "https://github.com/DreamWithNokz",
              "dark"
            )}
          </Col>
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "primary",
              "light",
              <FiTwitter size={20} />,
              "Twitter",
              "Follow Me",
              "https://twitter.com/DreamWithNokz",
              "light"
            )}
          </Col>
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "info",
              "light",
              <FiCoffee size={20} />,
              "Ko-fi",
              "Support Me",
              "https://ko-fi.com/dreamwithnokz",
              "danger"
            )}
          </Col>
        </Row>
      </Container>

      <Container className="text-left footer">
        &#169; 2021 dreamwithnokz
      </Container>
    </>
  );
};

export default Contact;
