import Head from "next/head";
import { Container, Row, Card, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import { FiMail, FiTwitter, FiGithub } from "react-icons/fi";

const Contact = () => {
  const getContact = (bg, text, icon, name, desc, href, button) => (
    <Card bg={bg} style={{ width: "150px" }} className="mx-2 mb-2" text={text}>
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

      <Container className="d-flex justify-content-center align-items-center page-content">
        <Row className="justify-content-center w-100">
          {getContact(
            "dark",
            "light",
            <FiMail size={20} />,
            "Email",
            "Send Mail",
            "mailto:nmebron@protonmail.com",
            "light"
          )}
          {getContact(
            "light",
            "dark",
            <FiGithub size={20} />,
            "Github",
            "Follow Me",
            "https://github.com/DreamWithNokz",
            "dark"
          )}
          {getContact(
            "primary",
            "light",
            <FiTwitter size={20} />,
            "Twitter",
            "Follow Me",
            "https://twitter.com/DreamWithNokz",
            "light"
          )}
        </Row>
      </Container>

      <Container className="text-left footer">
        &#169; 2021 dreamwithnokz
      </Container>
    </>
  );
};

export default Contact;
