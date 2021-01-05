import { FiMail, FiTwitter, FiGithub } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";

const MenuContacts = () => (
  <Container>
    <Row className="justify-content-center mt-5">
      <Col xs={4} md={2}>
        <a href="mailto:nmebron@protonmail.com">
          <FiMail className="menu-contacts--effect" size={60} />
        </a>
      </Col>
      <Col xs={4} md={2}>
        <a href="https://github.com/DreamWithNokz" target="_blank">
          <FiGithub className="menu-contacts--effect" size={60} />
        </a>
      </Col>
      <Col xs={4} md={2}>
        <a href="https://twitter.com/DreamWithNokz" target="_blank">
          <FiTwitter className="menu-contacts--effect" size={60} />
        </a>
      </Col>
    </Row>
  </Container>
);

export default MenuContacts;
