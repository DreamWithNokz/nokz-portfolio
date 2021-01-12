import Link from "next/link";
import { Container } from "react-bootstrap";
import { FiXCircle } from "react-icons/fi";

const PageHeader = ({ title, description }) => (
  <Container className="page-header">
    <hr className="separator" />
    <Link href="/">
      <a className="page-header--close">
        <FiXCircle size={40} />
      </a>
    </Link>
    <h1 className="page-header__title">{title}</h1>
    <p className="page-header__description">{description}</p>
  </Container>
);

export default PageHeader;
