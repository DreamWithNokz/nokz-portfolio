import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container, Col, Row, Card, Badge } from "react-bootstrap";
import { FiXCircle, FiLink2, FiGithub } from "react-icons/fi";

const Projects = () => (
  <>
    <Head>
      <title>Nokz | Projects</title>
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
    </Head>

    <Container className="projects">
      <hr className="separator" />
      <Link href="/">
        <a className="projects--close">
          <FiXCircle size={40} />
        </a>
      </Link>
      <h1 className="projects__title">Projects</h1>
      <p className="projects__description">Works that I have made</p>
    </Container>

    <Container className="projects-content">
      <Row>
        <Col>
          <Card className="bg-dark" style={{ margin: "20px" }}>
            <Card.Body>
              <Card.Title>Hololive Youtube Subscriber Count</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge variant="secondary">Next.js</Badge>&nbsp;
                <Badge variant="secondary">SCSS</Badge>&nbsp;
                <Badge variant="secondary">Chart.js</Badge>&nbsp;
                <Badge variant="secondary">Bootstrap 4</Badge>&nbsp;
                <Badge variant="secondary">PWA</Badge>&nbsp;
                <Badge variant="secondary">Styled Components</Badge>&nbsp;
                <Badge variant="secondary">Youtube Data API</Badge>&nbsp;
              </Card.Subtitle>
              <Card.Text>
                A web app that shows a graph for the number of
                subscribers of each of the Hololive members.
              </Card.Text>
              <Card.Link
                className="projects-content--links"
                href="https://hysc.vercel.app"
                target="_blank"
              >
                App <FiLink2 />
              </Card.Link>
              <Card.Link
                className="projects-content--links"
                href="https://github.com/DreamWithNokz/hololive-youtube-subscriber-count"
                target="_blank"
              >
                Github <FiGithub />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);

export default Projects;
