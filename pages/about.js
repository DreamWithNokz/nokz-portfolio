import Head from "next/head";
import Link from "next/link";
import { Container, Badge } from "react-bootstrap";
import {
  FiLink,
  FiUser,
  FiBriefcase,
  FiCpu,
  FiAward,
  FiMonitor,
} from "react-icons/fi";
import PageHeader from "../components/PageHeader";

const About = () => (
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
          <strong>React JS</strong> for front-end development. Though I am also
          open to use other technologies as well.
        </p>
        <p className="about__text">
          On my free time, I usually configure my Linux environment, develop
          some applications, and draw some random anime girls that you can see
          on my Twitter. I play games as well but only if there is someone to
          play with.
        </p>
      </div>

      <div className="about--add-space">
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
          <Badge variant="secondary">Apr 2019 - May 2020</Badge>
        </h5>
        <p className="about__position">Junior Software Engineer</p>
      </div>

      <div className="about--add-space">
        <h2 id="tech-stack">
          <FiCpu /> Tech Stack
        </h2>
        <Badge pill variant="secondary">HTML/CSS</Badge>{' '}
        <Badge pill variant="secondary">Javascript</Badge>{' '}
        <Badge pill variant="secondary">Java</Badge>{' '}
        <Badge pill variant="secondary">SQL</Badge>{' '}
        <Badge pill variant="secondary">PHP</Badge>{' '}
        <Badge pill variant="secondary">Spring Boot</Badge>{' '}
        <Badge pill variant="secondary">React.js</Badge>{' '}
        <Badge pill variant="secondary">Bootstrap</Badge>{' '}
        <Badge pill variant="secondary">Next.js</Badge>{' '}
        <Badge pill variant="secondary">Symfony</Badge>{' '}
        <Badge pill variant="secondary">Semantic UI</Badge>{' '}
        <Badge pill variant="secondary">VS Code</Badge>{' '}
        <Badge pill variant="secondary">Vim/Neovim</Badge>{' '}
        <Badge pill variant="secondary">Vagrant</Badge>{' '}
        <Badge pill variant="secondary">Virtual Box</Badge>{' '}
        <Badge pill variant="secondary">MySQL</Badge>{' '}
        <Badge pill variant="secondary">PostgreSQL</Badge>{' '}
        <Badge pill variant="secondary">Git</Badge>{' '}
        <Badge pill variant="secondary">Thymeleaf</Badge>{' '}
        <Badge pill variant="secondary">Twig</Badge>{' '}
        <Badge pill variant="secondary">SCSS</Badge>{' '}
        <Badge pill variant="secondary">Vercel</Badge>{' '}
        <Badge pill variant="secondary">Chart.js</Badge>{' '}
        <Badge pill variant="secondary">NPM</Badge>{' '}
        <Badge pill variant="secondary">Yarn</Badge>{' '}
        <Badge pill variant="secondary">Github</Badge>{' '}
        <Badge pill variant="secondary">Youtube Data API</Badge>{' '}
        <Badge pill variant="secondary">Manjaro Linux</Badge>{' '}
      </div>

      <div className="about--add-space">
        <h2 id="accomplishments">
          <FiAward /> Accomplishments
        </h2>
        <p className="about__text">
          <Badge variant="secondary">2018</Badge>
          <ul>
            <li>
              Android ATC – Android Certified Application Developer V7: AND-401
            </li>
            <li>
              Oracle Workforce Development Program – Java SE 8 Programming
            </li>
          </ul>
        </p>
      </div>

      <div>
        <h2 id="work-environment">
          <FiMonitor /> Work Environment
        </h2>
        <p className="about__text">
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
          <Badge variant="secondary">Software</Badge>
          <ul>
            <li>
              <strong>Code Editor:</strong> Neovim/VS Code
            </li>
            <li>
              <strong>OS:</strong> Manjaro Linux
            </li>
            <li>
              <strong>Window Manager:</strong> i3wm
            </li>
            <li>
              <strong>Painting Tool:</strong> Krita/Aseprite
            </li>
          </ul>
        </p>
      </div>
      <hr className="separator" />
    </Container>
  </>
);

export default About;
