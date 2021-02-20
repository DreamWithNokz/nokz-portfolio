import Head from "next/head";
import { Container, Badge } from "react-bootstrap";
import {
  FiUser,
  FiCpu,
  FiAward,
  FiMonitor,
  FiBriefcase,
  FiLink,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";
import PageFooter from "../components/PageFooter";
import { Row, Col } from "react-bootstrap";

const About = () => {
  const FRONTENDS = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "Styled Components",
    "Thymeleaf",
    "Twig",
  ];
  const BACKENDS = ["Java", "PHP", "PostgreSQL", "MySQL"];
  const FRAMEWORKS = [
    "ReactJS",
    "NextJS",
    "GatsbyJS",
    "Spring Boot",
    "Symfony",
    "Semantic UI",
    "Material UI",
  ];
  const DEVELOPMENTS = [
    "Git",
    "VS Code",
    "Vim",
    "Github",
    "Linux",
    "Vercel",
    "Vagrant",
  ];
  const TESTING_TOOLS = ["Postman", "Mocha", "JUnit"];

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
          <h2 id="introduction" className="mb-4">
            <FiUser /> Introduction
          </h2>
          <p className="about__text">
            Hello! You may call me <strong>Nokz</strong>. It is the handle that
            I use, as I don't want to reveal my real name too much online.
          </p>
          <p className="about__text">
            I have professional experience as a{" "}
            <strong>Software Engineer</strong> providing web development
            services for different kinds of clients. On my free time, I usually
            configure my Linux environment, develop some applications, and draw
            some random stuffs.
          </p>
          <p className="about__text">
            If you're interested to know a little bit about the configuration of
            my <strong>Linux environment</strong>, you may check it here in this{" "}
            <a
              href="https://github.com/DreamWithNokz/personal-dotfiles"
              className="link--red-base font-weight-bold"
              target="_blank"
            >
              repository <FiLink />
            </a>
            . It contains the <strong>dotfiles</strong> that I use as well as a{" "}
            <strong>script</strong> that I made to automatically back-up and
            restore the config files. I've also uploaded the{" "}
            <strong>source code</strong> of this website in which you can find
            in{" "}
            <a
              href="https://github.com/DreamWithNokz/personal-website"
              className="link--red-base font-weight-bold"
              target="_blank"
            >
              here <FiLink />
            </a>
            . You may use them however you please.
          </p>
        </div>

        <div className="about--add-space">
          <h2 id="tech-stack">
            <FiCpu /> Tech Stack
          </h2>
          <Row>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Front-End
              </h5>
              {getSkills(FRONTENDS)}
            </Col>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Back-End
              </h5>
              {getSkills(BACKENDS)}
            </Col>
          </Row>
          <Row>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Frameworks
              </h5>
              {getSkills(FRAMEWORKS)}
            </Col>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Development
              </h5>
              {getSkills(DEVELOPMENTS)}
            </Col>
          </Row>
          <Row>
            <Col sm>
              <h5 className="pt-3" style={{ color: "#dedede" }}>
                Testing Tools
              </h5>
              {getSkills(TESTING_TOOLS)}
            </Col>
            <Col sm></Col>
          </Row>
        </div>

        <div className="about--add-space">
          <h2 id="work-history" className="mb-4">
            <FiBriefcase /> Work History
          </h2>
          <h5 className="about__company">
            Bizwind Philippines, Inc.&nbsp;
            <a
              className="about__company-link"
              href="http://www.bizwind.com/"
              target="_blank"
            >
              <FiLink />
            </a>
            &nbsp;
            <Badge variant="secondary">2019 - 2020</Badge>
          </h5>
          <p className="about__position">Junior Software Engineer</p>
        </div>

        <div className="about--add-space">
          <h2 id="accomplishments" className="mb-4">
            <FiAward /> Accomplishments
          </h2>
          <div className="about__text">
            <Badge variant="secondary">2018</Badge>
            <ul>
              <li>
                Android ATC – Android Certified Application Developer V7:
                AND-401
              </li>
              <li>
                Oracle Workforce Development Program – Java SE 8 Programming
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 id="work-environment" className="mb-4">
            <FiMonitor /> Work Environment
          </h2>
          <div className="about__text">
            <Row>
              <Col sm>
                <Badge variant="secondary">Hardware</Badge>
                <ul>
                  <li>
                    <strong>Laptop:</strong> Lenovo Thinkpad x230
                  </li>
                  <li>
                    <strong>Mouse:</strong> Logitech MX Ergo
                  </li>
                  <li>
                    <strong>Tablet:</strong> One by Wacom
                  </li>
                  <li>
                    <strong>Powerbank:</strong> Dobe Powerbank TY-19203
                  </li>
                </ul>
              </Col>
              <Col sm>
                <Badge variant="secondary">Software</Badge>
                <ul>
                  <li>
                    <strong>Code Editor:</strong> Neovim / VS Code
                  </li>
                  <li>
                    <strong>OS:</strong> Manjaro Linux
                  </li>
                  <li>
                    <strong>Window Manager:</strong> i3wm
                  </li>
                  <li>
                    <strong>Painting Tool:</strong> Krita / Aseprite
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <PageFooter />
    </>
  );
};

export default About;
