import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Container, Col, Row, Card, Badge } from "react-bootstrap";
import { FiXCircle, FiLink2, FiGithub } from "react-icons/fi";
import PageHeader from "../components/PageHeader";

const Projects = () => (
  <>
    <Head>
      <title>Nokz | Projects</title>
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
      />
    </Head>

    <PageHeader title={"Projects"} description={"Works that I have made"} />

    <Container className="page-content">
      <h2 id="web-apps" className="text-center">
        Web Apps
      </h2>
      <Row>
        <Col sm>
          <Card className="projects__entry bg-dark">
            <Card.Body>
              <Card.Title>Hololive Youtube Subscriber Count</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Badge variant="secondary">Next.js</Badge>&nbsp;
                <Badge variant="secondary">SCSS</Badge>&nbsp;
                <Badge variant="secondary">Chart.js</Badge>&nbsp;
                <Badge variant="secondary">React Bootstrap</Badge>&nbsp;
                <Badge variant="secondary">PWA</Badge>&nbsp;
                <Badge variant="secondary">Styled Components</Badge>&nbsp;
                <Badge variant="secondary">Youtube Data API</Badge>&nbsp;
              </Card.Subtitle>
              <Card.Text>
                A web app that shows a graph for the number of subscribers of
                each of the Hololive members.
              </Card.Text>
              <Card.Link
                className="projects--links"
                href="https://hysc.vercel.app"
                target="_blank"
              >
                App <FiLink2 />
              </Card.Link>
              <Card.Link
                className="projects--links"
                href="https://github.com/DreamWithNokz/hololive-youtube-subscriber-count"
                target="_blank"
              >
                Github <FiGithub />
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm></Col>
      </Row>
      <hr className="separator" />
    </Container>
  </>
);

export default Projects;
