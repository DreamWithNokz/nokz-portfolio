import Head from "next/head";
import { Container, Badge } from "react-bootstrap";
import { FiUser, FiCpu } from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Row, Col } from "react-bootstrap";

const About = () => {
  const frontends = [
    "HTML",
    "CSS",
    "SASS",
    "LESS",
    "JavaScript",
    "Thymeleaf",
    "Twig",
  ];
  const backends = ["Java", "PHP", "PostgreSQL", "MySQL"];
  const frameworks = [
    "ReactJS",
    "NextJS",
    "GatsbyJS",
    "Spring Boot",
    "Symfony",
    "Semantic UI",
  ];
  const developments = [
    "Git",
    "VS Code",
    "Vim",
    "Github",
    "Linux",
    "Vercel",
    "Vagrant",
  ];
  const testingTools = ["Postman", "Mocha", "JUnit"];

  const getSkills = (skills) =>
    skills.map((skill) => (
      <Badge
        pill
        style={{ marginLeft: "2px", marginRight: "2px" }}
        variant="secondary"
        key={skill}
      >
        {skill}
      </Badge>
    ));

  return (
    <>
      <Head>
        <title>Nokz | About</title>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
      </Head>

      <PageHeader
        title={"About"}
        description={"Get to know some stuffs about me"}
      />

      <Container className="page-content">
        <div className="about--add-space">
          <h2 id="introduction">
            <FiUser /> Introduction
          </h2>
          <p className="about__text">
            Hello! You may call me <strong>Nokz</strong>. It is the handle that
            I use as I don't want to reveal my real name too much online.
          </p>
          <p className="about__text">
            I have professional experience as a{" "}
            <strong>Software Engineer</strong> providing web development
            services for different kinds of clients. On my free time, I usually
            configure my Linux environment, develop some applications, and draw
            some random stuffs.
          </p>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h2 id="tech-stack">
            <FiCpu /> Skills
          </h2>
          <Row>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Front-End
              </h5>
              {getSkills(frontends)}
            </Col>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Back-End
              </h5>
              {getSkills(backends)}
            </Col>
          </Row>
          <Row>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Frameworks
              </h5>
              {getSkills(frameworks)}
            </Col>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Development
              </h5>
              {getSkills(developments)}
            </Col>
          </Row>
          <Row>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Testing Tools
              </h5>
              {getSkills(testingTools)}
            </Col>
            <Col sm></Col>
          </Row>
        </div>
      </Container>

      <PageFooter />
    </>
  );
};

export default About;
