import Link from "next/link";
import { Container } from "react-bootstrap";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const PageHeader = () => (
  <Container className="footer">
    <span className="footer__copyright">
      &#169; 2020 - 2021{" "}
      <Link href="/">
        <span className="footer__name">dreamwithnokz</span>
      </Link>
    </span>
    <span className="float-right footer__links">
      <a
        href="https://twitter.com/DreamWithNokz"
        target="_blank"
        className="footer__link"
      >
        <AiFillTwitterCircle />
      </a>
      <a
        href="https://github.com/DreamWithNokz"
        target="_blank"
        className="footer__link"
      >
        <AiFillGithub />
      </a>
    </span>
  </Container>
);

export default PageHeader;
