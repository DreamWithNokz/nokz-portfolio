import Head from "next/head";
import { Container, Badge } from "react-bootstrap";
import { FiLink, FiUser, FiBriefcase, FiCpu } from "react-icons/fi";
import PageHeader from "../components/PageHeader";

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
    "Vagrant",
    "VS Code",
    "Vim",
    "Github",
    "Linux",
    "Vercel",
  ];

  const getFrontEnds = (frontends) =>
    frontends.map((frontend) => (
      <Badge
        pill
        style={{ marginLeft: "2px", marginRight: "2px" }}
        variant="secondary"
        key={frontend}
      >
        {frontend}
      </Badge>
    ));

  const getBackEnds = (backends) =>
    backends.map((backend) => (
      <Badge
        pill
        style={{ marginLeft: "2px", marginRight: "2px" }}
        variant="secondary"
        key={backend}
      >
        {backend}
      </Badge>
    ));

  const getFrameworks = (frameworks) =>
    frameworks.map((framework) => (
      <Badge
        pill
        style={{ marginLeft: "2px", marginRight: "2px" }}
        variant="secondary"
        key={framework}
      >
        {framework}
      </Badge>
    ));

  const getDevelopments = (developments) =>
    developments.map((development) => (
      <Badge
        pill
        style={{ marginLeft: "2px", marginRight: "2px" }}
        variant="secondary"
        key={development}
      >
        {development}
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
            Hello! You may call me <strong>Nokz</strong>. It is the handle name
            that I use everywhere as I don't really want to reveal my real name
            too much online.
          </p>
          <p className="about__text">
            I have a professional experience working as a Software Engineer on a
            company that mostly caters web development services for Japanese
            clients. Currently, I mainly focus on using{" "}
            <strong>Spring Boot</strong> for back-end development and{" "}
            <strong>React JS</strong> for front-end development. Though I am
            also open to use other technologies as well.
          </p>
          <p className="about__text">
            On my free time, I usually configure my Linux environment, develop
            some applications, and draw some random anime girls that you can see
            on my Twitter. I play games as well but only if there is someone to
            play with.
          </p>
        </div>

        <div className="about--add-space">
          <h2 id="tech-stack">
            <FiCpu /> Tech Stack
          </h2>
          <h5 className="pt-3" style={{ color: "#dedede" }}>
            Front-End
          </h5>
          {getFrontEnds(frontends)}
          <h5 className="pt-3" style={{ color: "#dedede" }}>
            Back-End
          </h5>
          {getBackEnds(backends)}
          <h5 className="pt-3" style={{ color: "#dedede" }}>
            Frameworks
          </h5>
          {getFrameworks(frameworks)}
          <h5 className="pt-3" style={{ color: "#dedede" }}>
            Development
          </h5>
          {getDevelopments(developments)}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <h2 id="work-history">
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
      </Container>
    </>
  );
};

export default About;
